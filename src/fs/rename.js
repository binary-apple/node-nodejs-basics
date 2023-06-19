import { rename as nodeRename, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

const rename = async () => {
    try {
        const oldPath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
        const newPath = path.resolve(__dirname, 'files', 'properFilename.md');        
        try {
            await stat(newPath);
            throw new CustomError('properFilename.md is already exists');
        } catch(err) {
            if (err instanceof CustomError) {
                throw err;
            } else {
                try {
                    await nodeRename(oldPath, newPath);
                } catch(err) {
                    throw err;
                }
            }
        }   
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();