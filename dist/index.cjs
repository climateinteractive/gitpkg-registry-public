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
  ModelListing: () => ModelListing,
  ModelScheduler: () => ModelScheduler,
  Outputs: () => Outputs,
  Series: () => Series,
  WasmBuffer: () => WasmBuffer,
  WasmModel: () => WasmModel,
  createFloat64WasmBuffer: () => createFloat64WasmBuffer,
  createInputValue: () => createInputValue,
  createInt32WasmBuffer: () => createInt32WasmBuffer,
  createWasmModelRunner: () => createWasmModelRunner,
  initWasmModelAndBuffers: () => initWasmModelAndBuffers,
  perfElapsed: () => perfElapsed,
  perfNow: () => perfNow,
  updateOutputIndices: () => updateOutputIndices
});
module.exports = __toCommonJS(src_exports);

// src/wasm-model/wasm-buffer.ts
var WasmBuffer = class {
  constructor(wasmModule, byteOffset, heapArray) {
    this.wasmModule = wasmModule;
    this.byteOffset = byteOffset;
    this.heapArray = heapArray;
  }
  getArrayView() {
    return this.heapArray;
  }
  getAddress() {
    return this.byteOffset;
  }
  dispose() {
    if (this.heapArray) {
      this.wasmModule._free(this.byteOffset);
      this.heapArray = void 0;
      this.byteOffset = void 0;
    }
  }
};
function createInt32WasmBuffer(wasmModule, numElements) {
  const elemSizeInBytes = 4;
  const lengthInBytes = numElements * elemSizeInBytes;
  const byteOffset = wasmModule._malloc(lengthInBytes);
  const elemOffset = byteOffset / elemSizeInBytes;
  const heapArray = wasmModule.HEAP32.subarray(elemOffset, elemOffset + numElements);
  return new WasmBuffer(wasmModule, byteOffset, heapArray);
}
function createFloat64WasmBuffer(wasmModule, numElements) {
  const elemSizeInBytes = 8;
  const lengthInBytes = numElements * elemSizeInBytes;
  const byteOffset = wasmModule._malloc(lengthInBytes);
  const elemOffset = byteOffset / elemSizeInBytes;
  const heapArray = wasmModule.HEAPF64.subarray(elemOffset, elemOffset + numElements);
  return new WasmBuffer(wasmModule, byteOffset, heapArray);
}

// src/wasm-model/wasm-model.ts
var indicesPerOutput = 4;
var WasmModel = class {
  constructor(wasmModule) {
    function getNumberValue(funcName) {
      const wasmGetValue = wasmModule.cwrap(funcName, "number", []);
      return wasmGetValue();
    }
    this.startTime = getNumberValue("getInitialTime");
    this.endTime = getNumberValue("getFinalTime");
    this.saveFreq = getNumberValue("getSaveper");
    try {
      this.maxOutputIndices = getNumberValue("getMaxOutputIndices");
    } catch (e) {
      this.maxOutputIndices = 0;
    }
    this.numSavePoints = Math.round((this.endTime - this.startTime) / this.saveFreq) + 1;
    this.wasmRunModel = wasmModule.cwrap("runModelWithBuffers", null, ["number", "number", "number"]);
  }
  runModel(inputs, outputs, outputIndices) {
    this.wasmRunModel(inputs.getAddress(), outputs.getAddress(), (outputIndices == null ? void 0 : outputIndices.getAddress()) || 0);
  }
};
function initWasmModelAndBuffers(wasmModule, numInputs, outputVarIds) {
  const model = new WasmModel(wasmModule);
  const inputsBuffer = createFloat64WasmBuffer(wasmModule, numInputs);
  const outputVarCount = Math.max(outputVarIds.length, model.maxOutputIndices);
  const outputsBuffer = createFloat64WasmBuffer(wasmModule, outputVarCount * model.numSavePoints);
  let outputIndicesBuffer;
  if (model.maxOutputIndices > 0) {
    outputIndicesBuffer = createInt32WasmBuffer(wasmModule, model.maxOutputIndices * indicesPerOutput);
  }
  return {
    model,
    inputsBuffer,
    outputsBuffer,
    outputIndicesBuffer,
    outputVarIds
  };
}
function updateOutputIndices(indicesArray, outputVarSpecs) {
  var _a;
  if (indicesArray.length < outputVarSpecs.length * indicesPerOutput) {
    throw new Error("Length of indicesArray must be large enough to accommodate the given outputVarSpecs");
  }
  let offset = 0;
  for (const outputVarSpec of outputVarSpecs) {
    const subCount = ((_a = outputVarSpec.subscriptIndices) == null ? void 0 : _a.length) || 0;
    indicesArray[offset + 0] = outputVarSpec.varIndex;
    indicesArray[offset + 1] = subCount > 0 ? outputVarSpec.subscriptIndices[0] : 0;
    indicesArray[offset + 2] = subCount > 1 ? outputVarSpec.subscriptIndices[1] : 0;
    indicesArray[offset + 3] = subCount > 2 ? outputVarSpec.subscriptIndices[2] : 0;
    offset += indicesPerOutput;
  }
  indicesArray.fill(0, offset);
}

// src/model-runner/inputs.ts
function createInputValue(varId, defaultValue, initialValue) {
  let currentValue = initialValue !== void 0 ? initialValue : defaultValue;
  const callbacks = {};
  const get = () => {
    return currentValue;
  };
  const set = (newValue) => {
    var _a;
    if (newValue !== currentValue) {
      currentValue = newValue;
      (_a = callbacks.onSet) == null ? void 0 : _a.call(callbacks);
    }
  };
  const reset = () => {
    set(defaultValue);
  };
  return { varId, get, set, reset, callbacks };
}

// src/model-runner/outputs.ts
var import_neverthrow = require("neverthrow");
var Series = class {
  constructor(varId, points) {
    this.varId = varId;
    this.points = points;
  }
  getValueAtTime(time) {
    var _a;
    return (_a = this.points.find((p) => p.x === time)) == null ? void 0 : _a.y;
  }
  copy() {
    const pointsCopy = this.points.map((p) => ({ ...p }));
    return new Series(this.varId, pointsCopy);
  }
};
var Outputs = class {
  constructor(varIds, startTime, endTime, saveFreq = 1) {
    this.varIds = varIds;
    this.startTime = startTime;
    this.endTime = endTime;
    this.saveFreq = saveFreq;
    this.seriesLength = Math.round((endTime - startTime) / saveFreq) + 1;
    this.varSeries = new Array(varIds.length);
    for (let i = 0; i < varIds.length; i++) {
      const points = new Array(this.seriesLength);
      for (let j = 0; j < this.seriesLength; j++) {
        points[j] = { x: startTime + j * saveFreq, y: 0 };
      }
      const varId = varIds[i];
      this.varSeries[i] = new Series(varId, points);
    }
  }
  setVarSpecs(varSpecs) {
    if (varSpecs.length !== this.varIds.length) {
      throw new Error("Length of output varSpecs must match that of varIds");
    }
    this.varSpecs = varSpecs;
  }
  updateFromBuffer(outputsBuffer, rowLength) {
    const result = parseOutputsBuffer(outputsBuffer, rowLength, this);
    if (result.isOk()) {
      return (0, import_neverthrow.ok)(void 0);
    } else {
      return (0, import_neverthrow.err)(result.error);
    }
  }
  getSeriesForVar(varId) {
    const seriesIndex = this.varIds.indexOf(varId);
    if (seriesIndex >= 0) {
      return this.varSeries[seriesIndex];
    } else {
      return void 0;
    }
  }
};
function parseOutputsBuffer(outputsBuffer, rowLength, outputs) {
  const varCount = outputs.varIds.length;
  const seriesLength = outputs.seriesLength;
  if (rowLength < seriesLength || outputsBuffer.length < varCount * seriesLength) {
    return (0, import_neverthrow.err)("invalid-point-count");
  }
  for (let outputVarIndex = 0; outputVarIndex < varCount; outputVarIndex++) {
    const series = outputs.varSeries[outputVarIndex];
    let sourceIndex = rowLength * outputVarIndex;
    for (let valueIndex = 0; valueIndex < seriesLength; valueIndex++) {
      series.points[valueIndex].y = validateNumber(outputsBuffer[sourceIndex]);
      sourceIndex++;
    }
  }
  return (0, import_neverthrow.ok)(outputs);
}
function validateNumber(x) {
  if (!isNaN(x) && x > -1e32) {
    return x;
  } else {
    return void 0;
  }
}

// src/model-runner/perf.ts
var isWeb;
function perfNow() {
  if (isWeb === void 0) {
    isWeb = typeof self !== "undefined" && (self == null ? void 0 : self.performance) !== void 0;
  }
  if (isWeb) {
    return self.performance.now();
  } else {
    return process == null ? void 0 : process.hrtime();
  }
}
function perfElapsed(t0) {
  if (isWeb) {
    const t1 = self.performance.now();
    return t1 - t0;
  } else {
    const elapsed = process.hrtime(t0);
    return (elapsed[0] * 1e9 + elapsed[1]) / 1e6;
  }
}

// src/model-runner/model-runner.ts
function createWasmModelRunner(wasmResult) {
  const wasmModel = wasmResult.model;
  const inputsBuffer = wasmResult.inputsBuffer;
  const inputsArray = inputsBuffer.getArrayView();
  const outputsBuffer = wasmResult.outputsBuffer;
  const outputsArray = outputsBuffer.getArrayView();
  const outputIndicesBuffer = wasmResult.outputIndicesBuffer;
  const outputIndicesArray = outputIndicesBuffer == null ? void 0 : outputIndicesBuffer.getArrayView();
  const rowLength = wasmModel.numSavePoints;
  let terminated = false;
  const runModelSync = (inputs, outputs) => {
    let i = 0;
    for (const input of inputs) {
      inputsArray[i++] = input.get();
    }
    const outputSpecs = outputs.varSpecs;
    let useIndices;
    if (outputIndicesArray && outputSpecs !== void 0 && outputSpecs.length > 0) {
      updateOutputIndices(outputIndicesArray, outputSpecs);
      useIndices = true;
    } else {
      useIndices = false;
    }
    const t0 = perfNow();
    wasmModel.runModel(inputsBuffer, outputsBuffer, useIndices ? outputIndicesBuffer : void 0);
    outputs.runTimeInMillis = perfElapsed(t0);
    outputs.updateFromBuffer(outputsArray, rowLength);
    return outputs;
  };
  return {
    createOutputs: () => {
      return new Outputs(wasmResult.outputVarIds, wasmModel.startTime, wasmModel.endTime, wasmModel.saveFreq);
    },
    runModel: (inputs, outputs) => {
      if (terminated) {
        return Promise.reject(new Error("Model runner has already been terminated"));
      }
      return Promise.resolve(runModelSync(inputs, outputs));
    },
    runModelSync: (inputs, outputs) => {
      if (terminated) {
        throw new Error("Model runner has already been terminated");
      }
      return runModelSync(inputs, outputs);
    },
    terminate: () => {
      if (!terminated) {
        terminated = true;
      }
      return Promise.resolve();
    }
  };
}

// src/model-runner/model-listing.ts
var ModelListing = class {
  constructor(modelJsonString) {
    this.varSpecs = /* @__PURE__ */ new Map();
    const modelJson = JSON.parse(modelJsonString);
    const dimensions = /* @__PURE__ */ new Map();
    for (const dimInfo of modelJson.dimensions) {
      const dimId = dimInfo.name;
      const subscripts = [];
      for (let i = 0; i < dimInfo.value.length; i++) {
        subscripts.push({
          id: dimInfo.value[i],
          index: i
        });
      }
      dimensions.set(dimId, {
        id: dimId,
        subscripts
      });
    }
    function dimensionForId(dimId) {
      const dim = dimensions.get(dimId);
      if (dim === void 0) {
        throw new Error(`No dimension info found for id=${dimId}`);
      }
      return dim;
    }
    const baseVarIds = /* @__PURE__ */ new Set();
    for (const v of modelJson.variables) {
      const baseVarId = varIdWithoutSubscripts(v.varName);
      if (!baseVarIds.has(baseVarId)) {
        const dimIds = v.families || [];
        const dimensions2 = dimIds.map(dimensionForId);
        if (dimensions2.length > 0) {
          if (dimensions2.length > 3) {
            throw new Error("Variables with more than 3 dimensions not currently supported");
          }
          const dimSubs = [];
          for (const dim of dimensions2) {
            dimSubs.push(dim.subscripts);
          }
          const combos = cartesianProductOf(dimSubs);
          for (const combo of combos) {
            const subs = combo.map((sub) => sub.id).join(",");
            const subIndices = combo.map((sub) => sub.index);
            const fullVarId = `${baseVarId}[${subs}]`;
            this.varSpecs.set(fullVarId, {
              varIndex: v.varIndex,
              subscriptIndices: subIndices
            });
          }
        } else {
          this.varSpecs.set(baseVarId, {
            varIndex: v.varIndex
          });
        }
        baseVarIds.add(baseVarId);
      }
    }
  }
  deriveOutputs(normalOutputs, varIds) {
    const varSpecs = [];
    for (const varId of varIds) {
      const varSpec = this.varSpecs.get(varId);
      if (varSpec !== void 0) {
        varSpecs.push(varSpec);
      } else {
        console.warn(`WARNING: No output var spec found for id=${varId}`);
      }
    }
    const newOutputs = new Outputs(varIds, normalOutputs.startTime, normalOutputs.endTime, normalOutputs.saveFreq);
    newOutputs.varSpecs = varSpecs;
    return newOutputs;
  }
};
function varIdWithoutSubscripts(fullVarId) {
  const bracketIndex = fullVarId.indexOf("[");
  if (bracketIndex >= 0) {
    return fullVarId.substring(0, bracketIndex);
  } else {
    return fullVarId;
  }
}
function cartesianProductOf(arr) {
  return arr.reduce(
    (a, b) => {
      return a.map((x) => b.map((y) => x.concat([y]))).reduce((v, w) => v.concat(w), []);
    },
    [[]]
  );
}

// src/model-scheduler/model-scheduler.ts
var ModelScheduler = class {
  constructor(runner, userInputs, outputs) {
    this.runner = runner;
    this.userInputs = userInputs;
    this.outputs = outputs;
    this.runNeeded = false;
    this.runInProgress = false;
    const afterSet = () => {
      this.runWasmModelIfNeeded();
    };
    for (const userInput of userInputs) {
      userInput.callbacks.onSet = afterSet;
    }
    this.currentInputs = [];
    for (const userInput of userInputs) {
      this.currentInputs.push(createSimpleInputValue(userInput.varId));
    }
  }
  runWasmModelIfNeeded() {
    this.runNeeded = true;
    if (this.runInProgress) {
      return;
    } else {
      this.runInProgress = true;
      setTimeout(() => {
        this.runWasmModelNow();
      }, 0);
    }
  }
  async runWasmModelNow() {
    var _a;
    for (let i = 0; i < this.userInputs.length; i++) {
      this.currentInputs[i].set(this.userInputs[i].get());
    }
    try {
      this.outputs = await this.runner.runModel(this.currentInputs, this.outputs);
      (_a = this.onOutputsChanged) == null ? void 0 : _a.call(this, this.outputs);
    } catch (e) {
      console.error(`ERROR: Failed to run model: ${e.message}`);
    }
    if (this.runNeeded) {
      this.runNeeded = false;
      setTimeout(() => {
        this.runWasmModelNow();
      }, 0);
    } else {
      this.runNeeded = false;
      this.runInProgress = false;
    }
  }
};
function createSimpleInputValue(varId) {
  let currentValue = 0;
  const get = () => {
    return currentValue;
  };
  const set = (newValue) => {
    currentValue = newValue;
  };
  const reset = () => {
    set(0);
  };
  return { varId, get, set, reset, callbacks: {} };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ModelListing,
  ModelScheduler,
  Outputs,
  Series,
  WasmBuffer,
  WasmModel,
  createFloat64WasmBuffer,
  createInputValue,
  createInt32WasmBuffer,
  createWasmModelRunner,
  initWasmModelAndBuffers,
  perfElapsed,
  perfNow,
  updateOutputIndices
});
//# sourceMappingURL=index.cjs.map