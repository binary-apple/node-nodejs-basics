import { createReadStream } from 'fs';
const { stdout } = process;

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const inStream = createReadStream(path.resolve(__dirname, 'files', 'fileToRead.txt'), 'utf-8');
    inStream.on('error', err => console.log('Error', err.message));
    inStream.pipe(stdout);
};

await read();