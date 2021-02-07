import React, { useState } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Checkbox from '../lib/Checkbox/Checkbox'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/Flex/Flex'
import H3 from '../lib/H3/H3'
import Body1 from '../lib/Body1/Body1'
import Body2 from '../lib/Body2/Body2'
import Label from '../lib/Label/Label'
import Panel from '../lib/Panel/Panel'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

export const Default = () =>
  withTheme(
    <Flex>
      <Flex column width="100px">
        <Checkbox defaultChecked={true} />
        <Checkbox borderless defaultChecked={true} />
      </Flex>
      <Flex column width="100px">
        <Checkbox defaultChecked={false} />
        <Checkbox borderless defaultChecked={false} />
      </Flex>
    </Flex>,
  )

export const HierarchyAndMeaning = () =>
  withTheme(
    <Flex>
      <Flex column width="100px">
        <Checkbox
          defaultChecked={true}
          hierarchy="primary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="secondary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="tertiary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="quaternary"
        />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          defaultChecked={false}
          hierarchy="primary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="secondary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="tertiary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="quaternary"
        />
      </Flex>
      <Flex column width="100px">
        <Checkbox defaultChecked={true} meaning="success" />
        <Checkbox defaultChecked={true} meaning="warning" />
        <Checkbox defaultChecked={true} meaning="danger" />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          defaultChecked={false}
          meaning="success"
        />
        <Checkbox
          defaultChecked={false}
          meaning="warning"
        />
        <Checkbox defaultChecked={false} meaning="danger" />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          borderless
          defaultChecked={true}
          hierarchy="primary"
        />
        <Checkbox
          borderless
          defaultChecked={true}
          hierarchy="secondary"
        />
        <Checkbox
          borderless
          defaultChecked={true}
          hierarchy="tertiary"
        />
        <Checkbox
          borderless
          defaultChecked={true}
          hierarchy="quaternary"
        />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          borderless
          defaultChecked={false}
          hierarchy="primary"
        />
        <Checkbox
          borderless
          defaultChecked={false}
          hierarchy="secondary"
        />
        <Checkbox
          borderless
          defaultChecked={false}
          hierarchy="tertiary"
        />
        <Checkbox
          borderless
          defaultChecked={false}
          hierarchy="quaternary"
        />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          borderless
          defaultChecked={true}
          meaning="success"
        />
        <Checkbox
          borderless
          defaultChecked={true}
          meaning="warning"
        />
        <Checkbox
          borderless
          defaultChecked={true}
          meaning="danger"
        />
      </Flex>
      <Flex column width="100px">
        <Checkbox
          borderless
          defaultChecked={false}
          meaning="success"
        />
        <Checkbox
          borderless
          defaultChecked={false}
          meaning="warning"
        />
        <Checkbox
          borderless
          defaultChecked={false}
          meaning="danger"
        />
      </Flex>
    </Flex>,
  )

export const WithLabels = () =>
  withTheme(
    <Flex>
      <Flex column alignItems="flex-start" width="200px">
        <Checkbox
          defaultChecked={true}
          hierarchy="primary"
          label="Primary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="secondary"
          label="Secondary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="tertiary"
          label="Tertiary"
        />
        <Checkbox
          defaultChecked={true}
          hierarchy="quaternary"
          label="Quaternary"
        />
        <Checkbox
          defaultChecked={true}
          meaning="success"
          label="Success"
        />
        <Checkbox
          defaultChecked={true}
          meaning="warning"
          label="Warning"
        />
        <Checkbox
          defaultChecked={true}
          meaning="danger"
          label="Danger"
        />
      </Flex>
      <Flex column alignItems="flex-start" width="200px">
        <Checkbox
          defaultChecked={false}
          hierarchy="primary"
          label="Primary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="secondary"
          label="Secondary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="tertiary"
          label="Tertiary"
        />
        <Checkbox
          defaultChecked={false}
          hierarchy="quaternary"
          label="Quaternary"
        />
        <Checkbox
          defaultChecked={false}
          meaning="success"
          label="Success"
        />
        <Checkbox
          defaultChecked={false}
          meaning="warning"
          label="Warning"
        />
        <Checkbox
          defaultChecked={false}
          meaning="danger"
          label="Danger"
        />
      </Flex>
    </Flex>,
  )

export const NoAccessibilityHelper = () =>
  withTheme(
    <Flex>
      <Flex column alignItems="flex-start" width="200px">
        <Checkbox
          defaultChecked={true}
          label="No semantic meaning or hierarchy"
        />
        <Checkbox
          defaultChecked={true}
          label="Borderless"
          borderless
        />
      </Flex>
      <Flex column alignItems="flex-start" width="200px">
        <Checkbox
          defaultChecked={false}
          label="No semantic meaning or hierarchy"
        />
        <Checkbox
          defaultChecked={false}
          label="Borderless"
          borderless
        />
      </Flex>
    </Flex>,
  )

const IndeterminateExample = () => {
  const [box1Selected, setBox1Selected] = useState(true)
  const [box2Selected, setBox2Selected] = useState(false)
  const [box3Selected, setBox3Selected] = useState(true)
  const [box4Selected, setBox4Selected] = useState(true)
  const [box5Selected, setBox5Selected] = useState(true)
  const [box6Selected, setBox6Selected] = useState(true)
  const [box7Selected, setBox7Selected] = useState(true)
  const [box8Selected, setBox8Selected] = useState(true)

  const [
    selectAllSelected,
    setSelectAllSelected,
  ] = useState(false)

  const allSelected =
    box1Selected &&
    box2Selected &&
    box3Selected &&
    box4Selected &&
    box5Selected &&
    box6Selected &&
    box7Selected &&
    box8Selected

  const allDeselcted =
    !box1Selected &&
    !box2Selected &&
    !box3Selected &&
    !box4Selected &&
    !box5Selected &&
    !box6Selected &&
    !box7Selected &&
    !box8Selected

  return (
    <Panel
      margin="64px"
      width="550px"
      accentBorder={{
        placement: 'top',
        meaning: allSelected ? 'success' : 'warning',
      }}
    >
      <Flex column alignItems="flex-start">
        <H3>Indeterminate Checkboxes</H3>
        <Body1>
          Indeterminate checkbox states can be used when the
          Checkbox is a controlled or an uncontrolled
          component, but it's best when you manage the state
          of the checkbox yourself.
        </Body1>
        <Body1>
          A great use case is when users can't see all of
          the checkboxes at once, such as if search results
          are paginated in a table.
        </Body1>
        <Body2>
          While the indeterminate state of the checkbox is
          just a matter providing a prop, maintaining such
          state can be an engineering challenge, especially
          for paginated or real-time data, so use caution
          when designing with this feature in mind.
        </Body2>
        <Flex
          margin="24px 0 0 0"
          justifyContent="flex-start"
        >
          <Checkbox
            indeterminate={!allSelected && !allDeselcted}
            checked={allSelected}
            onChange={() => {
              setBox1Selected(
                selectAllSelected ? false : true,
              )
              setBox2Selected(
                selectAllSelected ? false : true,
              )
              setBox3Selected(
                selectAllSelected ? false : true,
              )
              setBox4Selected(
                selectAllSelected ? false : true,
              )
              setBox5Selected(
                selectAllSelected ? false : true,
              )
              setBox6Selected(
                selectAllSelected ? false : true,
              )
              setBox7Selected(
                selectAllSelected ? false : true,
              )
              setBox8Selected(
                selectAllSelected ? false : true,
              )
              setSelectAllSelected(current => !current)
            }}
            label={
              allSelected ? 'Deselect All' : 'Select All'
            }
          />
        </Flex>
        <Flex
          padding="16px 0 0 64px"
          column
          alignItems="flex-start"
          width="300px"
        >
          <Checkbox
            checked={box1Selected}
            onChange={() =>
              setBox1Selected(current => !current)
            }
            label="Green eggs and ham"
          />
          <Checkbox
            checked={box2Selected}
            onChange={() =>
              setBox2Selected(current => !current)
            }
            label="Here or there"
          />
          <Checkbox
            checked={box3Selected}
            onChange={() =>
              setBox3Selected(current => !current)
            }
            label="Anywhere"
          />
          <Checkbox
            checked={box4Selected}
            onChange={() =>
              setBox4Selected(current => !current)
            }
            label="In a house"
          />
          <Checkbox
            checked={box4Selected}
            onChange={() =>
              setBox4Selected(current => !current)
            }
            label="With a mouse"
          />
          <Checkbox
            checked={box5Selected}
            onChange={() =>
              setBox5Selected(current => !current)
            }
            label="In a box"
          />
          <Checkbox
            checked={box6Selected}
            onChange={() =>
              setBox6Selected(current => !current)
            }
            label="With a fox"
          />
          <Checkbox
            checked={box7Selected}
            onChange={() =>
              setBox7Selected(current => !current)
            }
            label="In a boat"
          />
          <Checkbox
            checked={box8Selected}
            onChange={() =>
              setBox8Selected(current => !current)
            }
            label="With a goat"
          />
        </Flex>
      </Flex>
    </Panel>
  )
}

export const Indeterminate = () =>
  withTheme(<IndeterminateExample />)

export const CustomLabels = () =>
  withTheme(
    <Flex column alignItems="flex-start" maxWidth="600px">
      <Panel>
        <H3>Custom Labels</H3>
        <Body1>
          You can opt out of the vertically-centered labels
          to the right of each Checkbox by omitting the
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
            <Checkbox
              id="application-folder-option"
              defaultChecked={true}
              meaning="success"
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="rm-dmg-option">
                Prompt to remove .dmg after installation
              </Label>
            </Flex>
            <Checkbox
              id="rm-dmg-option"
              meaning="danger"
              defaultChecked={true}
            />
          </Flex>
        </Flex>
      </Panel>
    </Flex>,
  )

const DisabledExample = () => {
  const [firstIsDisabled, setFirstIsDisabled] = useState(
    false,
  )
  const [secondIsDisabled, setSecondIsDisabled] = useState(
    true,
  )
  const [fourthIsDisabled, setFourthIsDisabled] = useState(
    false,
  )

  return (
    <Flex column alignItems="flex-start" maxWidth="600px">
      <Panel>
        <H3>Disabled Checkmarks</H3>
        <Body1>
          A checkbox's disabled state is mutually exclusive
          from whether or not it is checked.
        </Body1>
        <Flex column alignItems="flex-start" width="auto">
          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="second-is-disabled">
                Second Checkbox Is Disabled
              </Label>
            </Flex>
            <Checkbox
              id="second-is-disabled"
              checked={secondIsDisabled}
              onChange={() =>
                setSecondIsDisabled(current => !current)
              }
              meaning="success"
              disabled={firstIsDisabled}
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="first-disabled">
                First Checkbox Is Disabled
              </Label>
            </Flex>
            <Checkbox
              id="first-disabled"
              meaning="danger"
              checked={firstIsDisabled}
              onChange={() =>
                setFirstIsDisabled(current => !current)
              }
              disabled={secondIsDisabled}
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="fourth-disabled">
                Fourth Is Disabled
              </Label>
            </Flex>
            <Checkbox
              id="fourth-disabled"
              meaning="danger"
              checked={fourthIsDisabled}
              onChange={() =>
                setFourthIsDisabled(current => !current)
              }
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="first-disabled">
                I don't do anything in this example, but get
                disabled
              </Label>
            </Flex>
            <Checkbox
              id="first-disabled"
              meaning="warning"
              defaultChecked={true}
              disabled={fourthIsDisabled}
            />
          </Flex>

          <Flex justifyContent="flex-start">
            <Flex
              justifyContent="flex-start"
              margin="0 16px 0 0"
            >
              <Label htmlFor="always-disabled">
                Always Disabled
              </Label>
            </Flex>
            <Checkbox
              id="always-disabled"
              meaning="danger"
              checked={true}
              onChange={() =>
                setFirstIsDisabled(current => !current)
              }
              disabled={true}
            />
          </Flex>
        </Flex>
      </Panel>
    </Flex>
  )
}

export const Disabled = () => withTheme(<DisabledExample />)
