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
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
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
  const root = resolvePath(__dirname, "..", "template-bundle");
  const outDir = relative(root, prepDir);
  const modelWorkerPath = joinPath(prepDir, "staged", "model", "worker.js?raw");
  return {
    configFile: false,
    root,
    clearScreen: false,
    resolve: {
      alias: [
        {
          find: "@_model_worker_",
          replacement: modelWorkerPath
        },
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
      injectModelSpec(prepDir, modelSpec)
    ],
    build: {
      outDir,
      emptyOutDir: false,
      lib: {
        entry: "./src/index.ts",
        formats: ["es"],
        fileName: () => "check-bundle.js"
      },
      rollupOptions: {
        external: ["events", "os", "path", "url"],
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
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
function createViteConfigForReport(options, projDir, prepDir, currentBundleName, currentBundlePath, testConfigPath, suiteSummary) {
  var _a;
  const root = resolvePath2(__dirname2, "..", "template-report");
  const templateSrcDir = resolvePath2(root, "src");
  const relProjDir = relative2(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const baselinesPath = `${relProjDirPath}/baselines/*.js`;
  let reportPath;
  if (options == null ? void 0 : options.reportPath) {
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
    configFile: false,
    root,
    base: "",
    cacheDir: joinPath2(prepDir, ".vite-check-report"),
    clearScreen: false,
    optimizeDeps: {
      entries: ["index.html"],
      include: [
        "assert-never",
        "ajv",
        "neverthrow",
        "yaml",
        "fontfaceobserver",
        "copy-text-to-clipboard",
        "chart.js"
      ],
      exclude: [
        "tiny-worker",
        "moment"
      ]
    },
    resolve: {
      alias: [
        alias("@_baseline_bundle_", (options == null ? void 0 : options.baseline) ? options.baseline.path : "/src/empty-bundle.ts"),
        alias("@_current_bundle_", currentBundlePath),
        alias("@_test_config_", testConfigPath),
        alias("@_prep_", prepDir),
        noopPolyfillAlias("events"),
        noopPolyfillAlias("os"),
        noopPolyfillAlias("path"),
        noopPolyfillAlias("url")
      ]
    },
    define: {
      __SUITE_SUMMARY_JSON__: JSON.stringify(suiteSummaryJson),
      __BASELINE_NAME__: JSON.stringify(((_a = options == null ? void 0 : options.baseline) == null ? void 0 : _a.name) || ""),
      __CURRENT_NAME__: JSON.stringify(currentBundleName)
    },
    plugins: [
      replace({
        preventAssignment: true,
        values: {
          __BASELINE_BUNDLES_PATH__: JSON.stringify(baselinesPath)
        }
      })
    ],
    build: {
      outDir,
      assetsDir: "",
      rollupOptions: {
        output: {
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
      port: (options == null ? void 0 : options.serverPort) || 8081,
      open: "/index.html",
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
var __filename3 = fileURLToPath3(import.meta.url);
var __dirname3 = dirname3(__filename3);
function createViteConfigForTests(projDir, prepDir, mode) {
  const root = resolvePath3(__dirname3, "..", "template-tests");
  const templateSrcDir = resolvePath3(root, "src");
  const relProjDir = relative3(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const yamlPath = `${relProjDirPath}/**/*.check.yaml`;
  const outDir = relative3(root, prepDir);
  return {
    configFile: false,
    root,
    clearScreen: false,
    define: {
      __YAML_PATH__: JSON.stringify(yamlPath)
    },
    build: {
      outDir,
      emptyOutDir: false,
      lib: {
        entry: "./src/index.ts",
        formats: ["es"],
        fileName: () => "check-tests.js"
      },
      watch: mode === "watch" && {},
      rollupOptions: {}
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
    var _a;
    if (((_a = this.options) == null ? void 0 : _a.testConfigPath) === void 0) {
      await this.genTestConfig(config, "watch");
    }
    const testOptions = this.resolveTestOptions(config);
    const viteConfig = this.createViteConfigForReport(config, testOptions, void 0);
    const server = await createServer(viteConfig);
    await server.listen();
    const baselinesDir = "baselines";
    const watcher = chokidar.watch(baselinesDir, {
      cwd: config.rootDir,
      ignoreInitial: true,
      awaitWriteFinish: {
        stabilityThreshold: 200
      }
    });
    watcher.on("add", () => server.restart());
    watcher.on("unlink", () => server.restart());
  }
  async postBuild(context, modelSpec) {
    var _a, _b;
    const firstBuild = this.firstBuild;
    this.firstBuild = false;
    if (((_a = this.options) == null ? void 0 : _a.current) === void 0) {
      if (context.config.mode === "development") {
        await this.copyPreviousBundle(context.config);
      }
      context.log("info", "Generating model check bundle...");
      await this.genCurrentBundle(context.config, modelSpec);
    }
    if (((_b = this.options) == null ? void 0 : _b.testConfigPath) === void 0) {
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
    var _a;
    context.log("info", "Running model checks...");
    const moduleR = await import(relativeToSourcePath(testOptions.currentBundlePath));
    const bundleR = moduleR.createBundle();
    const bundleNameR = testOptions.currentBundleName;
    let bundleL;
    let bundleNameL;
    if ((_a = this.options) == null ? void 0 : _a.baseline) {
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
    const result = await runTestSuite(context, checkConfig, false);
    context.log("info", "Building model check report");
    const viteConfig = this.createViteConfigForReport(context.config, testOptions, result.suiteSummary);
    await build(viteConfig);
    return result.allChecksPassed;
  }
  resolveTestOptions(config) {
    var _a, _b;
    let currentBundleName;
    let currentBundlePath;
    if (((_a = this.options) == null ? void 0 : _a.current) === void 0) {
      currentBundleName = "current";
      currentBundlePath = joinPath3(config.prepDir, "check-bundle.js");
    } else {
      currentBundleName = this.options.current.name;
      currentBundlePath = this.options.current.path;
    }
    let testConfigPath;
    if (((_b = this.options) == null ? void 0 : _b.testConfigPath) === void 0) {
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