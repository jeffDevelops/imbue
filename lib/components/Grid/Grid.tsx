import React, { FC, useEffect } from 'react'
import { GridProps } from './types'
import { StyledGrid } from './styled'

const Grid: FC<GridProps> = ({
  gridTemplateAreas,
  children,
  ...props
}: GridProps) => {
  /* Display errors in the console for invalid usage */
  useEffect(() => {
    const inputIsValid = gridTemplateAreas
      .trim()
      .match(/(?:["'].+["']\s*)/)

    if (
      gridTemplateAreas !== 'inherit' &&
      gridTemplateAreas !== 'unset' &&
      gridTemplateAreas !== 'initial' &&
      !inputIsValid
    ) {
      console.error(
        `Invalid input for gridTemplateAreas. See
        https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas for usage.`,
      )
    }

    React.Children.map(children, (child: any) => {
      if (!child?.props?.gridArea) {
        console.error(
          `Imbue runtime error: A child was passed to <Grid /> that does not have a gridArea
          prop and Imbue cannot guarantee that the grid will be rendered properly. Either use
          the provided <GridArea /> component and provide a gridArea prop, or implement your
          own children with a gridArea prop and use the value for that element's grid-area
          CSS property.`,
        )
      }
    })
  }, [gridTemplateAreas, children])

  return (
    <StyledGrid
      gridTemplateAreas={gridTemplateAreas}
      {...props}
    >
      {children}
    </StyledGrid>
  )
}

export default Grid
