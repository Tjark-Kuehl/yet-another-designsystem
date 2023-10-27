import path from 'node:path';
import { build } from 'vite';

import { createConfig } from './config.js';

const config = createConfig(path.resolve(`${process.cwd()}/`));
await build(config);
