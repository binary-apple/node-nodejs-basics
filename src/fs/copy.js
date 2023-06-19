import { readdir, copyFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const dirFrom = path.resolve(__dirname, 'files');
    const dirTo = path.resolve(__dirname, 'files_copy');
    try {
        await mkdir(dirTo);
        const filesToCopy = await readdir(dirFrom, { withFileTypes: true});
        for (const file of filesToCopy) {
            await copyFile(path.resolve(dirFrom, file.name), path.resolve(dirTo, file.name));
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
