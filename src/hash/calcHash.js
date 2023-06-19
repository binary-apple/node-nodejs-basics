import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const file = await readFile(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'), { encoding: 'utf8' });
    const hash = createHash('sha256').update(file).digest('hex');
    console.log(hash);
};

await calculateHash();