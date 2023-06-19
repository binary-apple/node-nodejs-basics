import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();