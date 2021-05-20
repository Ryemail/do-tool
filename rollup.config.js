import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
    {
        input: 'src/index.js',
        output: {
            name: '$doing',
            file: pkg.browser,
            format: 'umd',
            exports: 'auto',
        },
        plugins: [
            resolve(), // so Rollup can find `ms`
            commonjs(), // so Rollup can convert `ms` to an ES module
            babel({
                exclude: ['node_modules/**'],
            }),
            terser(),
        ],
    },
    {
        input: 'src/index.js',
        output: [
            { file: pkg.main, format: 'cjs', exports: 'auto' },
            { file: pkg.module, format: 'es', exports: 'auto' },
        ],
        plugins: [
            babel({
                exclude: ['node_modules/**'],
            }),
            terser(),
        ],
    },
];
