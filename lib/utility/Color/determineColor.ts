import {
  Color,
  HierarchicalColorOptions,
  SemanticColorOptions,
} from './types'
import { Theme } from '../../Theme/types'

export const determineColor = <
  Props extends {
    theme: Theme
    hierarchy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  }
>(
  p: Props & {
    theme: Theme
    hierarchy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  },
) => {
  if (!p.hierarchy && !p.meaning) {
    return null
  }

  if (
    'hierarchy' in p &&
    !!p.hierarchy &&
    'meaning' in p &&
    !!p.meaning
  ) {
    throw new Error(
      'Button cannot be defined with both hierarchy and meaning.',
    )
  }

  if ('hierarchy' in p) {
    switch (p.hierarchy) {
      case 'primary':
        return p.theme.palette.primary.value
      case 'secondary':
        return p.theme.palette.secondary.value
      case 'tertiary':
        return p.theme.palette.tertiary.value
      case 'quaternary':
        return p.theme.palette.quaternary.value
    }
  }

  if ('meaning' in p) {
    switch (p.meaning) {
      case 'success':
        return p.theme.palette.success.value
      case 'warning':
        return p.theme.palette.warning.value
      case 'danger':
        return p.theme.palette.danger.value
    }
  }

  return null
}

export const determineContrastColor = <
  Props extends {
    theme: Theme
    hierachy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  }
>(
  p: Props & {
    theme: Theme
    hierarchy?: HierarchicalColorOptions
    meaning?: SemanticColorOptions
  },
) => {
  if (!p.hierarchy && !p.meaning) {
    return null
  }

  if ('hierarchy' in p && 'meaning' in p) {
    throw new Error(
      'Imbue Error: Button cannot be defined with both hierarchy and meaning.',
    )
  }

  if ('hierarchy' in p) {
    switch (p.hierarchy) {
      case 'primary':
        return p.theme.palette.primary.contrast
      case 'secondary':
        return p.theme.palette.secondary.contrast
      case 'tertiary':
        return p.theme.palette.tertiary.contrast
      case 'quaternary':
        return p.theme.palette.quaternary.contrast
    }
  }

  if ('meaning' in p) {
    switch (p.meaning) {
      case 'success':
        return p.theme.palette.success.contrast
      case 'warning':
        return p.theme.palette.warning.contrast
      case 'danger':
        return p.theme.palette.danger.contrast
    }
  }

  return null
}
