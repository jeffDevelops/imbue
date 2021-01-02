import React, {
  createContext,
  ReactNode,
  FC,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'
import { Theme } from './types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'
import { defaultDarkTheme } from './defaultDarkTheme'
import GlobalStyles from './GlobalStyles'

export interface ThemeContextType {
  theme: Theme
  darkTheme: Theme
  isDarkMode: boolean
  setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const ThemeContext = createContext(
  {} as ThemeContextType,
)

export interface ThemeContextProviderProps {
  children: ReactNode
  theme?: Theme
  darkTheme?: Theme
}

const ThemeProvider: FC<ThemeContextProviderProps> = ({
  children,
  theme = defaultTheme,
  darkTheme = defaultDarkTheme,
}: ThemeContextProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches,
  )

  useEffect(() => {
    const handleDarkModeChange = (
      e: MediaQueryListEvent,
    ) => {
      e.matches ? setIsDarkMode(true) : setIsDarkMode(false)
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleDarkModeChange)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        darkTheme: darkTheme,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      <StyledThemeProvider
        theme={isDarkMode ? darkTheme : theme}
      >
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
