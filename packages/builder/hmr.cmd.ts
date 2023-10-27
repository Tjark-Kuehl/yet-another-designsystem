import path from 'node:path';
import { createLogger, createServer, mergeConfig } from 'vite';

import { createConfig } from './config.js';

const config = createConfig(path.resolve(`${process.cwd()}/`));
await createServer(
  mergeConfig(config, { customLogger: createLogger() }),
);

// https://github.com/nuxt/nuxt/blob/1d43cdc908d62411e919cd1b42fa547c8aad0470/packages/vite/src/server.ts#L4
