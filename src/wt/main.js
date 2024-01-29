import { Worker } from 'worker_threads';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.resolve(__dirname, 'worker.js');

const performCalculations = async () => {
    const worker = new Worker(workerPath, {workerData: {n: 6}});
    worker.on('message', (msg) => { console.log(msg); });
};

await performCalculations();