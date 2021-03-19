import React, {
  createContext,
  useContext,
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
  theme: Theme // The current theme (dark or light)
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
  const initialState = (() => {
    // Prioritize session storage
    if (
      sessionStorage.getItem('@imbuejs/Theme:isDarkMode')
    ) {
      return JSON.parse(
        sessionStorage.getItem(
          '@imbuejs/Theme:isDarkMode',
        ) as string,
      )
    }

    return window.matchMedia('(prefers-color-scheme: dark)')
      .matches
  })()

  const [isDarkMode, setIsDarkMode] = useState(initialState)

  useEffect(() => {
    const handleDarkModeChange = (
      e: MediaQueryListEvent,
    ) => {
      setIsDarkMode(e.matches)
    }

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleDarkModeChange)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleDarkModeChange)
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem(
      '@imbuejs/Theme:isDarkMode',
      `${isDarkMode}`,
    )
  }, [isDarkMode])

  return (
    <ThemeContext.Provider
      value={{
        theme: isDarkMode ? darkTheme : theme,
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
