import { StrictUnion } from '../../tsUtils/types/StrictUnion'

export type HierarchicalColorOptions =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'

export type SemanticColorOptions =
  | 'success'
  | 'warning'
  | 'danger'

export type HierarchicalColor = {
  hierarchy: HierarchicalColorOptions
}

export type SemanticColor = {
  meaning: SemanticColorOptions
}

export type Color = StrictUnion<
  HierarchicalColor | SemanticColor
>

export type OptionalColor =
  | StrictUnion<HierarchicalColor | SemanticColor>
  | {}
