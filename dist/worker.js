// src/worker.ts
import { expose, Transfer } from "threads/worker";
import { perfElapsed, perfNow } from "@sdeverywhere/runtime";
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
    return Transfer(initResult, [ioBuffer]);
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
    const t0 = perfNow();
    wasmModel.runModel(inputsWasmBuffer, outputsWasmBuffer, useIndices ? outputIndicesWasmBuffer : void 0);
    const elapsed = perfElapsed(t0);
    const runTimeBufferArray = new Float64Array(ioBuffer, runTimeOffsetInBytes, runTimeLengthInElements);
    runTimeBufferArray[0] = elapsed;
    const outputsLengthInElements = outputsWasmArray.length;
    const outputsBufferArray = new Float64Array(ioBuffer, outputsOffsetInBytes, outputsLengthInElements);
    outputsBufferArray.set(outputsWasmArray);
    return Transfer(ioBuffer);
  }
};
function exposeModelWorker(init) {
  initWasmModel = init;
  expose(modelWorker);
}
export {
  exposeModelWorker
};
//# sourceMappingURL=worker.js.map