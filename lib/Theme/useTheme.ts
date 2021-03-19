import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export const useTheme = () => {
  const theme = useContext(ThemeContext)

  if (theme === undefined)
    throw new Error(`
      Imbue Error: useTheme not called within the render
      hierarchy of a ThemeProvider. Ensure the component
      calling useTheme is being rendered within a 
      ThemeProvider somewhere higher in the tree.
    `)

  return theme
}
