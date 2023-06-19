import { argv } from 'process';

const parseArgs = () => {
    const args = argv.join(' ')
        .split(' --')
        .splice(1)
        .map((arg) => arg.split(' ').join(' is '))
        .join(', ');
    console.log(args);
};

parseArgs();