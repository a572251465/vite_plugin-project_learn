import { defineConfig } from 'rollup'
import path from 'path'
import cleanup from 'rollup-plugin-cleanup'

const outputPath = path.resolve(__dirname, '../dist')

export default defineConfig({
  input: path.resolve(__dirname, '..', './src/main.js'),
  external: 'lodash-es',
  plugins: [cleanup()],
  output: [
    {
      file: path.resolve(outputPath, 'index.umd.js'),
      format: 'umd',
      name: 'Test',
      globals: {
        'lodash-es': 'lodashEs'
      }
    },
    ...['auto', 'default', 'named'].map((exports) => {
      return {
        file: path.resolve(outputPath, `index.cjs.${exports}.js`),
        format: 'cjs',
        exports,
        globals: {
          'lodash-es': 'lodashEs'
        }
      }
    }),
    {
      file: path.resolve(outputPath, 'index.esm.js'),
      format: 'esm',
      globals: {
        'lodash-es': 'lodashEs'
      }
    },
    {
      file: path.resolve(outputPath, 'index.iife.js'),
      format: 'iife',
      name: 'iife',
      globals: {
        'lodash-es': 'lodashEs'
      }
    }
  ]
})
