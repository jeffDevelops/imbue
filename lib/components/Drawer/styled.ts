import styled, { css } from 'styled-components'
import { Theme } from '../../Theme'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { Position } from '../../utility/Position/types'
import {
  StyledDrawerProps,
  DrawerState,
  DrawerContentProps,
} from './types'
import { motion } from 'framer-motion'

export const drawerStyles = (
  p: StyledDrawerProps & DrawerState & { theme: Theme },
) => css`
 position: ${p.position};
  z-index: ${p.zIndex};
  margin: auto;

  ${
    p.origin === 'top' &&
    `top: 0; left: 0; right: 0; bottom: auto;`
  }
  ${
    p.origin === 'left' &&
    `left: 0; top: 0; bottom: 0; right: auto;`
  }
  ${
    p.origin === 'right' &&
    `right: 0; top: 0; bottom: 0; left: auto;`
  }
  ${
    p.origin === 'bottom' &&
    `bottom: 0; left: 0; right: 0; top: auto;`
  }

  box-shadow: ${getCSSForBoxShadow(
    p.theme.boxShadow.default,
  )};
  border-radius: ${p.theme.borderRadius};

  min-height: ${
    // If the orientation is horizontal, the min-height is the minOpenExtent
    p.origin === 'top' || p.origin === 'bottom'
      ? `${p.minOpenExtent}px` || '0'
      : '0'
  };

  max-height: ${
    // If the orientation is horizontal, the max-height is the maxOpenExtent
    p.origin === 'top' || p.origin === 'bottom'
      ? `${
          p.maxOpenExtent === 'fullLength'
            ? '100%'
            : `${p.maxOpenExtent}px`
        }` || 'none'
      : 'none'
  };

  min-width: ${
    // If the orientation is vertical, the min-width is the minOpenExtent
    p.origin === 'left' || p.origin === 'right'
      ? `${p.minOpenExtent}px` || '0'
      : '0'
  };

  max-width: ${
    // If the orientation is vertical, the max-width is the maxOpenExtent
    p.origin === 'left' || p.origin === 'right'
      ? `${
          p.maxOpenExtent === 'fullLength'
            ? '100%'
            : `${p.maxOpenExtent}px`
        }` || 'none'
      : 'none'
  };

  background-color: ${p => p.theme.palette.panelBackground};
`

export const StyledDrawer = styled(motion.section).attrs<
  StyledDrawerProps & DrawerState
>(p => ({
  /**
   *  styled-components warns when many new CSS classes are generated on account of changing
   *  styles; many MouseEvents trigger changes in height/width, and so styles are placed here
   */
  style: {
    // The height is stateful if horizontal orientation, otherwise it's the original length
    height:
      p.origin === 'top' || p.origin === 'bottom'
        ? `${p.openExtent}px`
        : `${p.length}`,
    // The width is stateful if vertical orientation, otherwise it's the original length
    width:
      p.origin === 'left' || p.origin === 'right'
        ? `${p.openExtent}px`
        : `${p.length}`,
  },
}))<StyledDrawerProps & DrawerState>`
  ${p => drawerStyles(p)}
`

export const Content = styled.section<DrawerContentProps>`
  height: 100%;
  width: calc(100% - 24px);
  overflow-y: ${p => p.overflowY};
  overflow-x: ${p => p.overflowX};

  /* Allocate space for the handle */
  margin-top: ${p =>
    p.origin === 'bottom' ? '24px' : '0'};
  margin-left: ${p =>
    p.origin === 'right' ? '24px' : '0'};
  margin-right: ${p =>
    p.origin === 'left' ? '24px' : '0'};
  margin-bottom: ${p =>
    p.origin === 'top' ? '24px' : '0'};
`

const handleStyles = (props: { theme: Theme }) => css`
  position: absolute;
  margin: auto; /* Positioning is calculated based on consumer-specified origin; this centers the handle */
  border-radius: 8px;
  background-color: ${p =>
    p.theme.drawer.handle.backgroundColor};
`

interface HandleProps {
  origin: Position
}

export const HorizontalHandle = styled.div<
  HandleProps & DrawerState
>`
  ${p => handleStyles(p)}
  top: ${p =>
    p.origin === 'bottom'
      ? `${
          /* Move the handle just to the edge of the container if the user slides it completely away */
          p.openExtent <= 24 ? '-16px' : '8px'
        }`
      : 'auto'};
  bottom: ${p =>
    p.origin === 'top'
      ? `${
          /* Move the handle just to the edge of the container if the user slides it completely away */
          p.openExtent <= 24 ? '-16px' : '8px'
        }`
      : 'auto'};
  left: 0;
  right: 0;
  transition: top 0.3s ease-in, bottom 0.3s ease-in;

  /* TODO: use theme */
  max-width: 300px;
  width: 30%;
  height: 6px;

  cursor: ${p => p.theme.drawer.handle.cursorY};

  & > ${Content} {
    overflow: hidden;
  }
`

export const VerticalHandle = styled.div<
  HandleProps & DrawerState
>`
  ${p => handleStyles(p)}
  left: ${p =>
    p.origin === 'right'
      ? `${
          /* Move the handle just to the edge of the container if the user slides it completely away */
          p.openExtent <= 24 ? '-16px' : '8px'
        }`
      : 'auto'};
  right: ${p =>
    p.origin === 'left'
      ? `${
          /* Move the handle just to the edge of the container if the user slides it completely away */
          p.openExtent <= 24 ? '-16px' : '8px'
        }`
      : 'auto'};
  top: 0;
  bottom: 0;
  transition: left 0.3s ease-in, right 0.3s ease-in;

  /* TODO: use theme */
  max-height: 300px;
  height: 30%;
  width: 6px;

  cursor: ${p => p.theme.drawer.handle.cursorX};
`
