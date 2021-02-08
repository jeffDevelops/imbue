import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Textarea from '../lib/Textarea/Textarea'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/Flex/Flex'
import Body1 from '../lib/Body1/Body1'

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta

export const HierarchyAndMeaning = () =>
  withTheme(
    <Flex
      width="100%"
      maxWidth="650px"
      justifyContent="space-between"
    >
      <Flex column width="300px">
        <Textarea
          id="input_primary"
          label="Primary"
          placeholder="Primary Hierarchy"
        />
        <Textarea
          hierarchy="secondary"
          id="input_secondary"
          label="Secondary"
          placeholder="Secondary Hierarchy"
        />
        <Textarea
          hierarchy="tertiary"
          id="input_tertiary"
          label="Tertiary"
          placeholder="Tertiary Hierarchy"
        />
        <Textarea
          hierarchy="quaternary"
          id="input_quaternary"
          label="Quaternary"
          placeholder="Quaternary Hierarchy"
        />
      </Flex>
      <Flex column width="300px">
        <Textarea
          meaning="success"
          id="input_success"
          label="Success"
          placeholder="Success Meaning"
        />
        <Textarea
          meaning="warning"
          id="input_warning"
          label="Warning"
          placeholder="Warning Meaning"
        />
        <Textarea
          meaning="danger"
          id="input_danger"
          label="Danger"
          placeholder="Danger Meaning"
        />
      </Flex>
    </Flex>,
  )

const ErrorStateExample = () => {
  const [state, setState] = useState('')

  return (
    <Flex column width="300px" justifyContent="flex-start">
      <Textarea
        value={state}
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement>,
        ) => setState(e.target.value)}
        id="input_primary"
        label="Primary"
        error={!state && 'Say something! Anything!'}
      />
    </Flex>
  )
}

export const ErrorState = () =>
  withTheme(<ErrorStateExample />)

export const Resizable = () =>
  withTheme(
    <Flex
      justifyContent="space-between"
      alignItems="flex-start"
      width="90%"
      maxWidth="700px"
    >
      <Flex
        column
        width="50%"
        maxWidth="400px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Body1>
          With resizable textareas, two factors are at odds:
        </Body1>
        <Body1>
          1) The most common use case with small-to-medium
          bodies of text is to have the textarea grow in
          response to how much text is entered by the user.
        </Body1>
        <Body1>
          2) But then, what does it mean for that behavior
          when the user explicitly resizes the textarea?
        </Body1>
        <Body1>
          This component assumes that the user knows what
          they want, and the textarea will no longer
          grow/shrink in size in response to entered text.
        </Body1>
        <Body1>
          More specifically, if a resize object is provided,
          the user's preferred height (as derived from their
          resize action) takes precedence over text
          accommodation until the component is unmounted.
        </Body1>
        <Body1>
          The implications of this are that, if the
          user-resized textarea is smaller than the scroll
          height of the enclosed text, the textarea will
          become vertically scrollable. On the other hand,
          if the user-resized textarea is larger than the
          scroll height of the enclosed text, the behavior
          of auto-adjusting to the height of the text is
          removed.
        </Body1>
      </Flex>
      <Flex column width="300px">
        <Textarea
          id="input_primary"
          label="Both Directions"
          placeholder="This textarea knows no bounds"
          resize={{ direction: 'both' }}
        />
        <Textarea
          id="input_primary"
          label="Both Directions"
          placeholder="This textarea is, at smallest, 100 X 100px, and, at largest 300 X 300px"
          resize={{
            direction: 'both',
            maxWidth: '300px',
            maxHeight: '300px',
            minWidth: '100px',
            minHeight: '100px',
          }}
        />
        <Textarea
          id="input_primary"
          label="Vertical"
          placeholder="This textarea can only resize vertically"
          resize={{
            direction: 'vertical',
            maxWidth: '300px',
            maxHeight: '300px',
            minWidth: '100px',
            minHeight: '100px',
          }}
        />
        <Textarea
          id="input_primary"
          label="Horizontal"
          placeholder="This textarea can only resize horizontally"
          resize={{
            direction: 'horizontal',
            maxWidth: '400px',
            maxHeight: '400px',
            minWidth: '100px',
            minHeight: '100px',
          }}
        />
      </Flex>
    </Flex>,
  )
