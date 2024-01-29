import { createHash } from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt'));
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();