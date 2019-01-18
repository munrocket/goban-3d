import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import eslint from 'rollup-plugin-eslint';
import bundleSize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import pkg from './package.json';

const external = Object.keys(pkg.dependencies);
const extensions = ['.js', '.vue'];
const isProduction = !process.env.ROLLUP_WATCH;
const globals = { vue: 'Vue' };

const lintOpts = {
  extensions,
  exclude: ['**/*.json'],
  cache: true,
  throwOnError: true
};

const plugins = [
  resolve(),
  eslint(lintOpts),
  bundleSize(),
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: true,
  }),
  buble(),
  commonjs(),
  livereload()
];

export default {
  external,
  plugins,
  input: 'src/entry.js',
  output: {
    globals,
    file: 'dist/bundle.js',
    format: 'umd'
  },
};
