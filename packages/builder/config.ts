import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { type InlineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

export const createConfig = (buildPath: string) => ({
  // base: ctx.nuxt.options.dev
  //   ? joinURL(ctx.nuxt.options.app.baseURL.replace(/^\.\//, '/') || '/', ctx.nuxt.options.app.buildAssetsDir)
  //   : undefined,
  // experimental: {
  //   renderBuiltUrl: (filename, { type, hostType }) => {
  //     if (hostType !== 'js') {
  //       // In CSS we only use relative paths until we craft a clever runtime CSS hack
  //       return { relative: true }
  //     }
  //     if (type === 'public') {
  //       return { runtime: `${helper}__publicAssetsURL(${JSON.stringify(filename)})` }
  //     }
  //     if (type === 'asset') {
  //       const relativeFilename = filename.replace(withTrailingSlash(withoutLeadingSlash(ctx.nuxt.options.app.buildAssetsDir)), '')
  //       return { runtime: `${helper}__buildAssetsURL(${JSON.stringify(relativeFilename)})` }
  //     }
  //   }
  // },
  // css: {
  //   devSourcemap: !!ctx.nuxt.options.sourcemap.server
  // },
  // server: {
  //   // https://github.com/vitest-dev/vitest/issues/229#issuecomment-1002685027
  //   preTransformRequests: false,
  //   hmr: false
  // },
  build: {
    lib: {
      entry: path.join(buildPath, 'index.ts'),
      formats: ['es'],
      // name: moduleName,
    },
    outDir: path.join(buildPath, '/dist'),
    reportCompressedSize: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        // Overwrite naming of entry file
        entryFileNames: 'index.js',
        // entryFileNames: '[name].mjs',
        // format: 'module',
        // generatedCode: {
        //   constBindings: true
        // }
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    sourcemap: true,
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

                  // @ts-expect-error lorem ipsum
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
}) satisfies InlineConfig;
