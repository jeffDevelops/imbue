import styled, { css } from 'styled-components'
import { getCSSForBoxShadow } from '../utility/BoxShadow/getCSSForBoxShadow'
import { Theme } from '../Theme/types'
import { StyledTextareaProps } from './types'
import { determineColor } from '../utility/Color/determineColor'
import { OptionalColor } from '../utility/Color/types'
import { styles as body1Styles } from '../Body1/styled'

export const borderAnimationStyles = (
  p: { error?: string } & { theme: Theme },
) => css`
  &:after {
    content: ' ';
    position: absolute;
    bottom: 23px;
    left: 0;
    width: 0;
    background-color: ${p.error
      ? p.theme.palette.danger.value
      : determineColor(p) || p.theme.palette.primary.value};
    height: 10px;
    z-index: 0;
    border-radius: 0 0 8px 8px;
    transition: width ease-in 0.2s, color ease-in 0.2s;
  }
`

export const RelativeContext = styled.div<
  OptionalColor & {
    width: string | null
    height: string | null
    isResizing: boolean
    error?: string
  } & { theme: Theme }
>`
  width: ${p => p.width ?? '100%'};
  padding-bottom: 24px;

  ${p => borderAnimationStyles(p)}

  ${p =>
    p.error &&
    !p.isResizing &&
    `
    &:after {
      width: ${p.width ?? '100%'};
      transition: width ease-out 0.3s;
    }
  `}


  &:focus-within {
    &:after {
      width: ${p => p.width ?? '100%'};
      transition: width ease-out 0.3s;
    }
  }
`

export const styles = (
  p: StyledTextareaProps & { theme: Theme },
) => css<StyledTextareaProps>`
  resize: ${p => p.resize};
  max-width: ${p => p.maxWidth};
  min-width: ${p => p.minWidth};
  max-height: ${p => p.maxHeight};
  min-height: ${p => p.minHeight};
  position: relative;
  z-index: 1;
  background-color: ${p.theme.palette.background};
  border: ${p =>
    p.theme.textInput.border
      ? p.theme.textInput.border
      : 0};
  border-radius: ${p.theme.borderRadius};
  box-shadow: ${(() => {
    if (p.error) return 'none'
    return getCSSForBoxShadow(p.theme.boxShadow.default)
  })()};
  font-family: ${p.theme.textInput.fontFamily};
  font-size: ${p.theme.textInput.fontSize};
  color: ${p.theme.textInput.color};
  letter-spacing: ${p.theme.textInput.kerning};
  height: 56px;
  outline: none;
  padding: 8px 12px;
  transition: box-shadow 0.2s;

  ${body1Styles}

  &:focus {
    box-shadow: ${getCSSForBoxShadow(
      p.theme.boxShadow.pronouncedInset,
    )};
    transition: box-shadow 0.3s;
  }

  &::placeholder {
    color: ${p.theme.textInput.placeholderColor};
  }
`

export const StyledTextarea = styled.textarea.attrs<
  StyledTextareaProps
>(({ height, width }) => ({
  style: {
    width: width || '100%',
    height,
  },
}))<StyledTextareaProps>`
  ${p => styles(p)}
`

export const InputErrorMessage = styled.div`
  position: absolute;
  bottom: -4px;
  color: ${p => p.theme.palette.danger.value};
  line-height: 16px;
  font-size: 14px;
  letter-spacing: ${p => p.theme.textInput.kerning};
  font-family: ${p => p.theme.textInput.fontFamily};
`
