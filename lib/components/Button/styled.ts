import styled, { css } from 'styled-components'
import { StyledButtonProps } from './types'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { getCSSForTransition } from '../../utility/Transition/getCSSForTransition'
import { Theme } from '../../Theme'
import {
  determineColor,
  determineContrastColor,
} from '../../utility/Color/determineColor'

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
      : determineColor(p)};
  cursor: ${p.disabled
    ? p.theme.button.disabled.cursor
    : p.theme.button.cursor};

  color: ${(p: StyledButtonProps & { theme: Theme }) =>
    p.disabled
      ? p.theme.palette.disabled.contrast
      : determineContrastColor(p)};

  ${!p.disabled &&
  `
      /* Hover or mouse/keyboard focus */
      &:hover,
      &:focus {
        box-shadow: ${getCSSForBoxShadow(
          p.theme.button.hovered.boxShadow,
        )};
        transition: ${
          p.theme.button.hovered.transition
            ? getCSSForTransition(
                p.theme.button.hovered.transition,
              )
            : 'none'
        };
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
        transition: ${
          p.theme.button.hovered.transition
            ? getCSSForTransition(
                p.theme.button.hovered.transition,
              )
            : 'none'
        };
      }
    `}
`

export const StyledButton = styled.button<
  StyledButtonProps
>`
  ${p => styles(p)}
`
