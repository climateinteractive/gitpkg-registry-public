// src/plugin.ts
import { existsSync } from "fs";
import { basename, dirname, join as joinPath } from "path";
import { findUp } from "find-up";
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
      if (!existsSync(emsdkDir)) {
        throw new Error(`Invalid emsdk directory '${emsdkDir}'`);
      }
    } else {
      emsdkDir = await findUp("emsdk", { type: "directory" });
      if (emsdkDir === void 0) {
        throw new Error("Could not find emsdk directory");
      }
    }
    const isWin = process.platform === "win32";
    const emccCmd = isWin ? "emcc.bat" : "emcc";
    const emccCmdPath = joinPath(emsdkDir, "upstream", "emscripten", emccCmd);
    const stagedOutputJsFile = "wasm-model.js";
    let outputJsPath;
    if ((_b = this.options) == null ? void 0 : _b.outputJsPath) {
      outputJsPath = this.options.outputJsPath;
    } else {
      outputJsPath = joinPath(context.config.prepDir, stagedOutputJsFile);
    }
    const outputJsDir = dirname(outputJsPath);
    const outputJsFile = basename(outputJsPath);
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
export {
  wasmPlugin
};
//# sourceMappingURL=index.js.map