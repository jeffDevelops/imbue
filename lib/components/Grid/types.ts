import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react'

export interface GridAreaProps {
  children?: ReactNode
  gridArea: string
}

export interface GridProps
  extends HTMLAttributes<HTMLElement> {
  gridTemplateColumns: string
  gridTemplateRows: string
  gridTemplateAreas: string
  children:
    | ReactElement<GridAreaProps>
    | ReactElement<GridAreaProps>[]
  gap?: string
  height?: string
}
