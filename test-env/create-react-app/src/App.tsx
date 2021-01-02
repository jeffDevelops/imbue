import React from 'react'
import Button from '@imbuejs/core/Button'
import ThemeProvider from '@imbuejs/core/Theme'
import Panel from '@imbuejs/core/Panel'
import H1 from '@imbuejs/core/H1'
import H2 from '@imbuejs/core/H2'
import H3 from '@imbuejs/core/H3'
import H4 from '@imbuejs/core/H4'
import H5 from '@imbuejs/core/H5'
import H6 from '@imbuejs/core/H6'

import { defaultTheme } from './Theme/theme'

function App() {
  return (
    <ThemeProvider>
      <Button disabled meaning="warning">
        Hello
      </Button>

      <Panel height="auto" width="918px">
        <H1>Sphinx of black quartz, judge my vow</H1>
        <H2>Sphinx of black quartz, judge my vow</H2>
        <H3>Sphinx of black quartz, judge my vow</H3>
        <H4>Sphinx of black quartz, judge my vow</H4>
        <H5>Sphinx of black quartz, judge my vow</H5>
        <H6>Sphinx of black quartz, judge my vow</H6>
      </Panel>
    </ThemeProvider>
  )
}

export default App
