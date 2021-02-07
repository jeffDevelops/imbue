import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Link from '../lib/Link/Link'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/Flex/Flex'
import Body1 from '../lib/Body1'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const HierarchyAndMeaning = () =>
  withTheme(
    <Flex>
      <Flex column width="500px">
        <Link meaning="success" href="#">
          Create account
        </Link>
        <Flex height="20px" />
        <Link meaning="warning" href="#">
          Change subscription settings
        </Link>
        <Flex height="20px" />
        <Link meaning="danger" href="#">
          Unsubscribe
        </Link>
      </Flex>
      <Flex column width="500px">
        <Link hierarchy="primary" href="#">
          Primary
        </Link>
        <Flex height="20px" />
        <Link hierarchy="secondary" href="#">
          Secondary
        </Link>
        <Flex height="20px" />
        <Link hierarchy="tertiary" href="#">
          Tertiary
        </Link>
        <Flex height="20px" />
        <Link hierarchy="quaternary" href="#">
          Quaternary
        </Link>
      </Flex>
    </Flex>,
  )

export const Inline = () =>
  withTheme(
    <Flex column>
      <Body1>
        <Link href="#">Imbue links</Link> are anchor tags
        and require an href attribute.{' '}
        <Link href="#">Their</Link> hierarchy or meaning
        prop can be omitted, in which case the primary color
        is assumed. <Link href="#">They</Link> can also be
        used as buttons by importing LinkStyles and applying
        them to a button element.
      </Body1>
      <Body1>
        The underline transition is configurable at the
        theme level, so you don't have to think about
        whether you want the transition on every single
        link. In this case, all links will underline via the
        text-decoration property on hover.
      </Body1>
    </Flex>,
  )
