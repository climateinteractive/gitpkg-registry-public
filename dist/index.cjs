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
  exposeModelWorker: () => exposeModelWorker,
  spawnAsyncModelRunner: () => spawnAsyncModelRunner
});
module.exports = __toCommonJS(src_exports);

// src/runner.ts
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
  const modelWorker2 = await (0, import_threads.spawn)(worker);
  const initResult = await modelWorker2.initModel();
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
        ioBuffer = await modelWorker2.runModel((0, import_threads.Transfer)(ioBuffer));
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
        return import_threads.Thread.terminate(modelWorker2);
      }
    }
  };
}

// src/worker.ts
var import_worker = require("threads/worker");
var import_runtime2 = require("@sdeverywhere/runtime");
var initWasmModel;
var wasmModel;
var inputsWasmBuffer;
var outputsWasmBuffer;
var outputIndicesWasmBuffer;
var modelWorker = {
  async initModel() {
    if (wasmModel) {
      throw new Error("WasmModel was already initialized");
    }
    const wasmResult = await initWasmModel();
    wasmModel = wasmResult.model;
    inputsWasmBuffer = wasmResult.inputsBuffer;
    outputsWasmBuffer = wasmResult.outputsBuffer;
    outputIndicesWasmBuffer = wasmResult.outputIndicesBuffer;
    const runTimeLength = 8;
    const inputsLength = inputsWasmBuffer.getArrayView().length;
    const outputsLength = outputsWasmBuffer.getArrayView().length;
    const outputIndicesLength = (outputIndicesWasmBuffer == null ? void 0 : outputIndicesWasmBuffer.getArrayView().length) || 0;
    const totalLength = runTimeLength + inputsLength + outputsLength + outputIndicesLength;
    const ioArray = new Float64Array(totalLength);
    const ioBuffer = ioArray.buffer;
    const initResult = {
      outputVarIds: wasmResult.outputVarIds,
      startTime: wasmModel.startTime,
      endTime: wasmModel.endTime,
      saveFreq: wasmModel.saveFreq,
      inputsLength,
      outputsLength,
      outputIndicesLength,
      outputRowLength: wasmModel.numSavePoints,
      ioBuffer
    };
    return (0, import_worker.Transfer)(initResult, [ioBuffer]);
  },
  runModel(ioBuffer) {
    if (!wasmModel) {
      throw new Error("WasmModel must be initialized before running the model in worker");
    }
    const runTimeOffsetInBytes = 0;
    const runTimeLengthInElements = 1;
    const runTimeLengthInBytes = runTimeLengthInElements * 8;
    const inputsWasmArray = inputsWasmBuffer.getArrayView();
    const inputsOffsetInBytes = runTimeOffsetInBytes + runTimeLengthInBytes;
    const inputsLengthInElements = inputsWasmArray.length;
    const inputsLengthInBytes = inputsWasmArray.byteLength;
    const inputsBufferArray = new Float64Array(ioBuffer, inputsOffsetInBytes, inputsLengthInElements);
    inputsWasmArray.set(inputsBufferArray);
    const outputsWasmArray = outputsWasmBuffer.getArrayView();
    const outputsOffsetInBytes = runTimeLengthInBytes + inputsLengthInBytes;
    const outputsLengthInBytes = outputsWasmArray.byteLength;
    let useIndices = false;
    if (outputIndicesWasmBuffer) {
      const indicesWasmArray = outputIndicesWasmBuffer.getArrayView();
      const indicesLengthInElements = indicesWasmArray.length;
      const indicesOffsetInBytes = outputsOffsetInBytes + outputsLengthInBytes;
      const indicesBufferArray = new Int32Array(ioBuffer, indicesOffsetInBytes, indicesLengthInElements);
      if (indicesBufferArray[0] !== 0) {
        indicesWasmArray.set(indicesBufferArray);
        useIndices = true;
      }
    }
    const t0 = (0, import_runtime2.perfNow)();
    wasmModel.runModel(inputsWasmBuffer, outputsWasmBuffer, useIndices ? outputIndicesWasmBuffer : void 0);
    const elapsed = (0, import_runtime2.perfElapsed)(t0);
    const runTimeBufferArray = new Float64Array(ioBuffer, runTimeOffsetInBytes, runTimeLengthInElements);
    runTimeBufferArray[0] = elapsed;
    const outputsLengthInElements = outputsWasmArray.length;
    const outputsBufferArray = new Float64Array(ioBuffer, outputsOffsetInBytes, outputsLengthInElements);
    outputsBufferArray.set(outputsWasmArray);
    return (0, import_worker.Transfer)(ioBuffer);
  }
};
function exposeModelWorker(init) {
  initWasmModel = init;
  (0, import_worker.expose)(modelWorker);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  exposeModelWorker,
  spawnAsyncModelRunner
});
//# sourceMappingURL=index.cjs.map