import styled, { css } from 'styled-components'
import { m as motion } from 'framer-motion'
import { Theme } from '../../Theme/types'
import {
  StyledSelectContainerProps,
  StyledSelectTagsContainerProps,
  StyledSelectInputProps,
  StyledMultiselectTagProps,
  StyledDeselectionButtonProps,
  ImbueTagDeselectionButtonIconProps,
  ImbueDropdownIconProps,
  ImbueClearSelectionIconProps,
  SelectDropdownIconButtonProps,
  SelectClearSelectionIconButtonProps,
  StyledSelectOptionProps,
  StyledSelectOptionListProps,
} from './types'
import { ArrowDropDown } from '@styled-icons/remix-line/ArrowDropDown'
import { Close } from '@styled-icons/remix-line/Close'
import { styles as inputStyles } from '../Input/styled'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { determineColor } from '../../utility/Color/determineColor'

export const borderAnimationStyles = (
  p: StyledSelectContainerProps & { theme: Theme },
) => css`
  &:after {
    content: ' ';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    background-color: ${p.error
      ? p.theme.palette.danger.value
      : determineColor(p) || p.theme.palette.primary.value};
    height: 10px;
    z-index: ${p.zIndex !== undefined
      ? p.zIndex - 1
      : undefined};
    border-radius: 0 0 8px 8px;
    transition: width ease-in 0.2s, color ease-in 0.2s;
  }
`

const pseudoElementStyles = css`
  width: 100%;

  &:after {
    width: 100%;
    transition: width ease-out 0.3s;
  }
`

export const pseudoElementContainerStyles = (
  p: StyledSelectContainerProps & { theme: Theme },
) => css`
  position: relative;

  ${borderAnimationStyles(p)}

  ${p.isFocused ? pseudoElementStyles : undefined}
`

export const selectContainerStyles = (
  p: { theme: Theme } & StyledSelectContainerProps,
) => css`
  ${inputStyles(p)}

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: auto;

  ${(p.error || p.isFocused) &&
  `
    box-shadow: ${getCSSForBoxShadow(
      p.theme.boxShadow.pronouncedInset,
    )}
  `}
`

/* Contains the tags and the input as the final element */
export const tagsContainerStyles = (
  p: { theme: Theme } & StyledSelectTagsContainerProps,
) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  width: ${() => {
    if (p.isSearchable && p.inputValue) {
      /* Account for the 'X' icon and the dropdown arrow icon */
      return `calc(100% - (${p.dropdownIconWidth} + ${p.theme.select.dropdownIcon.rightOffset} + ${p.clearInputIconWidth}))`
    } else {
      /* Only account for the dropdown icon */
      return `
        calc(100% - (${p.dropdownIconWidth} + ${p.theme.select.dropdownIcon.rightOffset}))
      `
    }
  }};
`

export const multiselectTagStyles = (
  p: { theme: Theme } & StyledMultiselectTagProps,
) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${p.theme.select.multiselectTag.height};
  border-radius: ${p.theme.select.multiselectTag
    .borderRadius};
  margin: ${p.theme.select.multiselectTag.margin};
  padding: ${p.theme.select.multiselectTag.padding};
  color: ${(() => {
    if (p.deselectionDisabled)
      return p.theme.palette.disabled.contrast
    return p.theme.select.multiselectTag.color
  })()};
  background-color: ${() => {
    if (p.deselectionDisabled)
      return p.theme.palette.disabled.value
    return p.theme.select.multiselectTag.backgroundColor
  }};
`

export const tagDeselectionButtonStyles = (
  p: { theme: Theme } & StyledDeselectionButtonProps,
) => css`
  cursor: ${p.disabled ? 'not-allowed' : 'pointer'};
  outline: ${p.theme.select.multiselectTagDeselectionButton
    .outline};
  height: ${p.theme.select.multiselectTagDeselectionButton
    .height};
  margin: ${p.theme.select.multiselectTagDeselectionButton
    .margin};
  border-top: ${p.theme.select
    .multiselectTagDeselectionButton.borderTop};
  border-left: ${p.theme.select
    .multiselectTagDeselectionButton.borderLeft};
  border-right: ${p.theme.select
    .multiselectTagDeselectionButton.borderRight};
  border-bottom: ${p.theme.select
    .multiselectTagDeselectionButton.borderBottom};
  background-color: ${p.theme.select
    .multiselectTagDeselectionButton.backgroundColor};
`

export const imbueTagDeselectionButtonIconStyles = (
  p: { theme: Theme } & ImbueTagDeselectionButtonIconProps,
) => css`
  width: 12px;
  fill: ${p.theme.palette.background.value};
  cursor: ${p.disabled ? 'not-allowed' : 'pointer'};

  path {
    cursor: ${p.disabled ? 'not-allowed' : 'pointer'};
  }
`

const dropdownIconButtonStyles = (
  p: { theme: Theme } & SelectDropdownIconButtonProps,
) =>
  css`
    cursor: pointer;
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    position: absolute;
    width: auto;
    top: 8px;
    right: 8px;
    z-index: ${p.zIndex +
    1}; /* add 1 to the zIndex of the component, so it appears on top of the input */

    svg,
    path {
      cursor: pointer;
    }
  `

const clearSelectionIconButtonStyles = (
  p: { theme: Theme } & SelectClearSelectionIconButtonProps,
) => css`
  cursor: pointer;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  position: absolute;
  width: auto;
  top: 8px;
  right: 32px;
  z-index: ${p.zIndex +
  1}; /* add 1 to the zIndex of the component, so it appears on top of the input */

  svg,
  path {
    cursor: pointer;
  }
`

export const selectInputStyles = (
  p: { theme: Theme } & StyledSelectInputProps,
) => css`
  flex: 1;
  height: auto;
  min-height: ${p.theme.select.multiselectTag.height};
  min-width: 32px;
  border: 0;
  outline: none;
  background-color: transparent;
`

export const imbueDropdownIconStyles = (
  p: { theme: Theme } & ImbueDropdownIconProps,
) => css`
  width: 24px;
  transform: rotateZ(${p.isFocused ? '180deg' : '0'});
`

export const imbueSelectClearSelectionIconStyles = (
  p: { theme: Theme } & ImbueClearSelectionIconProps,
) => css`
  width: 20px;
  margin-top: 2px;
`

export const selectOptionListStyles = (
  p: { theme: Theme } & StyledSelectOptionListProps,
) => css`
  background-color: ${p.theme.palette.background.value};
  position: absolute;
  height: auto;
  width: 100%;
  overflow: hidden;

  /* Themeable position */
  top: calc(
    ${`${p.inputHeight}px + ${p.theme.select.optionList.topOffset}`}
  );
  left: 0;
  right: auto;
  bottom: auto;

  border-radius: ${p.theme.borderRadius};
  box-shadow: ${getCSSForBoxShadow(
    p.theme.boxShadow.pronounced,
  ) || 'none'};
`

export const selectOptionStyles = (
  p: { theme: Theme } & StyledSelectOptionProps,
) => css`
  ${p.selected &&
  `
    color: ${p.theme.palette.primary.contrast};
    background-color: ${p.theme.palette.primary.value};
  `}

  ${!p.disabled
    ? `
      cursor: pointer;

      &:hover {
        color: ${p.theme.select.optionListItem.hover.color};
        background-color: ${p.theme.select.optionListItem.hover.backgroundColor};
      }
  `
    : `
      cursor: not-allowed;
      color: ${p.theme.palette.disabled.value};
`}

  overflow: hidden;
  min-height: ${p.theme.select.optionListItem.minHeight};
  padding: ${p.theme.select.optionListItem.padding};
`

export const StyledPseudoElementContainer = styled.div<
  StyledSelectContainerProps & { theme: Theme }
>`
  ${p => pseudoElementContainerStyles(p)}
`

export const StyledSelectContainer = styled.div<
  StyledSelectContainerProps & { theme: Theme }
>`
  ${p => selectContainerStyles(p)}
`

export const StyledTagsContainer = styled.div<
  StyledSelectTagsContainerProps & { theme: Theme }
>`
  ${p => tagsContainerStyles(p)}
`

export const StyledSelectDropdownIconButton = styled.button<
  SelectDropdownIconButtonProps & { theme: Theme }
>`
  ${p => dropdownIconButtonStyles(p)}
`

export const StyledSelectClearSelectionIconButton = styled.button<
  SelectClearSelectionIconButtonProps & { theme: Theme }
>`
  ${p => clearSelectionIconButtonStyles(p)}
`

export const StyledMultiselectTag = styled.span<
  StyledMultiselectTagProps & { theme: Theme }
>`
  ${p => multiselectTagStyles(p)}
`

export const StyledTagDeselectionButton = styled.button`
  ${p => tagDeselectionButtonStyles(p)}
`

export const ImbueSelectTagDeselectionButtonIcon = styled(
  Close,
)<ImbueTagDeselectionButtonIconProps & { theme: Theme }>`
  ${p => imbueTagDeselectionButtonIconStyles(p)}
`

export const StyledSelectInput = styled.input<
  StyledSelectInputProps & { theme: Theme }
>`
  ${p => selectInputStyles(p)}
`

export const ImbueSelectDropdownIcon = styled(
  ArrowDropDown,
)<ImbueDropdownIconProps & { theme: Theme }>`
  ${p => imbueDropdownIconStyles(p)}
`

export const ImbueSelectClearSelectionIcon = styled(Close)<
  ImbueClearSelectionIconProps & { theme: Theme }
>`
  ${p => imbueSelectClearSelectionIconStyles(p)}
`

export const StyledSelectOptionList = styled(motion.ul)<
  StyledSelectOptionListProps & { theme: Theme }
>`
  ${p => selectOptionListStyles(p)}
`

export const StyledSelectOption = styled.li<
  StyledSelectOptionProps & { theme: Theme }
>`
  ${p => selectOptionStyles(p)}
`
