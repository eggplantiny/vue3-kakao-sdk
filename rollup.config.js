import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [{
  input: 'src/index.ts',
  output: {
    file: pkg.types,
    format: 'es'
  },
  plugins: [dts()]
}]
