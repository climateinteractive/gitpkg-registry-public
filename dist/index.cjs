var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  checkPlugin: () => checkPlugin
});
module.exports = __toCommonJS(src_exports);

// src/plugin.ts
var import_fs2 = require("fs");
var import_promises = require("fs/promises");
var import_path4 = require("path");
var import_url4 = require("url");
var import_vite = require("vite");
var import_chokidar = __toESM(require("chokidar"), 1);
var import_check_core2 = require("@sdeverywhere/check-core");

// src/run-suite.ts
var import_perf_hooks = require("perf_hooks");
var import_picocolors = __toESM(require("picocolors"), 1);
var import_check_core = require("@sdeverywhere/check-core");
async function runTestSuite(context, config, verbose) {
  return new Promise((resolve, reject) => {
    const t0 = import_perf_hooks.performance.now();
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
          const t1 = import_perf_hooks.performance.now();
          const elapsed = ((t1 - t0) / 1e3).toFixed(1);
          context.log("info", `
Test suite completed in ${elapsed}s`);
          const allChecksPassed = printCheckSummary(context, report.checkReport, verbose);
          if (report.comparisonReport) {
            printPerfStats(context, config.comparison, report.comparisonReport);
          }
          const suiteSummary = (0, import_check_core.suiteSummaryFromReport)(report);
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
    (0, import_check_core.runSuite)(config, callbacks);
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
    context.log("info", status === "passed" ? import_picocolors.default.green(msg) : import_picocolors.default.red(msg));
  }
  function bold(s) {
    return import_picocolors.default.bold(s);
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
        printResult(3, scenario.status, (0, import_check_core.scenarioMessage)(scenario, bold));
        for (const dataset of scenario.datasets) {
          printResult(5, dataset.status, (0, import_check_core.datasetMessage)(dataset, bold));
          for (const predicate of dataset.predicates) {
            printResult(7, predicate.result.status, (0, import_check_core.predicateMessage)(predicate, bold));
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
var import_fs = require("fs");
var import_path = require("path");
var import_url = require("url");
var import_plugin_node_resolve = require("@rollup/plugin-node-resolve");

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
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = (0, import_path.dirname)(__filename);
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
    const path = (0, import_path.join)(prepDir, "staged", "model", filename);
    if ((0, import_fs.existsSync)(path)) {
      return (0, import_fs.statSync)(path).size;
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
  const root = (0, import_path.resolve)(__dirname, "..", "template-bundle");
  const outDir = (0, import_path.relative)(root, prepDir);
  const modelWorkerPath = (0, import_path.join)(prepDir, "staged", "model", "worker.js?raw");
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
            const customResolver = (0, import_plugin_node_resolve.nodeResolve)({ browser: false });
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
var import_path2 = require("path");
var import_url2 = require("url");
var import_plugin_replace = __toESM(require("@rollup/plugin-replace"), 1);
var import_meta2 = {};
var __filename2 = (0, import_url2.fileURLToPath)(import_meta2.url);
var __dirname2 = (0, import_path2.dirname)(__filename2);
function createViteConfigForReport(options, projDir, prepDir, currentBundleName, currentBundlePath, testConfigPath, suiteSummary) {
  var _a;
  const root = (0, import_path2.resolve)(__dirname2, "..", "template-report");
  const templateSrcDir = (0, import_path2.resolve)(root, "src");
  const relProjDir = (0, import_path2.relative)(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const baselinesPath = `${relProjDirPath}/baselines/*.js`;
  let reportPath;
  if (options == null ? void 0 : options.reportPath) {
    reportPath = options.reportPath;
  } else {
    reportPath = (0, import_path2.join)(prepDir, "check-report");
  }
  const outDir = (0, import_path2.relative)(root, reportPath);
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
    cacheDir: (0, import_path2.join)(prepDir, ".vite-check-report"),
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
      (0, import_plugin_replace.default)({
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
var import_path3 = require("path");
var import_url3 = require("url");
var import_meta3 = {};
var __filename3 = (0, import_url3.fileURLToPath)(import_meta3.url);
var __dirname3 = (0, import_path3.dirname)(__filename3);
function createViteConfigForTests(projDir, prepDir, mode) {
  const root = (0, import_path3.resolve)(__dirname3, "..", "template-tests");
  const templateSrcDir = (0, import_path3.resolve)(root, "src");
  const relProjDir = (0, import_path3.relative)(templateSrcDir, projDir);
  const relProjDirPath = relProjDir.replaceAll("\\", "/");
  const yamlPath = `${relProjDirPath}/**/*.check.yaml`;
  const outDir = (0, import_path3.relative)(root, prepDir);
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
var import_meta4 = {};
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
    const server = await (0, import_vite.createServer)(viteConfig);
    await server.listen();
    const baselinesDir = "baselines";
    const watcher = import_chokidar.default.watch(baselinesDir, {
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
    const currentBundleFile = (0, import_path4.join)(config.prepDir, "check-bundle.js");
    if ((0, import_fs2.existsSync)(currentBundleFile)) {
      const baselinesDir = (0, import_path4.join)(config.rootDir, "baselines");
      if (!(0, import_fs2.existsSync)(baselinesDir)) {
        await (0, import_promises.mkdir)(baselinesDir, { recursive: true });
      }
      const previousBundleFile = (0, import_path4.join)(baselinesDir, "previous.js");
      await (0, import_promises.copyFile)(currentBundleFile, previousBundleFile);
    }
  }
  async genCurrentBundle(config, modelSpec) {
    const prepDir = config.prepDir;
    const viteConfig = await createViteConfigForBundle(prepDir, modelSpec);
    await (0, import_vite.build)(viteConfig);
  }
  async genTestConfig(config, mode) {
    const rootDir = config.rootDir;
    const prepDir = config.prepDir;
    const viteConfig = createViteConfigForTests(rootDir, prepDir, mode);
    await (0, import_vite.build)(viteConfig);
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
    const checkConfig = await (0, import_check_core2.createConfig)(configOptions);
    const result = await runTestSuite(context, checkConfig, false);
    context.log("info", "Building model check report");
    const viteConfig = this.createViteConfigForReport(context.config, testOptions, result.suiteSummary);
    await (0, import_vite.build)(viteConfig);
    return result.allChecksPassed;
  }
  resolveTestOptions(config) {
    var _a, _b;
    let currentBundleName;
    let currentBundlePath;
    if (((_a = this.options) == null ? void 0 : _a.current) === void 0) {
      currentBundleName = "current";
      currentBundlePath = (0, import_path4.join)(config.prepDir, "check-bundle.js");
    } else {
      currentBundleName = this.options.current.name;
      currentBundlePath = this.options.current.path;
    }
    let testConfigPath;
    if (((_b = this.options) == null ? void 0 : _b.testConfigPath) === void 0) {
      testConfigPath = (0, import_path4.join)(config.prepDir, "check-tests.js");
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
  const srcDir = (0, import_path4.dirname)((0, import_url4.fileURLToPath)(import_meta4.url));
  const relPath = (0, import_path4.relative)(srcDir, filePath);
  return relPath.replaceAll("\\", "/");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  checkPlugin
});
//# sourceMappingURL=index.cjs.map