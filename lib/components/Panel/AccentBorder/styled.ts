import styled, { css } from 'styled-components'
import { StyledPanelAccentBorderProps } from './types'
import { Theme } from '../../../Theme'
import { determineColor } from '../../../utility/Color/determineColor'

export const styles = (
  p: StyledPanelAccentBorderProps & { theme: Theme },
) => css`
  position: absolute;
  ${p.placement === 'top' && 'top: 0; left: 0;'}
  ${p.placement === 'left' && 'left: 0; top: 0;'}
  ${p.placement === 'right' && 'right: 0; top: 0;'}
  ${p.placement === 'bottom' && 'bottom: 0; left: 0;'}

  height: ${
    p.placement === 'top' || p.placement === 'bottom'
      ? p.theme.borderRadius
      : '100%'
  };
  width: ${
    p.placement === 'top' || p.placement === 'bottom'
      ? '100%'
      : p.theme.borderRadius
  };
  background-color: ${determineColor(p)};
  transition: background-color .3s;
`

export const StyledPanelAccentBorder = styled.div<
  StyledPanelAccentBorderProps
>`
  ${p => styles(p)}
`
