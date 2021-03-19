import ThemeProvider, {
  ThemeContext,
} from './ThemeProvider'
import { Theme } from './types'
import { defaultTheme } from './defaultTheme'
import { defaultDarkTheme } from './defaultDarkTheme'
import { useTheme } from './useTheme'

export default ThemeProvider
export {
  ThemeContext,
  useTheme,
  Theme,
  defaultTheme,
  defaultDarkTheme,
}
