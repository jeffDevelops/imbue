import { StrictUnion } from '../../tsUtils/types/StrictUnion'

export type HierarchicalColor = {
  hierarchy: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

export type SemanticColor = {
  meaning: 'success' | 'warning' | 'danger'
}

export type Color = StrictUnion<
  HierarchicalColor | SemanticColor
>
