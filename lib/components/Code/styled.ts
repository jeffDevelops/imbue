import styled, { css } from 'styled-components'
import { CodeProps } from './types'
import { Theme } from '../../Theme'

export const styles = (p: { theme: Theme } & CodeProps) =>
  css`
    color: ${p => p.theme.code.color};
    background-color: ${p => p.theme.code.backgroundColor};
    font-family: ${p => p.theme.code.fontFamily};
    border-radius: ${p => p.theme.code.borderRadius};
    padding: ${p => p.theme.code.padding};
  `

export const StyledCode = styled.code<
  { theme: Theme } & CodeProps
>`
  ${p => styles(p)}
`
