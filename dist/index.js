// src/plugin.ts
import { existsSync as existsSync2 } from "fs";
import { copyFile, mkdir } from "fs/promises";
import { dirname as dirname4, join as joinPath3, relative as relative4 } from "path";
import { fileURLToPath as fileURLToPath4 } from "url";
import { build, createServer } from "vite";
import chokidar from "chokidar";
import { createConfig } from "@sdeverywhere/check-core";

// src/run-suite.ts
import { performance } from "perf_hooks";
import pico from "picocolors";
import {
  datasetMessage,
  predicateMessage,
  runSuite,
  scenarioMessage,
  suiteSummaryFromReport
} from "@sdeverywhere/check-core";
async function runTestSuite(context, config, verbose) {
  return new Promise((resolve, reject) => {
    const t0 = performance.now();
    let lastPctByInc;
    const callbacks = {
      onProgress: (progress) => {
        const pct = Math.round(progress * 100);
        const pctByInc = Math.floor(pct / 5) * 5;
        if (lastPctByInc === void 0 || pctByInc > lastPctByInc) {
          lastPctByInc = pctByInc;
          context.log("info", `${pctByInc}%`);
        }
      },
      onComplete: (report) => {
        try {
          const t1 = performance.now();
          const elapsed = ((t1 - t0) / 1e3).toFixed(1);
          context.log("info", `
Test suite completed in ${elapsed}s`);
          const allChecksPassed = printCheckSummary(context, report.checkReport, verbose);
          if (report.comparisonReport) {
            printPerfStats(context, config.comparison, report.comparisonReport);
          }
          const suiteSummary = suiteSummaryFromReport(report);
          resolve({
            allChecksPassed,
            suiteSummary
          });
        } catch (e) {
          reject(e);
        }
      },
      onError: (error) => {
        reject(error);
      }
    };
    runSuite(config, callbacks);
  });
}
function printCheckSummary(context, checkReport, verbose) {
  function printResult(indent, status, text) {
    if (!verbose && status === "passed" && indent > 1) {
      return;
    }
    let statusChar;
    switch (status) {
      case "passed":
        statusChar = "\u2713";
        break;
      case "failed":
        statusChar = "\u2717";
        break;
      case "error":
        statusChar = "\u203C";
        break;
      default:
        statusChar = "";
        break;
    }
    const msg = `${"  ".repeat(indent)}${statusChar} ${text}`;
    context.log("info", status === "passed" ? pico.green(msg) : pico.red(msg));
  }
  function bold(s) {
    return pico.bold(s);
  }
  function printTest(test) {
    const msg = `${test.name}${verbose || test.status !== "passed" ? ":" : ""}`;
    printResult(1, test.status, msg);
  }
  let allPassed = true;
  context.log("info", "\nCheck results:");
  for (const group of checkReport.groups) {
    context.log("info", `
${group.name}`);
    for (const test of group.tests) {
      if (test.status !== "passed") {
        allPassed = false;
      }
      printTest(test);
      for (const scenario of test.scenarios) {
        printResult(3, scenario.status, scenarioMessage(scenario, bold));
        for (const dataset of scenario.datasets) {
          printResult(5, dataset.status, datasetMessage(dataset, bold));
          for (const predicate of dataset.predicates) {
            printResult(7, predicate.result.status, predicateMessage(predicate, bold));
          }
        }
      }
    }
  }
  context.log("info", "");
  return allPassed;
}
function stat(label, n) {
  return `${label}=${n.toFixed(1)}ms`;
}
function printPerfReportLine(context, perfReport) {
  const avg = stat("avg", perfReport.avgTime);
  const min = stat("min", perfReport.minTime);
  const max = stat("max", perfReport.maxTime);
  context.log("info", `    ${avg} ${min} ${max}`);
}
function printPerfStats(context, comparisonConfig, report) {
  context.log("info", "\nPerformance stats:");
  context.log("info", `  ${comparisonConfig.bundleL.name}:`);
  printPerfReportLine(context, report.perfReportL);
  context.log("info", `  ${comparisonConfig.bundleR.name}:`);
  printPerfReportLine(context, report.perfReportR);
  context.log("info", "");
}

// src/vite-config-for-bundle.ts
import { existsSync, statSync } from "fs";
import { dirname, join as joinPath, relative, resolve as resolvePath } from "path";
import { fileURLToPath } from "url";
import { nodeResolve } from "@rollup/plugin-node-resolve";

// src/var-names.ts
function sdeNameForVensimName(name) {
  return "_" + name.trim().replace(/"/g, "_").replace(/\s+!$/g, "!").replace(/\s/g, "_").replace(/,/g, "_").replace(/-/g, "_").replace(/\./g, "_").replace(/\$/g, "_").replace(/'/g, "_").replace(/&/g, "_").replace(/%/g, "_").replace(/\//g, "_").replace(/\|/g, "_").toLowerCase();
}
function sdeNameForVensimVarName(varName) {
  const m = varName.match(/([^[]+)(?:\[([^\]]+)\])?/);
  if (!m) {
    throw new Error(`Invalid Vensim name: ${varName}`);
  }
  let id = sdeNameForVensimName(m[1]);
  if (m[2]) {
    const subscripts = m[2].split(",").map((x) => sdeNameForVensimName(x));
    id += `[${subscripts.join("][")}]`;
  }
  return id;
}

// src/vite-config-for-bundle.ts
var __filename2 = fileURLToPath(import.meta.url);
var __dirname2 = dirname(__filename2);
function injectModelSpec(prepDir, modelSpec) {
  const inputSpecs = modelSpec.inputs.map((i) => {
    const varId = sdeNameForVensimVarName(i.varName);
    const inputId = i.inputId || varId;
    return {
      inputId,
      varId,
      ...i
    };
  });
  const outputSpecs = modelSpec.outputs.map((o) => {
    return {
      varId: sdeNameForVensimVarName(o.varName),
      ...o
    };
  });
  function stagedFileSize(filename) {
    const path = joinPath(prepDir, "staged", "model", filename);
    if (existsSync(path)) {
      return statSync(path).size;
    } else {
      return 0;
    }
  }
  const modelSizeInBytes = stagedFileSize("wasm-model.js");
  const dataSizeInBytes = stagedFileSize("static-data.ts");
  const moduleSrc = `
export const inputSpecs = ${JSON.stringify(inputSpecs)};
export const outputSpecs = ${JSON.stringify(outputSpecs)};
export const modelSizeInBytes = ${modelSizeInBytes};
export const dataSizeInBytes = ${dataSizeInBytes};
`;
  const virtualModuleId = "virtual:model-spec";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  return {
    name: "vite-plugin-virtual-custom",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return moduleSrc;
      }
    }
  };
}
async function createViteConfigForBundle(prepDir, modelSpec) {
  const root = resolvePath(__dirname2, "..", "template-bundle");
  const outDir = relative(root, prepDir);
  const modelWorkerPath = joinPath(prepDir, "staged", "model", "worker.js?raw");
  return {
    // Don't use an external config file
    configFile: false,
    // Use the root directory configured above
    root,
    // Don't clear the screen in dev mode so that we can see builder output
    clearScreen: false,
    // TODO: Disable vite output by default?
    // logLevel: 'silent',
    // Configure path aliases
    resolve: {
      alias: [
        // Inject the configured model worker
        {
          find: "@_model_worker_",
          replacement: modelWorkerPath
        },
        // XXX: Prevent Vite from using the `browser` section of `threads/package.json`
        // since we want to force the use of the general module (under dist-esm) that chooses
        // the correct implementation (Web Worker vs worker_threads) at runtime.  Currently
        // Vite's library mode is browser focused, so using a `customResolver` seems to be
        // the easiest way to prevent Vite from picking up the `browser` exports.
        {
          find: "threads",
          replacement: "threads",
          customResolver: async function(source, importer, options) {
            const customResolver = nodeResolve({ browser: false });
            const resolved = await customResolver.resolveId.call(this, source, importer, options);
            if (source === "threads/worker") {
              return resolved.id.replace("worker.mjs", "dist-esm/worker/index.js");
            } else {
              return resolved.id.replace("index.mjs", "dist-esm/index.js");
            }
          }
        }
      ]
    },
    plugins: [
      // Use a virtual module plugin to inject the model spec values
      injectModelSpec(prepDir, modelSpec)
    ],
    build: {
      // Write output files to the configured directory (instead of the default `dist`);
      // note that this must be relative to the project `root`
      outDir,
      emptyOutDir: false,
      lib: {
        entry: "./src/index.ts",
        formats: ["es"],
        fileName: () => "check-bundle.js"
      },
      rollupOptions: {
        // Don't transform Node imports used by threads.js
        external: ["events", "os", "path", "url"],
        // XXX: Insert custom code at the top of the generated bundle that defines
        // the special `__non_webpack_require__` function that is used by threads.js
        // in its Node implementation.  This import ensures that threads.js uses
        // the native `worker_threads` implementation when using the bundle in a
        // Node environment.  When importing the bundle for use in the browser,
        // Vite will transform this import into an empty module due to the empty
        // polyfill that is configured in `vite-config-for-report.ts`.
        output: {
          banner: `
import * as worker_threads from 'worker_threads'
let __non_webpack_require__ = () => {
  return worker_threads;
};
`
        },
        onwarn: (warning, warn) => {
          if (warning.code !== "EVAL") {
            warn(warning);
          }
        }
      }
    }
  };
}

// src/vite-config-for-report.ts
import { dirname as dirname2, relative as relative2, join as joinPath2, resolve as resolvePath2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import replace from "@rollup/plugin-replace";
var __filename3 = fileURLToPath2(import.meta.url);
var __dirname3 = dirname2(__filename3);
function createViteConfigForReport(options, projDir, prepDir, currentBundleName, currentBundlePath, testConfigPath, suiteSummary) {
  const root = resolvePath2(__dirname3, "..", "template-report");
  const templateSrcDir = resolvePath2(root, "src");
  const relProjDir = relative2(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const baselinesPath = `${relProjDirPath}/baselines/*.js`;
  let reportPath;
  if (options?.reportPath) {
    reportPath = options.reportPath;
  } else {
    reportPath = joinPath2(prepDir, "check-report");
  }
  const outDir = relative2(root, reportPath);
  const suiteSummaryJson = suiteSummary ? JSON.stringify(suiteSummary) : "";
  const alias = (find, replacement) => {
    return {
      find,
      replacement
    };
  };
  const noopPolyfillAlias = (find) => {
    return {
      find,
      replacement: "/polyfills/noop-polyfills.ts"
    };
  };
  return {
    // Don't use an external config file
    configFile: false,
    // Use the root directory configured above
    root,
    // Use `.` as the base directory (instead of the default `/`); this controls
    // how the path to the js/css files are generated in `index.html`
    base: "",
    // Use a custom cache directory under `prepDir`, as otherwise Vite will use
    // `packages/plugin-check/template-report/node_modules/.vite`, and we want to
    // avoid generating files in `template-report` (which should be read-only)
    cacheDir: joinPath2(prepDir, ".vite-check-report"),
    // Load static files from `static` (instead of the default `public`)
    // publicDir: 'static',
    // Don't clear the screen in dev mode so that we can see builder output
    clearScreen: false,
    // TODO
    // logLevel: 'silent',
    optimizeDeps: {
      // Prevent Vite from examining other html files when scanning entrypoints
      // for dependency optimization
      entries: ["index.html"],
      // XXX: When plugin-check is installed via pnpm, the Vite dev server seems
      // to have no trouble resolving other dependencies using the optimizeDeps
      // mechanism.  However, this fails when the package is installed via yarn
      // or npm (probably due to the fact that the `template-report` directory
      // is located under the top-level `node_modules` directory); in the browser,
      // there will be "import not found" errors for the packages referenced below.
      // As a terrible workaround, explicitly include the direct dependencies so
      // that Vite optimizes them; this works for pnpm, yarn, and npm.  We should
      // find a less fragile solution.
      // include: [
      //   // from check-core
      //   'assert-never',
      //   'ajv',
      //   'neverthrow',
      //   'yaml',
      //   // from check-ui-shell
      //   'fontfaceobserver',
      //   'copy-text-to-clipboard',
      //   'chart.js'
      // ],
      exclude: [
        // XXX: The threads.js implementation references `tiny-worker` as an optional
        // dependency, but it doesn't get used at runtime, so we can just exclude it
        // so that Vite doesn't complain in dev mode
        "tiny-worker"
        // XXX: Similarly, chart.js treats `moment` as an optional dependency, but we
        // don't use it at runtime; we need to exclude it here, otherwise Vite will
        // complain about missing dependencies in dev mode
        // 'moment'
      ]
    },
    // Configure path aliases
    resolve: {
      alias: [
        // Use the configured "baseline" bundle if defined, otherwise use the "empty" bundle
        // (which will cause comparison tests to be skipped)
        alias("@_baseline_bundle_", options?.baseline ? options.baseline.path : "/src/empty-bundle.ts"),
        // Use the configured "current" bundle
        alias("@_current_bundle_", currentBundlePath),
        // Use the configured test config file
        alias("@_test_config_", testConfigPath),
        // Make the overlay use the `messages.html` file that is written to the prep directory
        alias("@_prep_", prepDir),
        // XXX: Include no-op polyfills for these modules that are used in the Node-specific
        // implementation of threads.js; this allows us to use one bundle that works in both
        // Node and browser environments
        noopPolyfillAlias("events"),
        noopPolyfillAlias("os"),
        noopPolyfillAlias("path"),
        noopPolyfillAlias("url"),
        noopPolyfillAlias("worker_threads")
      ]
    },
    // Inject special values into the generated JS
    define: {
      // Inject the summary JSON into the build
      __SUITE_SUMMARY_JSON__: JSON.stringify(suiteSummaryJson),
      // Inject the baseline branch name
      __BASELINE_NAME__: JSON.stringify(options?.baseline?.name || ""),
      // Inject the current branch name
      __CURRENT_NAME__: JSON.stringify(currentBundleName)
    },
    plugins: [
      // Inject special values into the generated JS
      // TODO: We currently have to use `@rollup/plugin-replace` instead of Vite's
      // built-in `define` feature because the latter does not seem to run before
      // the glob handler (which requires the glob to be injected as a literal)
      replace({
        preventAssignment: true,
        delimiters: ["", ""],
        values: {
          // Inject the path for baseline bundles
          // './__BASELINE_BUNDLES_PATH__': JSON.stringify(baselinesPath)
          "./__BASELINE_BUNDLES_PATH__": baselinesPath
        }
      })
    ],
    build: {
      // Write output files to the configured directory (instead of the default `dist`);
      // note that this must be relative to the project `root`
      outDir,
      // Write js/css files to `public` (instead of the default `<outDir>/assets`)
      assetsDir: "",
      rollupOptions: {
        output: {
          // XXX: Prevent vite from creating a separate `vendor.js` file
          manualChunks: void 0
        },
        onwarn: (warning, warn) => {
          if (warning.code !== "EVAL") {
            warn(warning);
          }
        }
      }
    },
    server: {
      // Run the dev server at `localhost:8081` by default
      port: options?.serverPort || 8081,
      // Open the app in the browser by default
      open: "/index.html",
      // XXX: Add a small delay, otherwise on macOS we sometimes get multiple
      // change events when a file is saved just once.  That is a relatively
      // harmless issue except that it causes redundant messages in the console
      // and can cause extra churn when refreshing the app.
      watch: {
        awaitWriteFinish: {
          stabilityThreshold: 100
        }
      }
    }
  };
}

// src/vite-config-for-tests.ts
import { dirname as dirname3, relative as relative3, resolve as resolvePath3 } from "path";
import { fileURLToPath as fileURLToPath3 } from "url";
import replace2 from "@rollup/plugin-replace";
var __filename4 = fileURLToPath3(import.meta.url);
var __dirname4 = dirname3(__filename4);
function createViteConfigForTests(projDir, prepDir, mode) {
  const root = resolvePath3(__dirname4, "..", "template-tests");
  const templateSrcDir = resolvePath3(root, "src");
  const relProjDir = relative3(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const yamlPath = `${relProjDirPath}/**/*.check.yaml`;
  const outDir = relative3(root, prepDir);
  return {
    // Don't use an external config file
    configFile: false,
    // Use the root directory configured above
    root,
    // Don't clear the screen in dev mode so that we can see builder output
    clearScreen: false,
    // TODO: Disable vite output by default?
    // logLevel: 'silent',
    plugins: [
      // Inject special values into the generated JS
      // TODO: We currently have to use `@rollup/plugin-replace` instead of Vite's
      // built-in `define` feature because the latter does not seem to run before
      // the glob handler (which requires the glob to be injected as a literal)
      replace2({
        preventAssignment: true,
        delimiters: ["", ""],
        values: {
          // Inject the glob pattern for matching check yaml files
          "./__YAML_PATH__": yamlPath
        }
      })
    ],
    build: {
      // Write output files to the configured directory (instead of the default `dist`);
      // note that this must be relative to the project `root`
      outDir,
      emptyOutDir: false,
      lib: {
        entry: "./src/index.ts",
        formats: ["es"],
        fileName: () => "check-tests.js"
      },
      // Enable watch mode if requested
      watch: mode === "watch" && {},
      rollupOptions: {
        // Prevent dependencies from being included in packaged library
        // TODO: For now we include check-core in the packaged library so that its
        // dependencies are correctly resolved at runtime.  Ideally this would only
        // include a couple functions that are used for defining tests, but Vite 2.x
        // does not implement tree shaking for ES libraries, which means the generated
        // library is much larger than it needs to be.  Once we upgrade to Vite 3.x,
        // the generated library should be smaller; see related fix:
        //   https://github.com/vitejs/vite/pull/8737
        // external: Object.keys(pkg.dependencies)
      }
    }
  };
}

// src/plugin.ts
function checkPlugin(options) {
  return new CheckPlugin(options);
}
var CheckPlugin = class {
  constructor(options) {
    this.options = options;
    this.firstBuild = true;
  }
  async watch(config) {
    if (this.options?.testConfigPath === void 0) {
      await this.genTestConfig(config, "watch");
    }
    const testOptions = this.resolveTestOptions(config);
    const viteConfig = this.createViteConfigForReport(config, testOptions, void 0);
    const server = await createServer(viteConfig);
    await server.listen();
    const baselinesDir = "baselines";
    const watcher = chokidar.watch(baselinesDir, {
      // Watch paths are resolved relative to the project root directory
      cwd: config.rootDir,
      // Don't send initial "file added" events
      ignoreInitial: true,
      // XXX: Include a delay, otherwise on macOS we sometimes get multiple
      // change events when a file is saved just once
      awaitWriteFinish: {
        stabilityThreshold: 200
      }
    });
    watcher.on("add", () => server.restart());
    watcher.on("unlink", () => server.restart());
  }
  // TODO: Note that this plugin runs as a `postBuild` step because it currently
  // needs to run after other plugins, and those plugins need to run after the
  // staged files are copied to their final destination(s).  We should probably
  // make it configurable so that it can either be run as a `postGenerate` or a
  // `postBuild` step.
  async postBuild(context, modelSpec) {
    const firstBuild = this.firstBuild;
    this.firstBuild = false;
    if (this.options?.current === void 0) {
      if (context.config.mode === "development") {
        await this.copyPreviousBundle(context.config);
      }
      context.log("info", "Generating model check bundle...");
      await this.genCurrentBundle(context.config, modelSpec);
    }
    if (this.options?.testConfigPath === void 0) {
      if (context.config.mode === "production" || firstBuild) {
        context.log("info", "Generating model check test configuration...");
        await this.genTestConfig(context.config, "build");
      }
    }
    if (context.config.mode === "production") {
      const testOptions = this.resolveTestOptions(context.config);
      return this.runChecks(context, testOptions);
    } else {
      return true;
    }
  }
  async copyPreviousBundle(config) {
    const currentBundleFile = joinPath3(config.prepDir, "check-bundle.js");
    if (existsSync2(currentBundleFile)) {
      const baselinesDir = joinPath3(config.rootDir, "baselines");
      if (!existsSync2(baselinesDir)) {
        await mkdir(baselinesDir, { recursive: true });
      }
      const previousBundleFile = joinPath3(baselinesDir, "previous.js");
      await copyFile(currentBundleFile, previousBundleFile);
    }
  }
  async genCurrentBundle(config, modelSpec) {
    const prepDir = config.prepDir;
    const viteConfig = await createViteConfigForBundle(prepDir, modelSpec);
    await build(viteConfig);
  }
  async genTestConfig(config, mode) {
    const rootDir = config.rootDir;
    const prepDir = config.prepDir;
    const viteConfig = createViteConfigForTests(rootDir, prepDir, mode);
    await build(viteConfig);
  }
  async runChecks(context, testOptions) {
    context.log("info", "Running model checks...");
    const moduleR = await import(relativeToSourcePath(testOptions.currentBundlePath));
    const bundleR = moduleR.createBundle();
    const bundleNameR = testOptions.currentBundleName;
    let bundleL;
    let bundleNameL;
    if (this.options?.baseline) {
      const moduleL = await import(relativeToSourcePath(this.options.baseline.path));
      const rawBundleL = moduleL.createBundle();
      if (rawBundleL.version === bundleR.version) {
        bundleL = rawBundleL;
        bundleNameL = this.options.baseline.name;
      }
    }
    const testConfigModule = await import(relativeToSourcePath(testOptions.testConfigPath));
    const configInitOptions = {
      bundleNameL,
      bundleNameR
    };
    const configOptions = await testConfigModule.getConfigOptions(bundleL, bundleR, configInitOptions);
    const checkConfig = await createConfig(configOptions);
    const result = await runTestSuite(
      context,
      checkConfig,
      /*verbose=*/
      false
    );
    context.log("info", "Building model check report");
    const viteConfig = this.createViteConfigForReport(context.config, testOptions, result.suiteSummary);
    await build(viteConfig);
    return result.allChecksPassed;
  }
  resolveTestOptions(config) {
    let currentBundleName;
    let currentBundlePath;
    if (this.options?.current === void 0) {
      currentBundleName = "current";
      currentBundlePath = joinPath3(config.prepDir, "check-bundle.js");
    } else {
      currentBundleName = this.options.current.name;
      currentBundlePath = this.options.current.path;
    }
    let testConfigPath;
    if (this.options?.testConfigPath === void 0) {
      testConfigPath = joinPath3(config.prepDir, "check-tests.js");
    } else {
      testConfigPath = this.options.testConfigPath;
    }
    return {
      currentBundleName,
      currentBundlePath,
      testConfigPath
    };
  }
  createViteConfigForReport(config, testOptions, suiteSummary) {
    return createViteConfigForReport(
      this.options,
      config.rootDir,
      config.prepDir,
      testOptions.currentBundleName,
      testOptions.currentBundlePath,
      testOptions.testConfigPath,
      suiteSummary
    );
  }
};
function relativeToSourcePath(filePath) {
  const srcDir = dirname4(fileURLToPath4(import.meta.url));
  const relPath = relative4(srcDir, filePath);
  return relPath.replaceAll("\\", "/");
}
export {
  checkPlugin
};
//# sourceMappingURL=index.js.map