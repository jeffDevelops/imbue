import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Color from 'color'
import { Theme } from '../../Theme'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { PositionValues } from '../../utility/Position/types'
import {
  StyledDrawerProps,
  DrawerState,
  DrawerContentProps,
} from './types'

import { DrawerProps } from '.'

export const drawerStyles = (
  p: StyledDrawerProps & DrawerState & { theme: Theme },
) => css`
  will-change: transform;
  position: ${p.position};
  z-index: ${p.zIndex?.blurred};
  margin: auto;
  background-color: ${p =>
    p.theme.palette.panelBackground.value};

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

  /* Allow the consumer to configure the border radii of the panel design drawer */
  ${
    p.usePanelDesign &&
    `
    
    ${
      typeof p.usePanelDesign === 'object' &&
      `
      border-top-right-radius: ${
        p.usePanelDesign?.borderRadius.topRight ||
        p.theme.borderRadius
      };
      border-top-left-radius: ${
        p.usePanelDesign?.borderRadius.topLeft ||
        p.theme.borderRadius
      };
      border-bottom-right-radius: ${
        p.usePanelDesign?.borderRadius.bottomRight ||
        p.theme.borderRadius
      };
      border-bottom-left-radius: ${
        p.usePanelDesign?.borderRadius.bottomLeft ||
        p.theme.borderRadius
      };
      `
    }
    
    `
  }

  ${
    !p.usePanelDesign &&
    `
    background-color: ${p.theme.palette.background.value};
    box-shadow: none;
    
    ${
      p.origin === 'top'
        ? `
      border-bottom: 2px solid ${p.theme.drawer.handle.backgroundColor};
      `
        : ''
    }
    ${
      p.origin === 'bottom'
        ? `
      border-top: 2px solid ${p.theme.drawer.handle.backgroundColor};
    `
        : ''
    }
    ${
      p.origin === 'right'
        ? `
      border-left: 2px solid ${p.theme.drawer.handle.backgroundColor};
    `
        : ''
    }
    ${
      p.origin === 'left'
        ? `
      border-right: 2px solid ${p.theme.drawer.handle.backgroundColor};
    `
        : ''
    }

    ${
      p.openExtent === 0 &&
      `border-color: ${Color(
        p.theme.drawer.handle.backgroundColor,
      ).alpha(0)};`
    }

    transition: border-color .3s;
  `
  }

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
            ? '100vh'
            : window.innerHeight <= p.maxOpenExtent
            ? '100vh'
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
            ? '100vw'
            : window.innerWidth <= p.maxOpenExtent
            ? '100vw'
            : `${p.maxOpenExtent}px`
        }` || 'none'
      : 'none'
  };

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

export const Scrollable = styled.bdi<DrawerContentProps>`
  ${p => (p.origin === 'left' ? 'direction: rtl;' : '')}

  & > * {
    direction: ltr;
  }
`

export const Content = styled.section<
  DrawerContentProps & { edgesIgnoringSafeArea: boolean }
>`
  overflow-y: ${p => p.overflowY};
  overflow-x: ${p => p.overflowX};
  height: auto;
  height: auto;
  direction: ltr;
  width: 100%;

  /* Allocate space for the handle */
  ${p =>
    !p.edgesIgnoringSafeArea &&
    `
    width: calc(100% - 24px);
    margin-top: ${p.origin === 'bottom' ? '24px' : '0'};
    margin-left: ${p.origin === 'right' ? '24px' : '0'};
    margin-right: ${p.origin === 'left' ? '24px' : '0'};
    margin-bottom: ${p.origin === 'top' ? '24px' : '0'};
  }
  `}
`

const handleStyles = (props: { theme: Theme }) => css`
  position: absolute;
  margin: auto; /* Positioning is calculated based on consumer-specified origin; this centers the handle */
  border-radius: 8px;
  z-index: 1;
  background-color: ${p =>
    p.theme.drawer.handle.backgroundColor};
`

interface HandleProps {
  origin: PositionValues
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
