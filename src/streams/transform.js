const { stdin, stdout } = process;
import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _encoding, callback) {
          callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    stdin.pipe(reverse).pipe(stdout);
};

await transform();