import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { StyledGhostButtonProps } from './types'
import {
  determineColor,
  determineContrastColor,
} from '../../utility/Color/determineColor'
import { getCSSForTransition } from '../../utility/Transition/getCSSForTransition'

export const styles = (
  p: StyledGhostButtonProps & { theme: Theme },
) => css`
  /* Set by consuming applications */
  width: ${p.width ? p.width : p.theme.ghostButton.width};

  /* Set by the theme exclusively */
  cursor: ${p.disabled
    ? p.theme.ghostButton.disabled.cursor
    : 'pointer'};
  border-radius: ${p.theme.borderRadius};
  height: ${p.theme.ghostButton.height};
  text-transform: ${p.theme.ghostButton.textTransform};
  letter-spacing: ${p.theme.ghostButton.kerning};
  font-weight: ${p.theme.ghostButton.fontWeight};
  font-family: ${p.theme.ghostButton.fontFamily};
  padding: ${p.theme.ghostButton.padding};
  outline: ${p.theme.ghostButton.outline};
  background-color: transparent;
  border-width: ${p.theme.ghostButton.borderWidth};
  border-style: ${p.theme.ghostButton.borderStyle};
  border-color: ${p.disabled
    ? p.theme.palette.disabled.value
    : determineColor(p)};
  color: ${p.disabled
    ? p.theme.palette.disabled.value
    : determineColor(p)};
  transition: ${p.theme.ghostButton.transition
    ? getCSSForTransition(p.theme.ghostButton.transition)
    : 'none'};

  ${!p.disabled &&
  `
      /* Hover or mouse/keyboard focus */
      &:hover,
      &:focus {
        background-color: ${determineColor(p)};
        color: ${determineContrastColor(p)};
        transition: ${getCSSForTransition(
          p.theme.ghostButton.hovered.transition,
        )};
        transform: ${
          p.theme.ghostButton.hovered.transform
            ? `${p.theme.ghostButton.hovered.transform} translate3d( 0, 0, 0) perspective(1px)`
            : 'none'
        };
      }

      /* Mousedown / spacebar keydown */
      &:hover:active, &:active {
        transform: ${
          p.theme.ghostButton.clicked.transform
            ? `${p.theme.ghostButton.clicked.transform} translate3d( 0, 0, 0) perspective(1px)`
            : 'none'
        };
        transition: ${getCSSForTransition(
          p.theme.ghostButton.clicked.transition,
        )};
      }
    `}
`

export const StyledGhostButton = styled.button<
  StyledGhostButtonProps
>`
  ${p => styles(p)}
`
