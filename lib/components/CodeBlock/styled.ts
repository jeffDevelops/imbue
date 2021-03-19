import styled, { css } from 'styled-components'
import { CodeBlockProps } from './types'
import { Theme } from '../../Theme'

export const styles = (
  p: { theme: Theme } & CodeBlockProps,
) => css``

export const StyledCodeBlock = styled.code<
  { theme: Theme } & CodeBlockProps
>`
  ${p => styles(p)}
`
