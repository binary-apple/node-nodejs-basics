import { access, writeFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
    access(filePath, (err) => {
        if (err) {
            writeFile(filePath, 'I am fresh and young', () => {});
        } else {
            throw new Error('FS operation failed');
        }
    });
};

await create();