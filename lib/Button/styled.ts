import styled, { css } from 'styled-components'
import { StyledButtonProps } from './types'
import { getCSSForBoxShadow } from '../utility/BoxShadow/getCSSForBoxShadow'
import { getCSSForTransition } from '../utility/Transition/getCSSForTransition'
import { Theme } from '../Theme/types'

export const determineButtonBGColor = (
  p: StyledButtonProps & { theme: Theme },
) => {
  if ('hierarchy' in p && 'meaning' in p) {
    throw new Error(
      'Button cannot be defined with both hierarchy and meaning.',
    )
  }

  if ('hierarchy' in p) {
    switch (p.hierarchy) {
      case 'primary':
        return p.theme.palette.primary.value
      case 'secondary':
        return p.theme.palette.secondary.value
      case 'tertiary':
        return p.theme.palette.tertiary.value
      case 'quaternary':
        return p.theme.palette.quaternary.value
    }
  }

  if ('meaning' in p) {
    switch (p.meaning) {
      case 'success':
        return p.theme.palette.success.value
      case 'warning':
        return p.theme.palette.warning.value
      case 'danger':
        return p.theme.palette.danger.value
    }
  }
}

export const determineButtonForegroundColor = (
  p: StyledButtonProps & { theme: Theme },
) => {
  if ('hierarchy' in p && 'meaning' in p) {
    throw new Error(
      'Imbue Error: Button cannot be defined with both hierarchy and meaning.',
    )
  }

  if ('hierarchy' in p) {
    switch (p.hierarchy) {
      case 'primary':
        return p.theme.palette.primary.contrast
      case 'secondary':
        return p.theme.palette.secondary.contrast
      case 'tertiary':
        return p.theme.palette.tertiary.contrast
      case 'quaternary':
        return p.theme.palette.quaternary.contrast
    }
  }

  if ('meaning' in p) {
    switch (p.meaning) {
      case 'success':
        return p.theme.palette.success.contrast
      case 'warning':
        return p.theme.palette.warning.contrast
      case 'danger':
        return p.theme.palette.danger.contrast
    }
  }
}

export const styles = (
  p: StyledButtonProps & { theme: Theme },
) => css`
  /* Set by consuming applications */
  width: ${p.width ? p.width : p.theme.button.width};

  /* Set by the theme exclusively */
  border: ${p => p.theme.button.border};
  border-radius: ${p => p.theme.borderRadius};
  height: ${p => p.theme.button.height};
  text-transform: ${p => p.theme.button.textTransform};
  letter-spacing: ${p => p.theme.button.kerning};
  font-weight: ${p => p.theme.button.fontWeight};
  font-family: ${p => p.theme.button.fontFamily};

  /* Transition optimization */
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;
  transform-style: preserve-3d;
  will-change: transform;

  text-align: center;
  padding: ${p => p.theme.button.padding};
  outline: ${p => p.theme.button.outline};
  transition: ${p =>
    getCSSForTransition(p.theme.button.transition)};
  box-shadow: ${p =>
    getCSSForBoxShadow(p.theme.button.boxShadow)};
  background-color: ${(
    p: StyledButtonProps & { theme: Theme },
  ) =>
    p.disabled
      ? p.theme.palette.disabled.value
      : determineButtonBGColor(p)};
  cursor: ${p =>
    p.disabled
      ? p.theme.button.disabled.cursor
      : p.theme.button.cursor};

  color: ${(p: StyledButtonProps & { theme: Theme }) =>
    p.disabled
      ? p.theme.palette.disabled.contrast
      : determineButtonForegroundColor(p)};

  ${p =>
    !p.disabled &&
    `
      /* Hover or mouse/keyboard focus */
      &:hover,
      &:focus {
        box-shadow: ${getCSSForBoxShadow(
          p.theme.button.hovered.boxShadow,
        )};
        transition: ${getCSSForTransition(
          p.theme.button.hovered.transition,
        )};
        transform: ${
          p.theme.button.hovered.transform
            ? `${p.theme.button.hovered.transform} translate3d( 0, 0, 0) perspective(1px)`
            : 'none'
        };
      }

      /* Mousedown / spacebar keydown */
      &:hover:active, &:active {
        box-shadow: ${getCSSForBoxShadow(
          p.theme.button.clicked.boxShadow,
        )};
        transform: ${
          p.theme.button.clicked.transform
            ? `${p.theme.button.clicked.transform} translate3d( 0, 0, 0) perspective(1px)`
            : 'none'
        };
        transition: ${getCSSForTransition(
          p.theme.button.clicked.transition,
        )};
      }
    `}
`

export const StyledButton = styled.button<
  StyledButtonProps
>`
  ${p => styles(p)}
`
