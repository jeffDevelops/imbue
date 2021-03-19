import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import RadioButton from '../lib/components/RadioButton'
import Checkbox from '../lib/components/Checkbox'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/components/Flex'
import H3 from '../lib/components/H3'
import Body1 from '../lib/components/Body1'
import Label from '../lib/components/Label'
import Panel from '../lib/components/Panel'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta

const DefaultExample = () => {
  const [selected1, setSelected1] = useState('option1')
  const [selected2, setSelected2] = useState('option3')
  return (
    <Flex column width="150px">
      <Panel
        accentBorder={{
          hierarchy: 'primary',
          placement: 'left',
        }}
      >
        {' '}
        <Flex column>
          <Body1>Default</Body1>
          <RadioButton
            checked={selected1 === 'option1'}
            value="option1"
            onChange={() => setSelected1('option1')}
          />
          <RadioButton
            checked={selected1 === 'option2'}
            value="option2"
            onChange={() => setSelected1('option2')}
          />

          <Flex height="24px" />

          <Body1>Borderless</Body1>
          <RadioButton
            checked={selected2 === 'option3'}
            value="option3"
            borderless
            onChange={() => setSelected2('option3')}
          />
          <RadioButton
            checked={selected2 === 'option4'}
            value="option4"
            borderless
            onChange={() => setSelected2('option4')}
          />
        </Flex>
      </Panel>
    </Flex>
  )
}

export const Default = () => withTheme(<DefaultExample />)

const HierarchyAndMeaningExample = () => {
  const [selected1, setSelected1] = useState('option1')
  const [selected2, setSelected2] = useState('option5')
  return (
    <Flex column width="150px">
      <Panel
        accentBorder={{
          hierarchy: 'primary',
          placement: 'left',
        }}
      >
        <Flex column>
          <Body1>Hierarchy</Body1>
          <RadioButton
            hierarchy="primary"
            checked={selected1 === 'option1'}
            value="option1"
            onChange={() => setSelected1('option1')}
          />
          <RadioButton
            hierarchy="secondary"
            checked={selected1 === 'option2'}
            value="option2"
            onChange={() => setSelected1('option2')}
          />
          <RadioButton
            hierarchy="tertiary"
            checked={selected1 === 'option3'}
            value="option3"
            onChange={() => setSelected1('option3')}
          />
          <RadioButton
            hierarchy="quaternary"
            checked={selected1 === 'option4'}
            value="option4"
            onChange={() => setSelected1('option4')}
          />

          <Flex height="24px" />

          <Body1>Meaning</Body1>
          <RadioButton
            meaning="success"
            checked={selected2 === 'option5'}
            value="option5"
            onChange={() => setSelected2('option5')}
          />
          <RadioButton
            meaning="warning"
            checked={selected2 === 'option6'}
            value="option6"
            onChange={() => setSelected2('option6')}
          />
          <RadioButton
            meaning="danger"
            checked={selected2 === 'option7'}
            value="option7"
            onChange={() => setSelected2('option7')}
          />
        </Flex>
      </Panel>
    </Flex>
  )
}

export const HierarchyAndMeaning = () =>
  withTheme(<HierarchyAndMeaningExample />)

const WithLabelsExample = () => {
  const [selected1, setSelected1] = useState('1')
  const [selected2, setSelected2] = useState('2')
  return (
    <Flex>
      <Flex column alignItems="flex-start" width="200px">
        <RadioButton
          value="1"
          hierarchy="primary"
          onChange={() => setSelected1('1')}
          label="Primary"
          checked={selected1 === '1'}
        />
        <RadioButton
          value="2"
          hierarchy="secondary"
          onChange={() => setSelected1('2')}
          label="Secondary"
          checked={selected1 === '2'}
        />
        <RadioButton
          value="3"
          hierarchy="tertiary"
          onChange={() => setSelected1('3')}
          label="Tertiary"
          checked={selected1 === '3'}
        />
        <RadioButton
          value="4"
          hierarchy="quaternary"
          onChange={() => setSelected1('4')}
          label="Quaternary"
          checked={selected1 === '4'}
        />
        <RadioButton
          value="5"
          meaning="success"
          label="Success"
          onChange={() => setSelected1('5')}
          checked={selected1 === '5'}
        />
        <RadioButton
          value="6"
          onChange={() => setSelected1('6')}
          meaning="warning"
          label="Warning"
          checked={selected1 === '6'}
        />
        <RadioButton
          value="7"
          onChange={() => setSelected1('7')}
          meaning="danger"
          label="Danger"
          checked={selected1 === '7'}
        />
      </Flex>
    </Flex>
  )
}

export const WithLabels = () =>
  withTheme(<WithLabelsExample />)

const CustomLabelsExample = () => {
  const [selected, setSelected] = useState('move')

  return (
    <Flex column alignItems="flex-start" maxWidth="600px">
      <Panel>
        <H3>Custom Labels</H3>
        <Body1>
          You can opt out of the vertically-centered labels
          to the right of each RadioButton by omitting the
          label prop and utilizing Flex to format the Label
          component:
        </Body1>
        <Flex height="32px" />
        <Flex column alignItems="flex-start" width="auto">
          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="application-folder-option">
                Move to Applications folder after
                installation
              </Label>
            </Flex>
            <RadioButton
              id="application-folder-option"
              value="move"
              onChange={() => setSelected('move')}
              meaning="success"
              checked={selected === 'move'}
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="keep-in-place">
                Keep in place
              </Label>
            </Flex>
            <RadioButton
              id="keep-in-place"
              value="keep in place"
              onChange={() => setSelected('keep in place')}
              meaning="danger"
              checked={selected === 'keep in place'}
            />
          </Flex>
        </Flex>
      </Panel>
    </Flex>
  )
}

export const CustomLabels = () =>
  withTheme(<CustomLabelsExample />)

const DisabledExample = () => {
  const [secondIsDisabled, setSecondIsDisabled] = useState(
    true,
  )
  const [value, setValue] = useState('first')

  return (
    <Flex column alignItems="flex-start" maxWidth="600px">
      <Panel>
        <H3>Disabled Radio Buttons</H3>
        <Body1>
          A RadioButton's disabled state is mutually
          exclusive from whether or not it is checked.
        </Body1>

        <Flex column alignItems="flex-start" width="auto">
          <Checkbox
            checked={secondIsDisabled}
            onChange={() =>
              setSecondIsDisabled(current => !current)
            }
            label="Second radio option is disabled"
          />

          <RadioButton
            checked={value === 'first'}
            onChange={() => setValue('first')}
            value="first"
            label="First"
          />

          <RadioButton
            checked={value === 'second'}
            onChange={() => setValue('second')}
            value="second"
            label="Second"
            disabled={secondIsDisabled}
          />
        </Flex>
      </Panel>
    </Flex>
  )
}

export const Disabled = () => withTheme(<DisabledExample />)
