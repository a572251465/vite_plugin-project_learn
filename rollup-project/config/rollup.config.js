import { defineConfig } from 'rollup'
import path from 'path'
import cleanup from 'rollup-plugin-cleanup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const outputPath = path.resolve(__dirname, '../dist')

export default defineConfig({
  input: path.resolve(__dirname, '..', './src/main.js'),
  plugins: [cleanup(), nodeResolve(), commonjs()],
  output: [
    {
      file: path.resolve(outputPath, 'index.esm.js'),
      format: 'esm'
    }
  ]
})
