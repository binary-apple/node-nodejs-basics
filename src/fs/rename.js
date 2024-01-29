import { rename as nodeRename, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.resolve(__dirname, 'files', 'properFilename.md');        
    try {
        await stat(newPath);
    } catch(err) {
        try {
            await nodeRename(oldPath, newPath);
            return;
        } catch {
            throw new Error('FS operation failed');
        }
    }
    throw new Error('FS operation failed');
};

await rename();