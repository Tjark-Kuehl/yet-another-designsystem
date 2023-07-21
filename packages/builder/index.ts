import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { build } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

const entryFile = process.argv[2] ?? 'index.ts';
const buildPath = path.resolve(`${process.cwd()}/`);

// const moduleName = buildPath.split(path.sep).pop();

await build({
  build: {
    lib: {
      entry: path.join(buildPath, entryFile),
      formats: ['es'],
      // name: moduleName,
    },
    outDir: path.join(buildPath, '/dist'),
    rollupOptions: {
      external: ['vue'],
      output: {
        // Overwrite naming of entry file
        entryFileNames: 'index.js',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: buildPath,
      tsconfigPath: path.join(buildPath, 'tsconfig.json'),
    }),
    cssInjectedByJsPlugin(),
  ],
});
