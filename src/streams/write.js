import { createWriteStream } from 'fs';
const { stdin } = process;
import * as readline from 'readline/promises';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
    const outStream = createWriteStream(path.resolve(__dirname, 'files', 'fileToWrite.txt'));
    const rl = readline.createInterface({ input: stdin, output: outStream });

    rl.on('line', (input) => {
        outStream.write(input + '\n');
    });

    rl.on('SIGINT', rl.close);
};

await write();