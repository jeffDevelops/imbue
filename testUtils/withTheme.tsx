import React, { ReactNode } from 'react'
import styled from 'styled-components'
import ThemeProvider, {
  Theme,
  ThemeContext,
} from '../lib/Theme'
import { defaultTheme } from '../lib/Theme/defaultTheme'
import Flex from '../lib/Flex'
import Button from '../lib/Button'

const ExtendedButton = styled(Button)`
  font-size: 24px;
  padding: 4px 6px;
  letter-spacing: 0;
`

export const withTheme = (
  children: ReactNode,
  theme: Theme = defaultTheme,
) => {
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Consumer>
        {({ isDarkMode, setIsDarkMode }) => (
          <Flex column position="relative" minHeight="100%">
            <Flex
              width="auto"
              top="16px"
              right="16px"
              position="absolute"
              zIndex={2}
            >
              <ExtendedButton
                onClick={() => setIsDarkMode(!isDarkMode)}
                hierarchy="tertiary"
              >
                {isDarkMode ? '🌞' : '🌜'}
              </ExtendedButton>
            </Flex>
            {children}
          </Flex>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  )
}
