import { TypographyStyles } from '../../Theme/types'

export interface InputTheme extends TypographyStyles {
  placeholderColor: string
  border?: string
  height: string
}

export const inputThemeLight: InputTheme = {
  placeholderColor: '#AAC1D0',
  color: '#536071',
  border: '1px solid #EEF5FF',
  fontFamily: 'system, sans-serif',
  fontSize: '16px',
  kerning: '1px',
  fontWeight: '400',
  height: '48px',
}

export const inputThemeDark: InputTheme = {
  placeholderColor: '#637081',
  color: '#F6FAFD',
  border: '1px solid #DCE3FD',
  fontFamily: 'system, sans-serif',
  fontSize: '16px',
  kerning: '1.25px',
  fontWeight: '400',
  height: '48px',
}
