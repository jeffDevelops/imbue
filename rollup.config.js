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
    Theme: './lib/Theme/index.ts',
    Button: './lib/Button.ts',
    GhostButton: './lib/GhostButton.ts',
    Checkbox: './lib/Checkbox.ts',
    RadioButton: './lib/RadioButton.ts',
    H1: './lib/H1.ts',
    H2: './lib/H2.ts',
    H3: './lib/H3.ts',
    H4: './lib/H4.ts',
    H5: './lib/H5.ts',
    H6: './lib/H6.ts',
    Body1: './lib/Body1.ts',
    Body2: './lib/Body2.ts',
    Panel: './lib/Panel.ts',
    Flex: './lib/Flex.ts',
    Grid: './lib/Grid.ts',
    Input: './lib/Input.ts',
    Textarea: './lib/Textarea.ts',
    Drawer: './lib/Drawer.ts',
    Link: './lib/Link.ts',
    ListTree: './lib/ListTree.ts',
    Code: './lib/Code.ts',
    CodeBlock: './lib/CodeBlock.ts',
    Box: './lib/Box.ts',
    NativeSelect: './lib/NativeSelect.ts',
    Select: './lib/Select.ts',
    utility: './lib/utility.ts',
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
