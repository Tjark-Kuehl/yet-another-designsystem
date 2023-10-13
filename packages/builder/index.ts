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
    vue({
      /**
       * Remove data-test tags
       * https://github.com/vitejs/vite/issues/636#issuecomment-665545551
      */
      template: {
        compilerOptions: {
          nodeTransforms: [
            (node) => {
              if (node.type === 1) {
                for (let i = 0; i < node.props.length; i++) {
                  const props = node.props[i];

                  const isDataTest = props.name === 'data-test';
                  // @ts-expect-error - argument is an DirectiveNode and says it doesn't have a content property
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  const isBoundDataTest = props.name === 'bind' && props.arg?.content === 'data-test';

                  if (isDataTest || isBoundDataTest) {
                    node.props.splice(i, 1);

                    i -= 1;
                  }
                }
              }
            },
          ],
        },
      },
    }),
    dts({
      entryRoot: buildPath,
      tsconfigPath: path.join(buildPath, 'tsconfig.json'),
    }),
    cssInjectedByJsPlugin(),
  ],
});
