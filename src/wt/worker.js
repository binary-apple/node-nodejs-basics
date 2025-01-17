import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    try {
        const result = nthFibonacci(workerData.n);
        parentPort.postMessage({status: 'resolved', data: result});
    } catch (err) {
        parentPort.postMessage({status: 'error', data: null});
    }

};

sendResult();