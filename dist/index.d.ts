import { Result } from 'neverthrow';

/** An input variable identifier string, as used in SDEverywhere. */
declare type InputVarId = string;
/** An output variable identifier string, as used in SDEverywhere. */
declare type OutputVarId = string;
/**
 * The variable index values for use with the optional output indices buffer.
 * @hidden This is not yet part of the public API; it is exposed here for use in testing tools.
 */
interface OutputVarSpec {
    /** The variable index as used in the generated C code. */
    varIndex: number;
    /** The subscript index values as used in the generated C code. */
    subscriptIndices?: number[];
}

/**
 * Type declaration for a WebAssembly module wrapper produced
 * by the Emscripten compiler.  This only declares the minimal
 * set of fields needed by `WasmModel` and `WasmBuffer`.
 */
interface WasmModule {
    /** @hidden */
    cwrap: (fname: string, rettype: string, argtypes: string[]) => any;
    /** @hidden */
    _malloc: (numBytes: number) => number;
    /** @hidden */
    _free: (byteOffset: number) => void;
    /** @hidden */
    HEAP32: Int32Array;
    /** @hidden */
    HEAPF64: Float64Array;
}

/**
 * Wraps a `WebAssembly.Memory` buffer allocated on the wasm heap.
 *
 * When this is used synchronously (in the browser's normal JavaScript thread),
 * the client can use `getArrayView` to write directly into the underlying memory.
 *
 * Note, however, that `WebAssembly.Memory` buffers cannot be transferred to/from
 * a Web Worker.  When using this class in a worker thread, create a separate
 * `Float64Array` that can be transferred between the worker and the client running
 * in the browser's normal JS thread, and then use `getArrayView` to copy into and
 * out of the wasm buffer.
 */
declare class WasmBuffer<ArrType> {
    private readonly wasmModule;
    private byteOffset;
    private heapArray;
    /**
     * @param wasmModule The `WasmModule` used to initialize the memory.
     * @param byteOffset The byte offset within the wasm heap.
     * @param heapArray The array view on the underlying heap buffer.
     */
    constructor(wasmModule: WasmModule, byteOffset: number, heapArray: ArrType);
    /**
     * @return An `ArrType` view on the underlying heap buffer.
     */
    getArrayView(): ArrType;
    /**
     * @return The raw address of the underlying heap buffer.
     * @hidden This is intended for use by `WasmModel` only.
     */
    getAddress(): number;
    /**
     * Dispose the buffer by freeing the allocated heap memory.
     */
    dispose(): void;
}
/**
 * Return a `WasmBuffer` that holds int32 elements.
 *
 * @hidden For internal use only.
 *
 * @param wasmModule The `WasmModule` used to initialize the memory.
 * @param numElements The number of elements in the buffer.
 */
declare function createInt32WasmBuffer(wasmModule: WasmModule, numElements: number): WasmBuffer<Int32Array>;
/**
 * Return a `WasmBuffer` that holds float64 elements.
 *
 * @hidden For internal use only.
 *
 * @param wasmModule The `WasmModule` used to initialize the memory.
 * @param numElements The number of elements in the buffer.
 */
declare function createFloat64WasmBuffer(wasmModule: WasmModule, numElements: number): WasmBuffer<Float64Array>;

/**
 * An interface to the generated WebAssembly model.  Allows for running the model with
 * a given set of input values, producing a set of output values.
 */
declare class WasmModel {
    /** The start time for the model (aka `INITIAL TIME`). */
    readonly startTime: number;
    /** The end time for the model (aka `FINAL TIME`). */
    readonly endTime: number;
    /** The frequency with which output values are saved (aka `SAVEPER`). */
    readonly saveFreq: number;
    /** The number of save points for each output. */
    readonly numSavePoints: number;
    /**
     * The maximum number of output indices that can be passed for each run.
     * @hidden This is not yet part of the public API; it is exposed here for use
     * in experimental testing tools.
     */
    readonly maxOutputIndices: number;
    private readonly wasmRunModel;
    /**
     * @param wasmModule The `WasmModule` that provides access to the native functions.
     */
    constructor(wasmModule: WasmModule);
    /**
     * Run the model, using inputs from the `inputs` buffer, and writing outputs into
     * the `outputs` buffer.
     *
     * @param inputs The buffer containing inputs in the order expected by the model.
     * @param outputs The buffer into which the model will store output values.
     * @param outputIndices The buffer used to control which variables are written to `outputs`.
     */
    runModel(inputs: WasmBuffer<Float64Array>, outputs: WasmBuffer<Float64Array>, outputIndices?: WasmBuffer<Int32Array>): void;
}
/**
 * The result of model initialization.
 */
interface WasmModelInitResult {
    /** The wasm model. */
    model: WasmModel;
    /** The buffer used to pass input values to the model. */
    inputsBuffer: WasmBuffer<Float64Array>;
    /** The buffer used to receive output values from the model. */
    outputsBuffer: WasmBuffer<Float64Array>;
    /**
     * The buffer used to control which variables are written to `outputsBuffer`.
     * @hidden This is not yet part of the public API; it is exposed here for use
     * in experimental testing tools.
     */
    outputIndicesBuffer?: WasmBuffer<Int32Array>;
    /** The output variable IDs. */
    outputVarIds: OutputVarId[];
}
/**
 * Initialize the wasm model and buffers.
 *
 * @param wasmModule The `WasmModule` that wraps the `wasm` binary.
 * @param numInputs The number of input variables, per the spec file passed to `sde`.
 * @param outputVarIds The output variable IDs, per the spec file passed to `sde`.
 */
declare function initWasmModelAndBuffers(wasmModule: WasmModule, numInputs: number, outputVarIds: OutputVarId[]): WasmModelInitResult;
/**
 * @hidden This is not part of the public API; it is exposed here for use by
 * the synchronous and asynchronous model runner implementations.
 */
declare function updateOutputIndices(indicesArray: Int32Array, outputVarSpecs: OutputVarSpec[]): void;

/** Callback functions that are called when the input value is changed. */
interface InputCallbacks {
    /** Called after a new value is set. */
    onSet?: () => void;
}
/**
 * Represents a writable model input.
 */
interface InputValue {
    /** The ID of the associated input variable, as used in SDEverywhere. */
    varId: InputVarId;
    /** Get the current value of the input. */
    get: () => number;
    /** Set the input to the given value. */
    set: (value: number) => void;
    /** Reset the input to its default value. */
    reset: () => void;
    /** Callback functions that are called when the input value is changed. */
    callbacks: InputCallbacks;
}
/**
 * Create a basic `InputValue` instance that notifies when a new value is set.
 *
 * @param varId The input variable ID, as used in SDEverywhere.
 * @param defaultValue The default value of the input.
 * @param initialValue The inital value of the input; if undefined, will use `defaultValue`.
 */
declare function createInputValue(varId: InputVarId, defaultValue: number, initialValue?: number): InputValue;

/** Indicates the type of error encountered when parsing an outputs buffer. */
declare type ParseError = 'invalid-point-count';
/** A data point. */
interface Point {
    /** The x value (typically a time value). */
    x: number;
    /** The y value. */
    y: number;
}
/**
 * A time series of data points for an output variable.
 */
declare class Series {
    readonly varId: OutputVarId;
    readonly points: Point[];
    /**
     * @param varId The ID for the output variable (as used by SDEverywhere).
     * @param points The data points for the variable, one point per time increment.
     */
    constructor(varId: OutputVarId, points: Point[]);
    /**
     * Return the Y value at the given time.  Note that this does not attempt to interpolate
     * if there is no data point defined for the given time and will return undefined in
     * that case.
     *
     * @param time The x (time) value.
     * @return The y value for the given time, or undefined if there is no data point defined
     * for the given time.
     */
    getValueAtTime(time: number): number | undefined;
    /**
     * Create a new `Series` instance that is a copy of this one.
     */
    copy(): Series;
}
/** Represents the outputs from a model run. */
declare class Outputs {
    readonly varIds: OutputVarId[];
    readonly startTime: number;
    readonly endTime: number;
    readonly saveFreq: number;
    /** The number of data points in each series. */
    readonly seriesLength: number;
    /** The array of series, one for each output variable. */
    readonly varSeries: Series[];
    /**
     * The latest model run time, in milliseconds.
     * @hidden This is not yet part of the public API; it is exposed here for use
     * in performance testing tools.
     */
    runTimeInMillis: number;
    /**
     * The optional set of specs that dictate which variables from the model will be
     * stored in this `Outputs` instance.  If undefined, the default set of outputs
     * will be stored (as configured in `varIds`).
     * @hidden This is not yet part of the public API; it is exposed here for use
     * in experimental testing tools.
     */
    varSpecs?: OutputVarSpec[];
    /**
     * @param varIds The output variable identifiers.
     * @param startTime The start time for the model.
     * @param endTime The end time for the model.
     * @param saveFreq The frequency with which output values are saved (aka `SAVEPER`).
     */
    constructor(varIds: OutputVarId[], startTime: number, endTime: number, saveFreq?: number);
    /**
     * The optional set of specs that dictate which variables from the model will be
     * stored in this `Outputs` instance.  If undefined, the default set of outputs
     * will be stored (as configured in `varIds`).
     * @hidden This is not yet part of the public API; it is exposed here for use
     * in experimental testing tools.
     */
    setVarSpecs(varSpecs: OutputVarSpec[]): void;
    /**
     * Parse the given raw float buffer (produced by the model) and store the values
     * into this `Outputs` instance.
     *
     * Note that the length of `outputsBuffer` must be greater than or equal to
     * the capacity of this `Outputs` instance.  The `Outputs` instance is allowed
     * to be smaller to support the case where you want to extract a subset of
     * the time range in the buffer produced by the model.
     *
     * @param outputsBuffer The raw outputs buffer produced by the model.
     * @param rowLength The number of elements per row (one element per save point).
     * @return An `ok` result if the buffer is valid, otherwise an `err` result.
     */
    updateFromBuffer(outputsBuffer: Float64Array, rowLength: number): Result<void, ParseError>;
    /**
     * Return the series for the given output variable.
     *
     * @param varId The ID of the output variable (as used by SDEverywhere).
     */
    getSeriesForVar(varId: OutputVarId): Series | undefined;
}

/**
 * Abstraction that allows for running the wasm model on the JS thread
 * or asynchronously (e.g. in a Web Worker), depending on the implementation.
 */
interface ModelRunner {
    /**
     * Create an `Outputs` instance that is sized to accommodate the output variable
     * data stored by the model.
     *
     * @return A new `Outputs` instance.
     */
    createOutputs(): Outputs;
    /**
     * Run the model.
     *
     * @param inputs The model input values (must be in the same order as in the spec file).
     * @param outputs The structure into which the model outputs will be stored.
     * @return A promise that resolves with the outputs when the model run is complete.
     */
    runModel(inputs: InputValue[], outputs: Outputs): Promise<Outputs>;
    /**
     * Run the model synchronously.
     *
     * @param inputs The model input values (must be in the same order as in the spec file).
     * @param outputs The structure into which the model outputs will be stored.
     * @return The outputs of the run.
     *
     * @hidden This is only intended for internal use; some implementations may not support
     * running the model synchronously, in which case this will be undefined.
     */
    runModelSync?(inputs: InputValue[], outputs: Outputs): Outputs;
    /**
     * Terminate the runner by releasing underlying resources (e.g., the worker thread or
     * Wasm module/buffers).
     */
    terminate(): Promise<void>;
}
/**
 * Create a `ModelRunner` that runs the given wasm model on the JS thread.
 *
 * @param wasmResult The result of initializing the wasm model.
 */
declare function createWasmModelRunner(wasmResult: WasmModelInitResult): ModelRunner;

/**
 * @hidden This is not yet part of the public API; it is exposed here for use
 * in experimental testing tools.
 */
declare class ModelListing {
    readonly varSpecs: Map<OutputVarId, OutputVarSpec>;
    constructor(modelJsonString: string);
    /**
     * Create a new `Outputs` instance that uses the same start/end years as the given "normal"
     * `Outputs` instance but is prepared for reading the specified internal variables from the model.
     *
     * @param normalOutputs The `Outputs` that is used to access normal output variables from the model.
     * @param varIds The variable IDs to include with the new `Outputs` instance.
     */
    deriveOutputs(normalOutputs: Outputs, varIds: OutputVarId[]): Outputs;
}

/**
 * Return a timestamp that can be passed to `perfElapsed` for calculating the elapsed
 * time of an operation.
 *
 * @hidden This is not part of the public API; exposed only for use in performance testing.
 */
declare function perfNow(): unknown;
/**
 * Return the elapsed time between the given timestamp (created by `perfNow`) and now.
 *
 * @hidden This is not part of the public API; exposed only for use in performance testing.
 */
declare function perfElapsed(t0: unknown): number;

/**
 * A high-level interface that schedules running of the underlying `WasmModel`.
 *
 * When one or more input values are changed, this class will schedule a model
 * run to be completed as soon as possible.  When the model run has completed,
 * `onOutputsChanged` is called to notify that new output data is available.
 *
 * The `ModelRunner` is pluggable to allow for running the model synchronously
 * (on the main JavaScript thread) or asynchronously (in a Web Worker or Node.js
 * worker thread).
 */
declare class ModelScheduler {
    private readonly runner;
    private readonly userInputs;
    private outputs;
    /** The second array that holds a stable copy of the user inputs. */
    private readonly currentInputs;
    /** Whether a model run has been scheduled. */
    private runNeeded;
    /** Whether a model run is in progress. */
    private runInProgress;
    /** Called when `outputs` has been updated after a model run. */
    onOutputsChanged?: (outputs: Outputs) => void;
    /**
     * @param runner The model runner.
     * @param userInputs The input values, in the same order as in the spec file passed to `sde`.
     * @param outputs The structure into which the model outputs will be stored.
     */
    constructor(runner: ModelRunner, userInputs: InputValue[], outputs: Outputs);
    /**
     * Schedule a wasm model run (if not already pending).  When the run is
     * complete, save the outputs and call the `onOutputsChanged` callback.
     */
    private runWasmModelIfNeeded;
    /**
     * Run the wasm model asynchronously using the current set of input values.
     */
    private runWasmModelNow;
}

export { InputCallbacks, InputValue, InputVarId, ModelListing, ModelRunner, ModelScheduler, OutputVarId, OutputVarSpec, Outputs, ParseError, Point, Series, WasmBuffer, WasmModel, WasmModelInitResult, WasmModule, createFloat64WasmBuffer, createInputValue, createInt32WasmBuffer, createWasmModelRunner, initWasmModelAndBuffers, perfElapsed, perfNow, updateOutputIndices };
