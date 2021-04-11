import {
  InputHTMLAttributes,
  HTMLAttributes,
  LiHTMLAttributes,
  ReactText,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'
import { OptionalColor } from '../../utility/Color/types'

/**
 * Component Props
 *
 * These interfaces define the way the consuming parents
 * interface with the component.
 *
 */

export interface SelectContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  /** The z-index of the entire select component; default 1 */
  zIndex?: number
}

export interface SelectTagsContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  /* Whether interacting with the tags (deselection) is disabled */
  disabled?: boolean
}

export interface SelectDeselectionButtonProps
  extends HTMLAttributes<HTMLButtonElement> {
  /** Custom component to render in place of Imbue's default 'X' icon; the default is used if omitted */
  CustomTagDeselectionIcon?: ForwardRefRenderFunction<
    HTMLElement
  >
}

export interface SelectDropdownIconButtonProps {
  /** zIndex as derived from props of the Select component proper */
  zIndex: number

  /** Custom component to render in place of Imbue's default dropdown icon; the default is used if omitted */
  CustomDropdownIcon?: ForwardRefRenderFunction<HTMLElement>
}

export interface SelectClearSelectionIconButtonProps {
  /** zIndex as derived from props of the Select component proper */
  zIndex: number

  /** Custom component to render in place of Imbue's default clear selection icon; the default is used if omitted */
  CustomClearSelectionIcon?: ForwardRefRenderFunction<
    HTMLElement
  >
}

export interface SelectInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  /** Whether the input is disabled; default false */
  disabled?: boolean
}

/** Allow the library consumer to either pass their own JSX for the empty state, or optionally allow them to pass their own empty state text */
export type SelectOptionListProps = (
  | {
      EmptyState?: ReactNode
    }
  | {
      emptyStateText?: ReactText
    }
) &
  (
    | {
        NoMoreOptionsState?: ReactNode
      }
    | {
        noMoreOptionsStateText?: ReactText
      }
  ) &
  (
    | {
        LoadingState?: ReactNode
      }
    | {
        loadingStateText?: ReactText
      }
  ) &
  (
    | {
        NoOptionMatchesSearchtermState?: ReactNode
      }
    | {
        noOptionMatchesSearchtermStateText?: ReactText
      }
  ) &
  HTMLAttributes<HTMLElement>

export interface SelectOptionBase {
  /** The human-readable label for each of the select's options */
  label: ReactText

  /** The unique identifier for each of the select's options, emitted in onChange (in an array, if isMulti, and as a standalone value otherwise) */
  uniqueId: ReactText

  /** Whether the option is selectable */
  disabled?: boolean
}

export interface MultiselectOptions {
  /** Whether the multiselect option is selectable at all */
  notSelectable?: boolean

  /** Whether the multiselect option is currently selectable; default false */
  selectionDisabled?: boolean

  /** Whether the multiselect option is deselectable at all */
  notDeselectable?: boolean

  /** Whether the multiselect option is currently deselectable; default false */
  deselectionDisabled?: boolean
}

export interface SelectOption extends SelectOptionBase {
  multiselectOptions?: MultiselectOptions
}

export interface SelectOptionProps
  extends LiHTMLAttributes<HTMLLIElement> {
  /** Whether the option has been selected (not applicable when the Select is a multiselect, in which case the selected options are hidden) */
  selected?: boolean
}

export type SingleSelectOnChange = (
  selection: SelectOption | null,
) => void
export type MultiselectOnChange = (
  selections: SelectOption[],
) => void

/**
 * Global component props
 *
 * Highest-level summary of the way consuming parents interface with the
 * component.
 */
export type SelectProps = OptionalColor & {
  /** Intrinsics */
  className: string
  id: string
  disabled: boolean

  /** The selectable options */
  options: SelectOption[]

  /** Whether the selectable options are asynchronously loading */
  optionsAreLoading?: boolean

  /** Whether the select is searchable; default false */
  isSearchable?: boolean

  /** The Select component's label */
  label?: ReactText

  /** Whether the component is in an error state; a truthy, non-empty string representing the error message triggers the error state; default undefined */
  error?: string

  /** The z-index of the entire component; default 1 */
  zIndex?: number

  /** Props passed to the outermost container */
  SelectContainerProps?: SelectContainerProps

  /** Props passed to the dropdown icon button */
  SelectDropdownIconButtonProps?: SelectDropdownIconButtonProps

  /** Props passed to the clear selection icon button */
  SelectClearSelectionIconButtonProps?: SelectClearSelectionIconButtonProps

  /** Props passed to the second-to-outermost container which contains the tags and input */
  SelectTagsContainerProps?: SelectTagsContainerProps

  /** Props passed to the deselect (delete tag) button inside each tag, if deletable */
  SelectDeselectionButtonProps?: SelectDeselectionButtonProps

  /** Props passed to the clickable, sometimes searchable input (dropdown) component */
  SelectInputProps?: SelectInputProps

  /** Props passed to the list of options (HTMLULElement) */
  SelectOptionListProps?: SelectOptionListProps

  /** Props passed to the SelectOptions */
  SelectOptionProps?: SelectOptionProps
} & (
    | {
        /** Whether the select has the capability to select multiple options; default false */
        multiselect: MultiselectOptions | true
        onChange: MultiselectOnChange
        defaultSelections?: SelectOption[]
      }
    | {
        /** Whether the select has the capability to select multiple options; default false */
        multiselect: false | undefined
        onChange: SingleSelectOnChange
        defaultSelection?: SelectOption
      }
  )

/**
 * styled-component Props
 *
 * Props required for the styled-components to render correctly.
 * These interfaces' values are derived from component props and state.
 *
 */
export interface StyledSelectContainerProps
  extends SelectContainerProps {
  /** Whether the component is focused */
  isFocused: boolean

  /** Whether the component is in an error state; default empty string (falsy) */
  error: string
}

export interface StyledSelectTagsContainerProps
  extends SelectTagsContainerProps {
  /** Whether the select input has the capability to display multiple selected option tags; default false */
  multiselect: boolean | MultiselectOptions

  /** Whether the select is searchable */
  isSearchable: boolean

  /** The width of the dropdown icon's container, measured via ref at runtime */
  dropdownIconWidth: string // CSS pixel value

  /** The width of the input's clear button, measured via ref at runtime */
  clearInputIconWidth: string // CSS pixel value

  /* The value of the text input within the container - used to derive width of the container, based on whether the searchterm clear button is displayed */
  inputValue: string
}

export interface StyledMultiselectTagProps
  extends MultiselectOptions {
  deselectionDisabled: boolean
}

export interface StyledDeselectionButtonProps
  extends DeselectionButtonProps {
  /** Whether tag deselection is disabled */
  disabled?: boolean
}

export interface StyledSelectInputProps
  extends SelectInputProps {
  /** Whether the select has the capability to select multiple options; default false */
  multiselect?: boolean | MultiselectOptions

  /** Whether the select is searchable */
  isSearchable: boolean
}

/** The out-of-the-box Imbue deselection button icon (the icon is customizeable via props)  */
export interface ImbueTagDeselectionButtonIconProps {
  /** Whether deletion of the current tag is disabled */
  disabled: boolean
}

/** The out-of-the-box Imbue dropdown icon (the icon is customizeable via props)  */
export interface ImbueDropdownIconProps {
  /** z-index of the entire component (passed from SelectProps) */
  zIndex: number

  /** Derived from component state: whether the input is focused */
  isFocused: boolean
}

/** The out-of-the-box Imbue "clear selection" icon (the icon is customizeable via props)  */
export interface ImbueClearSelectionIconProps {
  /** z-index of the entire component (passed from SelectProps) */
  zIndex: number
}

export type StyledSelectOptionListProps = SelectOptionListProps & {
  /**
   * The height (in pixels) of the always-visible part of the component (sans the
   * options list), so that the option list clears the always-visible part of the
   * input.
   */
  inputHeight: number
}

export interface StyledSelectOptionProps
  extends SelectOptionProps {
  multiselect?: boolean | MultiselectOptions

  /** Whether the select option is selectable */
  disabled?: boolean
}
