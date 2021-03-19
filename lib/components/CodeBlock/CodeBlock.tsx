import React, { memo, FC } from 'react'
import { withTheme } from 'styled-components'
import { CodeBlockProps } from './types'
import { StyledCodeBlock } from './styled'
import { Theme } from '../../Theme/types'

import Highlight, {
  defaultProps,
} from 'prism-react-renderer'

const CodeBlock: FC<
  CodeBlockProps & { theme: Theme }
> = memo(
  ({ theme, code }: CodeBlockProps & { theme: Theme }) => {
    return (
      <Highlight
        {...defaultProps}
        theme={{
          plain: {
            backgroundColor: theme.palette.background.value,
            color: theme.palette.background.contrast,
          },
          styles: [
            {
              types: ['comment'],
              style: {
                color:
                  theme.palette.syntaxHighlighting.comments,
              },
            },
            {
              types: ['punctuation'],
              style: {
                color:
                  theme.palette.syntaxHighlighting
                    .punctuation,
              },
            },
            {
              types: ['namespace'],
              style: {
                opacity: 0.7,
              },
            },
            {
              types: ['tag', 'operator', 'number'],
              style: {
                color: theme.palette.primary.value,
              },
            },
            {
              types: ['property', 'function'],
              style: {
                color: theme.palette.secondary.value,
              },
            },
            {
              types: ['tag-id', 'selector', 'atrule-id'],
              style: {
                color: theme.palette.tertiary.value,
              },
            },
            {
              types: ['attr-name'],
              style: {
                color: theme.palette.background.contrast,
              },
            },
            {
              types: ['string', 'url'],
              style: {
                color:
                  theme.palette.syntaxHighlighting.string,
              },
            },
            {
              types: ['boolean', 'entity', 'directive'],
              style: {
                color: '#7680BF',
              },
            },
            {
              types: ['keyword', 'variable'],
              style: {
                color: theme.palette.primary.value,
              },
            },
            {
              types: [
                'attr-value',
                'control',
                'unit',
                'statement',
                'regex',
                'at-rule',
                'placeholder',
                'prolog',
                'doctype',
                'cdata',
              ],
              style: {
                color: '#3F4673',
              },
            },
            {
              types: ['deleted'],
              style: {
                textDecorationLine: 'line-through',
              },
            },
            {
              types: ['inserted'],
              style: {
                textDecorationLine: 'underline',
              },
            },
            {
              types: ['italic'],
              style: {
                fontStyle: 'italic',
              },
            },
            {
              types: ['important', 'bold'],
              style: {
                fontWeight: 'bold',
              },
            },
            {
              types: ['important'],
              style: {
                color: theme.palette.background.contrast,
              },
            },
          ],
        }}
        code={code}
        language="tsx"
      >
        {({
          className,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  },
)

export default withTheme(CodeBlock)
