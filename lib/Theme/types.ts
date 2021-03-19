// CSS Property Utilities
import { BoxShadow } from '../utility/BoxShadow/types'
import { Transition } from '../utility/Transition/types'
import { BoxModel } from '../utility/BoxModel/types'
import { FontFace } from '../utility/FontFace/types'
import { Color } from '../utility/Color/types'
import { Cursor } from '../utility/Cursor/types'

// Component themes
import { NativeSelectTheme } from '../components/NativeSelect/theme'
import { InputTheme } from '../components/Input/theme'

// Components
export interface RadioStyles {
  boxShadow: BoxShadow
  color: string // color of the dot
  backgroundColor: Color | string
  border: string
  borderRadius: string
  size: string
  padding: string
  transform: string
  transition: Transition
  label: {
    padding: string
    margin: string
  }
  hover: {
    backgroundColor: string
    transition: Transition
    transform: string
  }
  clicked: {
    boxShadow: BoxShadow
    transition: Transition
  }
  checked: {
    boxShadow: BoxShadow
    transition: Transition
  }
  disabled: {
    opacity: number
    backgroundColor: string
    transition: Transition
    cursor: Cursor
    boxShadow: BoxShadow
    iconStyles: {
      fill: string
      stroke: string
      height: string
      width: string
      opacity: number
    }
  }
}

export interface CheckboxStyles {
  boxShadow: BoxShadow
  backgroundColor: Color | string
  border: string
  borderRadius: string
  size: string
  padding: string
  transform: string
  transition: Transition
  /** An SVG icon converted to ReactComponent (See https://www.npmjs.com/package/convert-svg-react) */
  icon?: () => JSX.Element
  label: {
    padding: string
    margin: string
  }
  iconStyles: {
    fill: string
    stroke: string
    height: string
    width: string
    transition: Transition
  }
  hover: {
    backgroundColor: string
    transition: Transition
    transform: string
  }
  clicked: {
    boxShadow: BoxShadow
    transition: Transition
  }
  checked: {
    boxShadow: BoxShadow
    transition: Transition
  }
  disabled: {
    opacity: number
    backgroundColor: string
    transition: Transition
    cursor: Cursor
    boxShadow: BoxShadow
    iconStyles: {
      fill: string
      stroke: string
      height: string
      width: string
      opacity: number
    }
  }
}

export interface TextStyles {
  fontFamily: string
  fontSize: string
  kerning: string
  fontStyle?: string
  fontWeight: string
  textTransform?: string
}

export interface TypographyStyles extends TextStyles {
  marginBottom?: string
  color: string
}

export interface ButtonStyles extends TextStyles {
  outline: string
  cursor: string
  transition?: Transition
  transform?: string
  boxShadow?: BoxShadow
}

export type ButtonTheme = TextStyles &
  BoxModel &
  ButtonStyles & {
    hovered: BoxModel & ButtonStyles
    clicked: BoxModel & ButtonStyles
    disabled: BoxModel & ButtonStyles
  }

export interface ListTreeStyles {
  list: {}
  listItems: {
    minHeight: string
    borderWidth: string
    hover: {
      transition: Transition
      backgroundColor: string
    }
  }
}

export interface PaletteColors {
  value: string // The actual color value for this palette member
  contrast: string // The contrast color for when text must be readable as the foreground of the above color value
}

export interface Palette {
  primary: PaletteColors
  secondary: PaletteColors
  tertiary: PaletteColors
  quaternary: PaletteColors

  disabled: PaletteColors

  danger: PaletteColors
  warning: PaletteColors
  success: PaletteColors

  background: PaletteColors
  panelBackground: PaletteColors

  syntaxHighlighting: SyntaxHighlighting
}

export interface BoxShadowConfig {
  default?: BoxShadow
  defaultInset?: BoxShadow

  pronounced?: BoxShadow
  pronouncedInset?: BoxShadow

  /* Because you cannot animate a box-shadow to/from 'none', you can optionally
    provide a box-shadow with 0 x-, y-offsets, and blur- and spread-radii, and
    a transparent color whose non-alpha values constitute an appropriate color--
    appropriate color likely meaning what you're tweening to/from, so that an
    inappropriate color isn't displayed as the animation executes. */
  animatableNone?: BoxShadow
  animatableNoneInset?: BoxShadow
}

export interface HandleProps {
  backgroundColor: string

  /**
   * When the drawer opens horizontally from the left/right edges,
   * the curser that is displayed on the handle bar
   */
  cursorX: Cursor

  /**
   * When the drawer opens vertically from the top/bottom edges,
   * the curser that is displayed on the handle bar
   */
  cursorY: Cursor

  /**
   *  Because the handle could be vertically or
   *  horizontally oriented, `relativeLength` refers to the
   *  length of the handle bar, no matter if it's oriented
   *  horizontally or vertically. A relative value should
   *  be provided (i.e. 30%), so that the bar isn't unruly
   *  on smaller drawers. An explicit (px) width should be
   *  provided for `minLength` and `maxLength`--min- to ensure
   *  accessibility on really small drawers, and max- to
   *  reel in the width on large drawers.
   */
  relativeLength: string

  /**
   *  An explicit (i.e. px) constraint to ensure that the
   *  handle bar is accessible on small drawers; if your
   *  drawer is small enough for this to be an issue, you
   *  likely should rethink the UI.
   */
  minLength: string

  /**
   *  An explicit (i.e. px) constraint to ensure that the
   *  handle bar isn't a mile long on large drawers.
   */
  maxLength: string

  /**
   *  The thickness of the handle bar (perpendicular to the
   *  direction the drawer opens)
   */
  thickness: string
}

export interface DrawerStyles {
  handle: HandleProps
}

export interface Globals {
  palette: Palette
  borderRadius: string
  boxShadow: BoxShadowConfig
}

export interface PanelConfig {
  backgroundColor: string
  foregroundColor: string
  padding: string
  outlineColor: string
}

export interface SyntaxHighlighting {
  comments: string
  punctuation: string
  string: string
}

export type CodeStyles = {
  backgroundColor: string
  borderRadius: string
  padding: string
} & TypographyStyles

export type CodeBlockStyles = {
  backgroundColor: string
} & Omit<TypographyStyles, 'color'>
export interface Theme {
  // Globals
  fontFaces: FontFace[]
  palette: Palette
  borderRadius: string
  boxShadow: BoxShadowConfig

  checkbox: CheckboxStyles
  radioButton: RadioStyles

  h1: TypographyStyles
  h2: TypographyStyles
  h3: TypographyStyles
  h4: TypographyStyles
  h5: TypographyStyles
  h6: TypographyStyles
  body1: TypographyStyles
  body2: TypographyStyles
  code: CodeStyles
  codeBlock: CodeBlockStyles
  label: TypographyStyles
  textInput: InputTheme
  nativeSelect: NativeSelectTheme
  panel: PanelConfig

  button: TextStyles &
    BoxModel &
    ButtonStyles & {
      hovered: BoxModel & ButtonStyles
      clicked: BoxModel & ButtonStyles
      disabled: BoxModel & ButtonStyles
    }
  ghostButton: TextStyles &
    BoxModel &
    ButtonStyles & {
      borderWidth: string
      borderStyle: string

      hovered: {
        transform: string
        transition: Transition
      }
      clicked: {
        transform: string
        transition: Transition
      }
      disabled: {
        cursor: Cursor
        opacity: number
        transition: Transition
      }
    }
  textButton: TextStyles &
    BoxModel &
    ButtonStyles & {
      hovered: {
        transform: string
        transition: Transition
      }
      clicked: {
        transform: string
        transition: Transition
      }
      disabled: {
        cursor: Cursor
        opacity: number
        transition: Transition
      }
    }
  link: TextStyles &
    BoxModel & {
      transitionDisabled?: boolean
      cursor: Cursor
      hovered: {
        borderWidth: string
        distanceFromText: string
      }
      visited: {
        color: string
      }
    }
  drawer: DrawerStyles
  listTree: ListTreeStyles
}
