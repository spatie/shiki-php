import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
    input: 'resources/js/index.js',
    output: {
        file: 'dist/shiki.js',
        format: 'cjs',
    },
    plugins: [
        commonjs({
            dynamicRequireTargets: [
                'node_modules/onigasm/*.js',
            ]
        }),
        nodeResolve(),
        copy({
            targets: [
                { src: 'node_modules/shiki/themes', dest: 'dist' },
                { src: 'node_modules/shiki/languages', dest: 'dist' },
                { src: 'custom-languages/*', dest: 'dist/languages' },
            ]
        })
    ],
};
