import { ModelRunner } from '@sdeverywhere/runtime';

/**
 * Initialize a `ModelRunner` that runs the model asynchronously in a worker thread.
 *
 * In your app project, define a JavaScript file, called `worker.js` for example, that
 * initializes the model worker in the context of the Web Worker:
 *
 * ```js
 * import { initWasmModelAndBuffers } from '@sdeverywhere/runtime'
 * import { exposeModelWorker } from '@sdeverywhere/runtime-async/worker'
 *
 * async function initWasmModel() {
 *   const wasmModules = loadWasm()
 *   return initWasmModelAndBuffers(...)
 * }
 *
 * exposeModelWorker(initWasmModel)
 * ```
 *
 * Then, in your web app, call the `spawnAsyncModelRunner` function, which
 * will spawn the Web Worker and initialize the `ModelRunner` that communicates
 * with the worker:
 *
 * ```js
 * import { spawnAsyncModelRunner } from '@sdeverywhere/runtime-async/runner'
 *
 * async function initApp() {
 *   // ...
 *   const runner = await spawnAsyncModelRunner({ path: './worker.js' })
 *   // ...
 * }
 * ```
 *
 * @param workerSpec Either a `path` to the worker JavaScript file, or the `source`
 * containing the full JavaScript source of the worker.
 */
declare function spawnAsyncModelRunner(workerSpec: {
    path: string;
} | {
    source: string;
}): Promise<ModelRunner>;

export { spawnAsyncModelRunner };
