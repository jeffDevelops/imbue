import styled, { css } from 'styled-components'
import { getCSSForBoxShadow } from '../utility/BoxShadow/getCSSForBoxShadow'
import { getCSSForTransition } from '../utility/Transition/getCSSForTransition'
import { determineColor } from '../utility/Color/determineColor'
import { StyledCheckboxProps } from './types'
import { styles as labelStyles } from '../Label/styled'
import { Theme } from '../Theme/types'
import {
  HierarchicalColorOptions,
  SemanticColorOptions,
} from '../utility/Color/types'

export const borderAnimationStyles = <
  Props extends {
    theme: Theme
    hierarchy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  }
>(
  p: Props,
) => css`
  &:after {
    content: ' ';
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 0;
    background-color: ${determineColor(p)};
    height: 5px;
    z-index: 0;
    border-radius: ${`0 0 ${p.theme.checkbox.borderRadius} ${p.theme.checkbox.borderRadius}`};
    transition: width ease-in 0.2s;
  }
`

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  /** Hide the Input */
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CustomCheckbox = styled.div<
  StyledCheckboxProps
>`
  position: relative;

  box-shadow: ${p =>
    getCSSForBoxShadow(
      p.disabled
        ? p.theme.checkbox.disabled.boxShadow
        : p.theme.checkbox.boxShadow,
    )};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${p => p.theme.checkbox.size};
  width: ${p => p.theme.checkbox.size};
  background-color: ${p =>
    p.theme.checkbox.backgroundColor};
  border: ${p =>
    p.borderless ? 'none' : p.theme.checkbox.border};
  border-radius: ${p => p.theme.checkbox.borderRadius};
  outline: none;
  transform: ${p => p.theme.checkbox.transform};
  transition: ${p =>
    getCSSForTransition(p.theme.checkbox.transition)};
  cursor: pointer;

  ${p => borderAnimationStyles(p)}

  /** Icon Styles - note: these are applied to both the checkmark and indeterminate "-" symbol */
  svg {
    height: ${p =>
      p.disabled
        ? p.theme.checkbox.disabled.iconStyles
        : p.theme.checkbox.iconStyles.height};
    width: ${p =>
      p.disabled
        ? p.theme.checkbox.disabled.iconStyles
        : p.theme.checkbox.iconStyles.width};
    stroke: ${p =>
      p.disabled
        ? p.theme.checkbox.disabled.iconStyles
        : p.theme.checkbox.iconStyles.stroke};
    fill: ${p =>
      p.disabled
        ? p.theme.checkbox.disabled.iconStyles
        : p.theme.checkbox.iconStyles.fill};
    transition: ${p =>
      getCSSForTransition(
        p.theme.checkbox.iconStyles.transition,
      )}
  }

  ${p =>
    !p.disabled &&
    `
  &:hover,
  &:focus {
    transition: ${getCSSForTransition(
      p.theme.checkbox.hover.transition,
    )};
    transform: ${p.theme.checkbox.hover.transform};
  }

    &:hover:active,
    &:active {
      box-shadow: ${getCSSForBoxShadow(
        p.theme.checkbox.clicked.boxShadow,
      )};
      transition: ${getCSSForTransition(
        p.theme.checkbox.clicked.transition,
      )};
      transform: ${p.theme.checkbox.clicked.transform};
    }
  `}

  ${p =>
    !p.disabled &&
    p.checked &&
    `
    transition: ${getCSSForTransition(
      p.theme.checkbox.checked.transition,
    )};
    background-color: ${
      p.theme.checkbox.checked.backgroundColor
    };
    box-shadow: ${getCSSForBoxShadow(
      p.theme.checkbox.checked.boxShadow,
    )};
  `}

  ${p =>
    p.disabled &&
    `
    cursor: ${p.theme.checkbox.disabled.cursor};
    opacity: ${p.theme.checkbox.disabled.opacity};
    background-color: ${p.theme.checkbox.disabled.color};
    transition: ${getCSSForTransition(
      p.theme.checkbox.disabled.transition,
    )};
  `}
`

export const Label = styled.label<StyledCheckboxProps>`
  position: relative;
  padding: ${p => p.theme.checkbox.label.padding};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${p =>
    !p.disabled &&
    `
    &:hover ${CustomCheckbox}, &:focus ${CustomCheckbox} {
      background-color: ${
        p.theme.checkbox.hover.backgroundColor
      };
      transition: ${getCSSForTransition(
        p.theme.checkbox.hover.transition,
      )};
    }
  `}

  &:hover:active
    ${CustomCheckbox},
    &:active
    ${CustomCheckbox} {
    box-shadow: ${p =>
      getCSSForBoxShadow(
        p.theme.checkbox.clicked.boxShadow,
      )};
    transition: ${p =>
      getCSSForTransition(
        p.theme.checkbox.clicked.transition,
      )};
    transform: ${p => p.theme.checkbox.clicked.transform};
  }

  ${p =>
    !p.disabled &&
    `
      /** Display the colored indicator on hover of the label */
      &:hover .relative-context::after {
        width: ${p.theme.checkbox.size};
        transition: width ease-out 0.3s;
      }
    `}

  ${p =>
    !p.disabled &&
    p.checked &&
    `
    .relative-context::after {
      width: ${p.theme.checkbox.size};
      transition: width ease-out 0.3s;
    }
  `}

  span {
    ${labelStyles}
    margin: ${p => p.theme.checkbox.label.margin};
    display: inline-block;
  }
`

export const RelativeContext = styled.div.attrs<
  StyledCheckboxProps
>({
  className:
    'relative-context' /* assign classname so that label can select on hover */,
})<StyledCheckboxProps>`
  width: ${p => p.theme.checkbox.size};
  height: ${p => p.theme.checkbox.size};

  ${p => !p.disabled && borderAnimationStyles(p)}
`
