// src/runner.ts
import { BlobWorker, spawn, Thread, Transfer, Worker } from "threads";
import { Outputs, updateOutputIndices } from "@sdeverywhere/runtime";
async function spawnAsyncModelRunner(workerSpec) {
  if (workerSpec["path"]) {
    return spawnAsyncModelRunnerWithWorker(new Worker(workerSpec["path"]));
  } else {
    return spawnAsyncModelRunnerWithWorker(BlobWorker.fromText(workerSpec["source"]));
  }
}
async function spawnAsyncModelRunnerWithWorker(worker) {
  const modelWorker = await spawn(worker);
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
      return new Outputs(initResult.outputVarIds, initResult.startTime, initResult.endTime, initResult.saveFreq);
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
        updateOutputIndices(indicesArray, outputSpecs);
      }
      try {
        ioBuffer = await modelWorker.runModel(Transfer(ioBuffer));
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
        return Thread.terminate(modelWorker);
      }
    }
  };
}
export {
  spawnAsyncModelRunner
};
//# sourceMappingURL=runner.js.map