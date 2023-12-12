import { resolve as _resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'index.js',
  path: _resolve(__dirname, 'dist'),
};
export const resolve = {
  fallback: {
    "querystring": require.resolve("querystring-es3"),
    "path": require.resolve("path-browserify"),
  },
};
