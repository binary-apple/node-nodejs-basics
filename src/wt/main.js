import { Worker } from 'worker_threads';

import { cpus } from 'os';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const workerPath = path.resolve(__dirname, 'worker.js');

const performCalculations = async () => {
    const threadsNumber = cpus().length;
    const threads = new Set();
    const results = [];

    for (let i = 0; i < threadsNumber; i++) {
        threads.add(new Worker(workerPath, {workerData: {n: i + 10}}));
    }

    for (let worker of threads) {
        worker.on('message', (msg) => {
            results.push(msg);
            if (results.length === threadsNumber) {
                results.sort((a, b) => (a.data - b.data));
                console.log(results);
                return;
            }
        });
    }

};

await performCalculations();