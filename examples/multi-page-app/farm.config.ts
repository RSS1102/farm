import type { UserConfig } from '@farmfe/core';

export default <UserConfig>{
  compilation: {
    input: {
      index: './src/pages/index/index.html',
      about: './src/pages/about/index.html',
    },
    resolve: {
      symlinks: true
    },
    output: {
      path: './build'
    },
    sourcemap: false,
    css: {
      // modules: {
      //   indentName: 'farm-[name]-[hash]'
      // },
      prefixer: {
        targets: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11']
      }
    }
    // treeShaking: true,
    // minify: true,
  },
  server: {
    hmr: true,
    cors: true,
  },
  plugins: ['@farmfe/plugin-react', '@farmfe/plugin-sass']
};