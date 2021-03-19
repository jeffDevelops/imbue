import React, { FC, forwardRef } from 'react'
import { LinkProps } from './types'
import { StyledLink } from './styled'
import { Color } from '../../../lib/utility/Color/types'

const Link = forwardRef(
  (
    { href, children, ...props }: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    let color: Color | {} = {}

    if ('meaning' in props || 'hierarchy' in props) {
      color = {
        ...(props.meaning
          ? { meaning: props.meaning }
          : {
              hierarchy: props.hierarchy,
            }),
      }
    }

    return (
      <StyledLink href={href} ref={ref} {...color}>
        {children}
      </StyledLink>
    )
  },
)

export default Link
