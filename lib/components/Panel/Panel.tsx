import React, { forwardRef } from 'react'
import { PanelProps } from './types'
import AccentBorder from './AccentBorder/AccentBorder'
import { StyledPanel } from './styled'

const Panel = forwardRef<HTMLElement, PanelProps>(
  (
    { accentBorder, children, ...props }: PanelProps,
    ref,
  ) => {
    if (
      accentBorder &&
      !('hierarchy' in accentBorder) &&
      !('meaning' in accentBorder)
    )
      throw new Error(
        'Imbue error: no "meaning" nor "hierarchy" prop was provided to "accentBorder" prop',
      )
    return (
      <StyledPanel ref={ref} {...props}>
        {accentBorder && accentBorder.hierarchy && (
          <AccentBorder
            hierarchy={accentBorder.hierarchy}
            placement={accentBorder.placement}
          />
        )}

        {accentBorder && accentBorder.meaning && (
          <AccentBorder
            meaning={accentBorder.meaning}
            placement={accentBorder.placement}
          />
        )}

        {children ? children : null}
      </StyledPanel>
    )
  },
)

export default Panel
