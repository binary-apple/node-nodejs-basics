import { createUnzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(path.resolve(__dirname, 'files', 'archive.gz'));
    const destination = createWriteStream(path.resolve(__dirname, 'files', 'fileToCompress.txt'));

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            throw err;
        }
    });
};

await decompress();