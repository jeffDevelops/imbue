import { Theme } from './types'
// import Color from 'color'

export const defaultDarkTheme: Theme = {
  fontFaces: [
    {
      fontFamily: 'system',
      src: [
        { local: '-apple-system' },
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
  ],
  borderRadius: '8px',
  boxShadow: {
    default: [
      {
        xOffset: '0px',
        yOffset: '2px',
        blurRadius: '6px',
        spreadRadius: '0',
        color: '#161421',
      },
    ],
    defaultInset: [
      {
        xOffset: '1px',
        yOffset: '2px',
        blurRadius: '6px',
        spreadRadius: '0',
        color: '#161421',
        inset: true,
      },
    ],
    pronounced: [
      {
        xOffset: '0px',
        yOffset: '3px',
        blurRadius: '3px',
        spreadRadius: '0px',
        color: '#161421',
      },
    ],
    pronouncedInset: [
      {
        xOffset: '1px',
        yOffset: '3px',
        blurRadius: '7px',
        spreadRadius: '0px',
        color: '#161421',
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
      value: '#62BFFF',
      contrast: '#22-2324',
    },
    tertiary: {
      value: '#536B78',
      contrast: '#222324',
    },
    quaternary: {
      value: '#7C98B3',
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

    background: '#222324',
    panelBackground: '#4F565E',
  },
  h1: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '40px',
    fontStyle: 'normal',
    kerning: '2.75px',
    fontWeight: '600',
    marginBottom: '32px',
  },
  h2: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '36px',
    fontStyle: 'normal',
    kerning: '2.5px',
    fontWeight: '600',
    marginBottom: '28px',
  },
  h3: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '30px',
    fontStyle: 'normal',
    kerning: '3px',
    fontWeight: '800',
    marginBottom: '24px',
  },
  h4: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '28px',
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
    color: '#A3B0C1',
    fontFamily: 'system, sans-serif',
    fontSize: '18px',
    fontStyle: 'normal',
    kerning: '1.5px',
    fontWeight: '600',
    marginBottom: '12px',
  },
  body1: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    kerning: '1px',
    fontWeight: '300',
    marginBottom: '24px',
  },
  body2: {
    color: '#A3B0C1',
    fontFamily: 'system, sans-serif',
    fontSize: '12px',
    fontStyle: 'normal',
    kerning: '1px',
    fontWeight: '300',
    marginBottom: '16px',
  },
  label: {
    color: '#F6FAFD',
    fontFamily: 'system, sans-serif',
    fontSize: '14px',
    kerning: '1px',
    fontWeight: '600',
  },
  textInput: {
    placeholderColor: '#AAC1D0',
    color: '#637081',
    border: '1px solid #DCE3FD',
    fontFamily: 'system, sans-serif',
    fontSize: '16px',
    kerning: '1.25px',
    fontWeight: '600',
  },
  panel: {
    backgroundColor: '#262A2D',
    foregroundColor: '#F6FAFD',
    outlineColor: '#2F363E',
    padding: '32px 40px',
  },
  button: {
    height: '40px',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: 'system, sans-serif',
    fontSize: '16px',
    kerning: '3px',
    fontStyle: 'normal',
    fontWeight: '800',
    padding: '0px 24px',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
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
    transform: 'scale(1)',
    transition: [
      {
        transitionProperty: 'box-shadow',
        transitionDuration: '0.3s',
      },
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
      height: '40px',
      width: 'auto',
      textTransform: 'uppercase',
      fontFamily: 'system, sans-serif',
      fontSize: '16px',
      kerning: '3px',
      fontStyle: 'normal',
      fontWeight: '800',
      padding: '0px 24px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      transform: 'scale(1.01)',
      boxShadow: [
        {
          xOffset: '0px',
          yOffset: '3px',
          blurRadius: '3px',
          spreadRadius: '0px',
          color: '#161421',
        },
      ],
      transition: [
        {
          transitionProperty: 'box-shadow',
          transitionDuration: '0.3s',
        },
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
    clicked: {
      height: '40px',
      width: 'auto',
      textTransform: 'uppercase',
      fontFamily: 'system, sans-serif',
      fontSize: '16px',
      kerning: '3px',
      fontStyle: 'normal',
      fontWeight: '800',
      padding: '0px 24px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
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
          transitionProperty: 'box-shadow',
          transitionDuration: '0.05s',
        },
        {
          transitionProperty: 'transform',
          transitionDuration: '0.05s',
        },
        {
          transitionProperty: 'background-color',
          transitionDuration: '0.05s',
        },
      ],
    },
    disabled: {
      cursor: 'not-allowed',
      height: '40px',
      width: 'auto',
      textTransform: 'uppercase',
      fontFamily: 'system, sans-serif',
      fontSize: '16px',
      kerning: '3px',
      fontStyle: 'normal',
      fontWeight: '800',
      padding: '0px 24px',
      border: 'none',
      outline: 'none',
    },
  },
  ghostButton: {
    height: '40px',
    width: 'auto',
    textTransform: 'uppercase',
    fontFamily: 'system, sans-serif',
    fontSize: '16px',
    kerning: '3px',
    fontStyle: 'normal',
    fontWeight: '800',
    padding: '0px 24px',
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
  },
  checkbox: {
    boxShadow: [
      {
        xOffset: '0px',
        yOffset: '3px',
        blurRadius: '3px',
        spreadRadius: '0px',
        color: '#161421',
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
          color: '#161421',
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
        color: '#161421',
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
          color: '#161421',
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
  // drawer: {
  //   handle: {
  //     cursorX: 'ew-resize',
  //     cursorY: 'ns-resize',
  //     backgroundColor: Color(globals.palette.panelBackground)
  //       .darken(0.5)
  //       .alpha(0.3)
  //       .toString(),
  //     relativeLength: '30%',
  //     maxLength: '300px',
  //     minLength: '18px',
  //     thickness: '6px',
  //   },
  // },
}

/* https://coolors.co/cee5f2-accbe1-7c98b3-637081-536b78 */
