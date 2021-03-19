import { Theme } from './types'
import Color from 'color'

// Default Theme Objects
import { buttonThemeDark } from '../components/Button/theme'
import { nativeSelectThemeDark } from '../components/NativeSelect/theme'
import { inputThemeDark } from '../components/Input/theme'

export const defaultDarkTheme: Theme = {
  fontFaces: [
    {
      fontFamily: 'system',
      src: [
        { local: '"-apple-system"' },
        { local: 'BlinkMacSystemFont' },
        { local: 'avenir next' },
        { local: 'avenir' },
        { local: 'helvetica neue' },
        { local: 'helvetica' },
        { local: 'Ubuntu' },
        { local: 'roboto' },
        { local: 'noto' },
        { local: 'segoe ui' },
        { local: 'arial' },
      ],
    },
    {
      fontFamily: 'system-mono',
      src: [
        { local: 'SF Mono Regular' },
        { local: 'Menlo' },
        { local: 'Andale Mono' },
        { local: 'Monaco' },
        { local: 'Consolas' },
        { local: 'Liberation Mono' },
        { local: 'Courier' },
      ],
    },
  ],
  borderRadius: '8px',
  boxShadow: {
    default: [
      {
        xOffset: '0px',
        yOffset: '2px',
        blurRadius: '6px',
        spreadRadius: '0',
        color: '#13111d',
      },
    ],
    defaultInset: [
      {
        xOffset: '1px',
        yOffset: '2px',
        blurRadius: '6px',
        spreadRadius: '0',
        color: '#13111d',
        inset: true,
      },
    ],
    pronounced: [
      {
        xOffset: '0px',
        yOffset: '3px',
        blurRadius: '3px',
        spreadRadius: '0px',
        color: '#13111d',
      },
    ],
    pronouncedInset: [
      {
        xOffset: '1px',
        yOffset: '3px',
        blurRadius: '7px',
        spreadRadius: '0px',
        color: '#13111d',
        inset: true,
      },
    ],
    animatableNone: [
      {
        xOffset: '0',
        yOffset: '0',
        blurRadius: '0',
        spreadRadius: '0',
        color: '#CEE5F200',
        inset: false,
      },
    ],
    animatableNoneInset: [
      {
        xOffset: '0',
        yOffset: '0',
        blurRadius: '0',
        spreadRadius: '0',
        color: '#CEE5F200',
        inset: true,
      },
    ],
  },
  palette: {
    primary: {
      value: '#229BF2',
      contrast: '#222324',
    },
    secondary: {
      // value: '#e84855',
      value: '#62BFFF',
      contrast: '#222324',
    },
    tertiary: {
      value: '#88A7CF',
      // value: '#536B78',
      contrast: '#222324',
    },
    quaternary: {
      // value: '#7C98B3',
      value: '#FFFFFA',
      contrast: '#222324',
    },

    disabled: {
      value: '#424344AA',
      contrast: '#222324',
    },

    danger: {
      value: '#F05D5E',
      contrast: '#222324',
    },
    warning: {
      value: '#FFBA49',
      contrast: '#222324',
    },
    success: {
      value: '#48BF84',
      contrast: '#222324',
    },

    background: {
      value: '#222324',
      contrast: '#F6FAFD',
    },
    panelBackground: {
      value: '#121314',
      contrast: '#F6FAFD',
    },

    syntaxHighlighting: {
      comments: '#A3B0C1',
      punctuation: '#F6FAFD',
      string: '#F01E19',
    },
  },
  h1: {
    color: '#F6FAFD',
    fontFamily: 'system',
    fontSize: '32px',
    fontStyle: 'normal',
    kerning: '2.75px',
    fontWeight: '600',
    marginBottom: '32px',
  },
  h2: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '28px',
    fontStyle: 'normal',
    kerning: '2.5px',
    fontWeight: '600',
    marginBottom: '28px',
  },
  h3: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '24px',
    fontStyle: 'normal',
    kerning: '3px',
    fontWeight: '800',
    marginBottom: '24px',
  },
  h4: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    kerning: '2px',
    fontWeight: '800',
    marginBottom: '22px',
  },
  h5: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    kerning: '2.25px',
    fontWeight: '800',
    marginBottom: '14px',
    textTransform: 'uppercase',
  },
  h6: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    kerning: '1.5px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  body1: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '12px',
    fontStyle: 'normal',
    kerning: '1px',
    fontWeight: '300',
    marginBottom: '24px',
  },
  body2: {
    color: '#A3B0C1',
    fontFamily: 'system, sans-serif',
    fontSize: '10px',
    fontStyle: 'normal',
    kerning: '1px',
    fontWeight: '300',
    marginBottom: '16px',
  },
  code: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '6px',
    color: '#229BF2',
    fontFamily: 'system-mono, monospace',
    fontSize: '12px',
    kerning: '1px',
    fontWeight: '600',
    padding: '3px 6px',
  },
  codeBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    fontFamily: 'system-mono, monospace',
    fontSize: '12px',
    kerning: '1px',
    fontWeight: '600',
  },
  label: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '14px',
    kerning: '1px',
    fontWeight: '600',
  },
  textInput: inputThemeDark,
  nativeSelect: nativeSelectThemeDark,
  panel: {
    backgroundColor: '#262A2D',
    foregroundColor: '#F6FAFD',
    outlineColor: '#2F363E',
    padding: '32px 40px',
  },
  button: buttonThemeDark,
  ghostButton: {
    height: '40px',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: 'system, sans-serif',
    fontSize: '14px',
    kerning: '3px',
    fontStyle: 'normal',
    fontWeight: '800',
    padding: '0px 22px',
    outline: 'none',
    borderWidth: '2px',
    borderStyle: 'solid',
    cursor: 'pointer',
    transition: [
      {
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
      },
      {
        transitionProperty: 'background-color',
        transitionDuration: '0.3s',
      },
    ],
    hovered: {
      transform: 'scale(1.01)',
      transition: [
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
        },
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
        },
        {
          transitionProperty: 'color',
          transitionDuration: '0.3s',
        },
      ],
    },
    clicked: {
      transform: 'scale(1)',
      transition: [
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
        },
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
        },
      ],
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: 0.75,
      transition: [
        {
          transitionProperty: 'opacity',
          transitionDuration: '0.3s',
        },
      ],
    },
  },
  textButton: {
    textTransform: 'none',
    fontFamily: 'system, sans-serif',
    fontSize: '18px',
    kerning: '2px',
    fontStyle: 'normal',
    fontWeight: '800',
    outline: 'none',
    cursor: 'pointer',
    hovered: {
      transform: `scale(1.01)`,
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
        },
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
        },
      ],
    },
    clicked: {
      transform: `scale(1)`,
      transition: [
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
        },
      ],
    },
    disabled: {
      cursor: 'not-allowed',
      opacity: 0.75,
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
        },
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
        },
      ],
    },
  },
  link: {
    transitionDisabled: false,
    fontFamily: 'system, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    kerning: '1px',
    cursor: 'pointer',
    hovered: {
      borderWidth: '2px',
      distanceFromText: '8px',
    },
    visited: {
      color: '#62BFFF',
    },
  },
  checkbox: {
    boxShadow: [
      {
        xOffset: '0px',
        yOffset: '3px',
        blurRadius: '3px',
        spreadRadius: '0px',
        color: '#13111d',
      },
    ],
    backgroundColor: 'transparent',
    border: '2px solid #2F363E',
    size: '24px',
    borderRadius: '6px',
    padding: '0',
    transform: 'none',
    transition: [
      {
        transitionProperty: 'background-color',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      {
        transitionProperty: 'box-shadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
    ],
    label: {
      padding: '8px 0',
      margin: '0 0 0 16px',
    },
    iconStyles: {
      fill: 'rgba(0, 0, 0, 0)',
      stroke: '#FFFFFA',
      height: '14px',
      width: '14px',
      transition: [
        {
          transitionProperty: 'fill',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'stroke',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    hover: {
      backgroundColor: '#363A3D',
      transform: 'none',
      transition: [
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    clicked: {
      boxShadow: [
        {
          xOffset: '0',
          yOffset: '0',
          blurRadius: '0',
          spreadRadius: '0',
          color: '#CEE5F200',
          inset: false,
        },
      ],
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    checked: {
      boxShadow: [
        {
          xOffset: '1px',
          yOffset: '3px',
          blurRadius: '7px',
          spreadRadius: '0px',
          color: '#13111d',
          inset: true,
        },
      ],
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    disabled: {
      opacity: 0.75,
      backgroundColor: '#222324',
      cursor: 'not-allowed',
      boxShadow: [
        {
          xOffset: '0',
          yOffset: '0',
          blurRadius: '0',
          spreadRadius: '0',
          color: 'rgba(0, 0, 0, 0)',
        },
      ],
      transition: [
        {
          transitionProperty: 'opacity',
          transitionDuration: '.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
      iconStyles: {
        fill: 'rgba(0, 0, 0, 0)',
        stroke: '#536071',
        height: '20px',
        width: '20px',
        opacity: 0.75,
      },
    },
  },
  radioButton: {
    color: '#FFFFFA',
    boxShadow: [
      {
        xOffset: '0px',
        yOffset: '3px',
        blurRadius: '3px',
        spreadRadius: '0px',
        color: '#13111d',
      },
    ],
    backgroundColor: 'transparent',
    border: '2px solid #2F363E',
    size: '24px',
    borderRadius: '50%',
    padding: '0',
    transform: 'none',
    transition: [
      {
        transitionProperty: 'background-color',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      {
        transitionProperty: 'box-shadow',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
    ],
    label: {
      padding: '8px 0',
      margin: '0 0 0 16px',
    },
    hover: {
      backgroundColor: '#363A3D',
      transform: 'none',
      transition: [
        {
          transitionProperty: 'transform',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    clicked: {
      boxShadow: [
        {
          xOffset: '0',
          yOffset: '0',
          blurRadius: '0',
          spreadRadius: '0',
          color: '#CEE5F200',
          inset: false,
        },
      ],
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    checked: {
      boxShadow: [
        {
          xOffset: '1px',
          yOffset: '3px',
          blurRadius: '7px',
          spreadRadius: '0px',
          color: '#13111d',
          inset: true,
        },
      ],
      transition: [
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
    },
    disabled: {
      opacity: 0.75,
      backgroundColor: '#222324',
      cursor: 'not-allowed',
      boxShadow: [
        {
          xOffset: '0',
          yOffset: '0',
          blurRadius: '0',
          spreadRadius: '0',
          color: 'rgba(0, 0, 0, 0)',
        },
      ],
      transition: [
        {
          transitionProperty: 'opacity',
          transitionDuration: '.3s',
          transitionTimingFunction: 'ease-in',
        },
      ],
      iconStyles: {
        fill: 'rgba(0, 0, 0, 0)',
        stroke: '#536071',
        height: '20px',
        width: '20px',
        opacity: 0.75,
      },
    },
  },
  drawer: {
    handle: {
      cursorX: 'ew-resize',
      cursorY: 'ns-resize',
      backgroundColor: Color('#4F565E')
        .lighten(0.8)
        .alpha(0.3)
        .toString(),
      relativeLength: '30%',
      maxLength: '300px',
      minLength: '18px',
      thickness: '6px',
    },
  },
  listTree: {
    list: {
      dropdownIcon: {
        fill: '#536071',
        width: '24px',
      },
    },
    listItems: {
      borderWidth: '1px',
      minHeight: '30px',
      hover: {
        backgroundColor: '#262A2D',
        transition: [
          {
            transitionProperty: 'background-color',
            transitionDuration: '0.3s',
          },
        ],
      },
    },
  },
}

/* https://coolors.co/cee5f2-accbe1-7c98b3-637081-536b78 */
