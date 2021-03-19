import styled, { css } from 'styled-components'
import { Theme } from '../../Theme/types'
import { getCSSForBoxShadow } from '../../utility/BoxShadow/getCSSForBoxShadow'
import { StyledNativeSelectProps } from './types'

export const styles = (
  p: { theme: Theme } & StyledNativeSelectProps,
) => css`
  margin: ${p.margin || '0'};

  padding: ${p.theme.nativeSelect.padding};
  outline: ${p.theme.nativeSelect.outline};
  border: ${p.theme.nativeSelect.border};
  color: ${p.theme.nativeSelect.color};
  font-family: ${p.theme.nativeSelect.fontFamily};
  font-size: ${p.theme.nativeSelect.fontSize};
  font-weight: ${p.theme.nativeSelect.fontWeight};
  height: ${p.theme.nativeSelect.height};
  border-radius: ${p.theme.borderRadius};
  box-shadow: ${getCSSForBoxShadow(
    p.theme.boxShadow.default,
  )};
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat right #ddd;
  -webkit-appearance: none;
  background-position-x: calc(100% - 16px);
`

export const StyledNativeSelect = styled.select<
  { theme: Theme } & StyledNativeSelectProps
>`
  ${p => styles(p)}
`
