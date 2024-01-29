import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    try {
        const files = await readdir(path.resolve(__dirname, 'files'));
        for (const file of files) {
            console.log(file);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    } 
};

await list();