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

// src/runner.ts
var runner_exports = {};
__export(runner_exports, {
  spawnAsyncModelRunner: () => spawnAsyncModelRunner
});
module.exports = __toCommonJS(runner_exports);
var import_threads = require("threads");
var import_runtime = require("@sdeverywhere/runtime");
async function spawnAsyncModelRunner(workerSpec) {
  if (workerSpec["path"]) {
    return spawnAsyncModelRunnerWithWorker(new import_threads.Worker(workerSpec["path"]));
  } else {
    return spawnAsyncModelRunnerWithWorker(import_threads.BlobWorker.fromText(workerSpec["source"]));
  }
}
async function spawnAsyncModelRunnerWithWorker(worker) {
  const modelWorker = await (0, import_threads.spawn)(worker);
  const initResult = await modelWorker.initModel();
  let ioBuffer = initResult.ioBuffer;
  const runTimeOffsetInBytes = 0;
  const runTimeLengthInElements = 1;
  const runTimeLengthInBytes = runTimeLengthInElements * 8;
  const inputsOffsetInBytes = runTimeOffsetInBytes + runTimeLengthInBytes;
  const inputsLengthInElements = initResult.inputsLength;
  const inputsLengthInBytes = inputsLengthInElements * 8;
  const outputsOffsetInBytes = inputsOffsetInBytes + inputsLengthInBytes;
  const outputsLengthInElements = initResult.outputsLength;
  const outputsLengthInBytes = outputsLengthInElements * 8;
  const indicesOffsetInBytes = outputsOffsetInBytes + outputsLengthInBytes;
  const indicesLengthInElements = initResult.outputIndicesLength;
  const outputRowLength = initResult.outputRowLength;
  let running = false;
  let terminated = false;
  return {
    createOutputs: () => {
      return new import_runtime.Outputs(initResult.outputVarIds, initResult.startTime, initResult.endTime, initResult.saveFreq);
    },
    runModel: async (inputs, outputs) => {
      if (terminated) {
        throw new Error("Async model runner has already been terminated");
      } else if (running) {
        throw new Error("Async model runner only supports one `runModel` call at a time");
      } else {
        running = true;
      }
      const inputsArray = new Float64Array(ioBuffer, inputsOffsetInBytes, inputsLengthInElements);
      for (let i = 0; i < inputs.length; i++) {
        inputsArray[i] = inputs[i].get();
      }
      if (indicesLengthInElements > 0) {
        const outputSpecs = outputs.varSpecs || [];
        const indicesArray = new Int32Array(ioBuffer, indicesOffsetInBytes, indicesLengthInElements);
        (0, import_runtime.updateOutputIndices)(indicesArray, outputSpecs);
      }
      try {
        ioBuffer = await modelWorker.runModel((0, import_threads.Transfer)(ioBuffer));
      } finally {
        running = false;
      }
      const runTimeArray = new Float64Array(ioBuffer, runTimeOffsetInBytes, runTimeLengthInElements);
      outputs.runTimeInMillis = runTimeArray[0];
      const outputsArray = new Float64Array(ioBuffer, outputsOffsetInBytes, outputsLengthInElements);
      outputs.updateFromBuffer(outputsArray, outputRowLength);
      return outputs;
    },
    terminate: () => {
      if (terminated) {
        return Promise.resolve();
      } else {
        terminated = true;
        return import_threads.Thread.terminate(modelWorker);
      }
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  spawnAsyncModelRunner
});
//# sourceMappingURL=runner.cjs.map