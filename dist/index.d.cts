import { Plugin } from '@sdeverywhere/build';

interface WorkerPluginOptions {
    /**
     * The destination paths for the generated worker JS files.  If undefined,
     * a `worker.js` file will be written to the configured `prepDir`.
     */
    outputPaths?: string[];
}

declare function workerPlugin(options?: WorkerPluginOptions): Plugin;

export { WorkerPluginOptions, workerPlugin };
