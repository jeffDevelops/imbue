export interface MultiselectTagTheme {
  color: string
  backgroundColor: string
  margin: string
  padding: string
  /** Also determines the height of the invisible input */
  height: string
  borderRadius: string
}

export interface MultiselectTagDeselectionButtonTheme {
  margin: string
  height: string
  outline: string
  backgroundColor: string
  borderTop: string
  borderLeft: string
  borderRight: string
  borderBottom: string
}

export interface DropdownIconTheme {
  /* How far the icon is offset from the right of the dropdown; CSS value string */
  rightOffset: string
}

export interface OptionListItemTheme {
  minHeight: string
  padding: string
  hover: {
    color: string
    backgroundColor: string
  }
}

export interface OptionListTheme {
  /** How offset from the select control the list will appear */
  topOffset: string
}

export interface SelectTheme {
  optionList: OptionListTheme
  optionListItem: OptionListItemTheme
  dropdownIcon: DropdownIconTheme
  multiselectTag: MultiselectTagTheme
  multiselectTagDeselectionButton: MultiselectTagDeselectionButtonTheme
}

export const selectThemeLight: SelectTheme = {
  optionList: {
    topOffset: '8px',
  },
  optionListItem: {
    minHeight: '32px',
    padding: '8px',
    hover: {
      color: '#fffffa',
      backgroundColor: '#2298F2',
    },
  },
  dropdownIcon: {
    rightOffset: '16px',
  },
  multiselectTag: {
    borderRadius: '4px',
    backgroundColor: '#229BF2',
    color: '#fffffa',
    padding: '0 0 0 8px',
    margin: '2px 4px 2px 0',
    height: '24px',
  },
  multiselectTagDeselectionButton: {
    height: '100%',
    margin: '0 0 0 8px',
    outline: 'none',
    backgroundColor: 'transparent',
    borderTop: '0',
    borderLeft: '1px solid #fffffa',
    borderRight: '0',
    borderBottom: '0',
  },
  // ...light theme props
}

export const selectThemeDark: SelectTheme = {
  optionList: {
    topOffset: '8px',
  },
  optionListItem: {
    minHeight: '32px',
    padding: '8px',
    hover: {
      color: '#222324',
      backgroundColor: '#2298F2',
    },
  },
  dropdownIcon: {
    rightOffset: '16px',
  },
  multiselectTag: {
    borderRadius: '4px',
    backgroundColor: '#229BF2',
    color: '#222324',
    padding: '0 0 0 8px',
    margin: '2px 4px 2px 0',
    height: '32px',
  },
  multiselectTagDeselectionButton: {
    height: '100%',
    margin: '0 0 0 8px',
    outline: 'none',
    backgroundColor: 'transparent',
    borderTop: '0',
    borderLeft: ' 1px solid #222324',
    borderRight: '0',
    borderBottom: '0',
  },
  // ...dark theme props
}
