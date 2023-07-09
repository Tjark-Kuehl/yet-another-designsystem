import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { build } from 'vite';

const entryFile = process.argv[2];
const buildPath = path.resolve(`${process.cwd()}/`);

await build({
  build: {
    lib: {
      entry: path.join(buildPath, entryFile),
      name: entryFile,
    },
    outDir: path.join(buildPath, '/dist'),
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
});
