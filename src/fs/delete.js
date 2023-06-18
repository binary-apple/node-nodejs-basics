import { access, rm } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');
    access(filePath, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        rm(filePath, () => {});
    });
};

await remove();