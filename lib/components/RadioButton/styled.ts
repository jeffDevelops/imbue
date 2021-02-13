import styled, { css } from 'styled-components'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { getCSSForTransition } from '../../utility/Transition/getCSSForTransition'
import { determineColor } from '../../utility/Color/determineColor'
import { StyledRadioProps } from './types'
import { styles as labelStyles } from '../Label/styled'
import { Theme } from '../../Theme'

export const Input = styled.input.attrs({
  type: 'radio',
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

export const styles = (
  p: StyledRadioProps & { theme: Theme },
) => css`
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${getCSSForBoxShadow(
    p.disabled
      ? p.theme.radioButton.disabled.boxShadow
      : p.theme.radioButton.boxShadow,
  )};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: ${p => p.theme.radioButton.size};
  width: ${p => p.theme.radioButton.size};
  background-color: ${p =>
    p.theme.radioButton.backgroundColor};
  /* color: ${p => p.theme.radioButton.color}; */
  color: ${p => {
    const color = determineColor(p)
    if (color) return color
    return p.theme.radioButton.color
  }};
  font-size: 16px;
  text-align: center;
  border: ${
    p.borderless
      ? 'none'
      : (() => {
          const color = determineColor(p)
          if (color) return `2px solid ${color}`
          return p.theme.radioButton.border
        })()
  };
  border-radius: ${p => p.theme.radioButton.borderRadius};
  outline: none;
  transform: ${p => p.theme.radioButton.transform};
  transition: ${p =>
    getCSSForTransition(p.theme.radioButton.transition)};
  padding: ${p => p.theme.radioButton.padding};
  cursor: pointer;

  ${
    !p.disabled &&
    `
  &:hover,
  &:focus {
    transition: ${getCSSForTransition(
      p.theme.radioButton.hover.transition,
    )};
    transform: ${p.theme.radioButton.hover.transform};
  }

    &:hover:active,
    &:active {
      box-shadow: ${getCSSForBoxShadow(
        p.theme.radioButton.clicked.boxShadow,
      )};
      transition: ${getCSSForTransition(
        p.theme.radioButton.clicked.transition,
      )};
    }
  `
  }

  ${
    !p.disabled &&
    p.checked &&
    `
    transition: ${getCSSForTransition(
      p.theme.radioButton.checked.transition,
    )};
    box-shadow: ${getCSSForBoxShadow(
      p.theme.radioButton.checked.boxShadow,
    )};
  `
  }

  ${
    p.disabled &&
    `
    cursor: ${p.theme.radioButton.disabled.cursor};
    opacity: ${p.theme.radioButton.disabled.opacity};
    background-color: ${p.theme.radioButton.disabled.backgroundColor};
    transition: ${p.theme.radioButton.disabled.transition};
  `
  }
`

export const StyledRadioButton = styled.div<
  StyledRadioProps
>`
  ${p => styles(p)}
`

export const Label = styled.label<StyledRadioProps>`
  position: relative;
  padding: ${p => p.theme.radioButton.label.padding};
  display: flex;
  justify-content: flex-start;
  align-items: center;


  ${p =>
    !p.disabled &&
    `
    &:hover ${StyledRadioButton}, &:focus ${StyledRadioButton} {
      background-color: ${
        p.theme.radioButton.hover.backgroundColor
      };
      transition: ${getCSSForTransition(
        p.theme.radioButton.hover.transition,
      )};
    }
  `}

  &:hover:active
    ${StyledRadioButton},
    &:active
    ${StyledRadioButton} {
    box-shadow: ${p =>
      getCSSForBoxShadow(
        p.theme.radioButton.clicked.boxShadow,
      )};
    transition: ${p =>
      getCSSForTransition(
        p.theme.radioButton.clicked.transition,
      )};
    transform: ${p =>
      p.theme.radioButton.clicked.transform};
  }

  ${p =>
    !p.disabled &&
    `
      /** Display the colored indicator on hover of the label */
      &:hover .relative-context::after {
        width: ${p.theme.radioButton.size};
        transition: width ease-out 0.3s;
      }
    `}

  ${p =>
    !p.disabled &&
    p.checked &&
    `
    .relative-context::after {
      width: ${p.theme.radioButton.size};
      transition: width ease-out 0.3s;
    }
  `}

  span {
    ${labelStyles}
    margin: ${p => p.theme.radioButton.label.margin};
    display: inline-block;
  }
`

export const RelativeContext = styled.div.attrs<
  StyledRadioProps
>({
  className:
    'relative-context' /* assign classname so that label can select on hover */,
})<StyledRadioProps>`
  width: ${p => p.theme.radioButton.size};
  height: ${p => p.theme.radioButton.size};
`
