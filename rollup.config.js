import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'

const isProduction = process.env.NODE_ENV === 'production'

export default async () => ({
  external: [
    'react',
    'react-dom',
    'styled-components',
    'framer-motion',
  ],
  input: {
    // named exports direct from library
    // index: './lib/index.ts',

    // Default exports from component files
    Theme: './lib/Theme.ts',
    Button: './lib/Button.ts',
    Checkbox: './lib/Checkbox.ts',
    RadioButtoon: './lib/RadioButton.ts',
    H1: './lib/H1.ts',
    H2: './lib/H2.ts',
    H3: './lib/H3.ts',
    H4: './lib/H4.ts',
    H5: './lib/H5.ts',
    H6: './lib/H6.ts',
    Panel: './lib/Panel.ts',
    Flex: './lib/Flex.ts',
  },
  plugins: [
    external(),
    typescript({
      rollupCommonJSResolveHack: true,
    }),
    isProduction &&
      (await import('rollup-plugin-terser')).terser(), // minify if in production
  ],
  output: {
    dir: 'build',
    format: 'cjs',
    exports: 'named', // allow default and named exports
  },
})
