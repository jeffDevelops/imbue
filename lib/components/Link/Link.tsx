import React, { FC } from 'react'
import { LinkProps } from './types'
import { StyledLink } from './styled'
import { Color } from '../../lib/utility/Color/types'

const Link: FC<LinkProps> = ({
  children,
  ...props
}: LinkProps) => {
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

  return <StyledLink {...color}>{children}</StyledLink>
}

export default Link
