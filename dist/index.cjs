var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  wasmPlugin: () => wasmPlugin
});
module.exports = __toCommonJS(src_exports);

// src/plugin.ts
var import_fs = require("fs");
var import_path = require("path");
var import_find_up = require("find-up");
function wasmPlugin(options) {
  return new WasmPlugin(options);
}
var WasmPlugin = class {
  constructor(options) {
    this.options = options;
  }
  async postGenerateC(context, cContent) {
    var _a, _b;
    context.log("info", "  Generating WebAssembly module");
    let emsdkDir;
    if ((_a = this.options) == null ? void 0 : _a.emsdkDir) {
      emsdkDir = this.options.emsdkDir;
      if (!(0, import_fs.existsSync)(emsdkDir)) {
        throw new Error(`Invalid emsdk directory '${emsdkDir}'`);
      }
    } else {
      emsdkDir = await (0, import_find_up.findUp)("emsdk", { type: "directory" });
      if (emsdkDir === void 0) {
        throw new Error("Could not find emsdk directory");
      }
    }
    const isWin = process.platform === "win32";
    const emccCmd = isWin ? "emcc.bat" : "emcc";
    const emccCmdPath = (0, import_path.join)(emsdkDir, "upstream", "emscripten", emccCmd);
    const stagedOutputJsFile = "wasm-model.js";
    let outputJsPath;
    if ((_b = this.options) == null ? void 0 : _b.outputJsPath) {
      outputJsPath = this.options.outputJsPath;
    } else {
      outputJsPath = (0, import_path.join)(context.config.prepDir, stagedOutputJsFile);
    }
    const outputJsDir = (0, import_path.dirname)(outputJsPath);
    const outputJsFile = (0, import_path.basename)(outputJsPath);
    const stagedOutputJsPath = context.prepareStagedFile("model", stagedOutputJsFile, outputJsDir, outputJsFile);
    await buildWasm(context, emccCmdPath, context.config.prepDir, stagedOutputJsPath);
    return cContent;
  }
};
async function buildWasm(context, emccCmdPath, prepDir, outputJsPath) {
  const command = emccCmdPath;
  const args = [];
  const addArg = (arg) => {
    args.push(arg);
  };
  const addInput = (file) => {
    addArg(`build/${file}`);
  };
  const addFlag = (flag) => {
    addArg("-s");
    addArg(flag);
  };
  addInput("processed.c");
  addInput("macros.c");
  addInput("model.c");
  addInput("vensim.c");
  addArg("-Ibuild");
  addArg("-o");
  addArg(outputJsPath);
  addArg("-Wall");
  addArg("-Os");
  addFlag("STRICT=1");
  addFlag("MALLOC=emmalloc");
  addFlag("FILESYSTEM=0");
  addFlag("MODULARIZE=1");
  addFlag("SINGLE_FILE=1");
  addFlag("EXPORT_ES6=1");
  addFlag("USE_ES6_IMPORT_META=0");
  addFlag(
    `EXPORTED_FUNCTIONS=['_malloc','_getMaxOutputIndices','_getInitialTime','_getFinalTime','_getSaveper','_runModelWithBuffers']`
  );
  addFlag(`EXPORTED_RUNTIME_METHODS=['cwrap']`);
  await context.spawnChild(prepDir, command, args, {
    ignoredMessageFilter: "cache:INFO"
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  wasmPlugin
});
//# sourceMappingURL=index.cjs.map