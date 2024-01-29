import { env } from 'process';

const parseEnv = () => {
    const regex = new RegExp('^RSS_');
    const rssVars = Object.entries(env).
        filter(([key, _val]) => regex.test(key))
        .map(([key, val]) => `${key}=${val}`)
        .join('; ');
    console.log(rssVars);
};

parseEnv();