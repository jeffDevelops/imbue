import { TypographyStyles } from '../../Theme/types'

export interface NativeSelectTheme
  extends TypographyStyles {
  padding: string
  outline: string
  border: string
  height: string
  focused: {
    outline: string
  }
}

export const nativeSelectThemeLight: NativeSelectTheme = {
  padding: '4px 8px',
  outline: 'none',
  color: '#536071',
  border: '1px solid #EEF5FF',
  fontFamily: 'system, sans-serif',
  fontSize: '16px',
  kerning: '1px',
  fontWeight: '400',
  height: '48px',
  focused: {
    outline: 'none',
  },
}

export const nativeSelectThemeDark: NativeSelectTheme = {
  padding: '4px 8px',
  outline: 'none',
  color: '#F6FAFD',
  border: '1px solid #DCE3FD',
  fontFamily: 'system, sans-serif',
  fontSize: '16px',
  kerning: '1.25px',
  fontWeight: '400',
  height: '48px',
  focused: {
    outline: 'none',
  },
}
