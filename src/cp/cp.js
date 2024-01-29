import { spawn } from 'child_process';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scriptPath = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [scriptPath, ...args], {stdio: 'inherit'});
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['argument1', 'argument2', 'argument3']);
