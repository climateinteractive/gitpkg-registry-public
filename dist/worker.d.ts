import { WasmModelInitResult } from '@sdeverywhere/runtime';

/**
 * Expose an object in the current worker thread that communicates with the
 * `ModelRunner` instance running in the main thread.  The exposed worker
 * object will take care of running the `WasmModel` on the worker thread
 * and sending the outputs back to the main process.
 *
 * @param init The function that initializes the `WasmModel` instance that
 * is used in the worker thread.
 */
declare function exposeModelWorker(init: () => Promise<WasmModelInitResult>): void;

export { exposeModelWorker };
