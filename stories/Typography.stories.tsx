import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Panel from '../lib/Panel/Panel'
import { withTheme } from '../testUtils/withTheme'
import Flex from '../lib/Flex/Flex'
import H1 from '../lib/H1/H1'
import H2 from '../lib/H2/H2'
import H3 from '../lib/H3/H3'
import H4 from '../lib/H4/H4'
import H5 from '../lib/H5/H5'
import H6 from '../lib/H6/H6'
import Body1 from '../lib/Body1/Body1'
import Body2 from '../lib/Body2/Body2'

export default {
  title: 'Components/Typography',
  component: Panel,
  subcomponents: { H1, H2, H3, H4, H5, H6 },
} as Meta

export const Typography = () =>
  withTheme(
    <Panel height="auto" width="952px">
      <H1>H1: Sphinx of black quartz, judge my vow</H1>
      <H2>H2: Sphinx of black quartz, judge my vow</H2>
      <H3>H3: Sphinx of black quartz, judge my vow</H3>
      <H4>H4: Sphinx of black quartz, judge my vow</H4>
      <H5>H5: Sphinx of black quartz, judge my vow</H5>
      <H6>H6: Sphinx of black quartz, judge my vow</H6>

      <Body1>
        Body1: Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut ut nibh sed tellus consequat
        varius cursus non nisl. Nulla facilisi. Curabitur
        faucibus porttitor sem, sed tristique neque dapibus
        vel. Sed eleifend viverra ligula a imperdiet.
        Curabitur placerat fringilla turpis, nec maximus
        massa tempor sit amet.
      </Body1>

      <Body1>
        Donec vel dui id nulla vestibulum dapibus vitae
        sagittis velit. Nullam luctus mattis diam, vitae
        pretium tortor lobortis sed. Suspendisse at nunc a
        mauris finibus fermentum sit amet nec enim.
        Suspendisse potenti.
      </Body1>

      <Body1>
        Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Mauris et mauris risus. Pellentesque
        habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque at
        ligula a velit tincidunt commodo. Praesent nec
        sagittis leo, at fringilla arcu. Nullam vulputate
        efficitur sem in tempus. Integer in augue eu neque
        consectetur aliquam eget a leo. Sed volutpat, leo at
        commodo tincidunt, nunc ante dictum lectus, eget
        luctus ipsum odio ut ligula. Proin sodales luctus
        urna, ac vulputate erat venenatis et. Praesent non
        nulla at nibh lobortis facilisis.
      </Body1>

      <Body2>
        Body2: Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut ut nibh sed tellus consequat
        varius cursus non nisl. Nulla facilisi. Curabitur
        faucibus porttitor sem, sed tristique neque dapibus
        vel. Sed eleifend viverra ligula a imperdiet.
        Curabitur placerat fringilla turpis, nec maximus
        massa tempor sit amet.
      </Body2>

      <Body2>
        Donec vel dui id nulla vestibulum dapibus vitae
        sagittis velit. Nullam luctus mattis diam, vitae
        pretium tortor lobortis sed. Suspendisse at nunc a
        mauris finibus fermentum sit amet nec enim.
        Suspendisse potenti.
      </Body2>

      <Body2>
        Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Mauris et mauris risus. Pellentesque
        habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Pellentesque at
        ligula a velit tincidunt commodo. Praesent nec
        sagittis leo, at fringilla arcu. Nullam vulputate
        efficitur sem in tempus. Integer in augue eu neque
        consectetur aliquam eget a leo. Sed volutpat, leo at
        commodo tincidunt, nunc ante dictum lectus, eget
        luctus ipsum odio ut ligula. Proin sodales luctus
        urna, ac vulputate erat venenatis et. Praesent non
        nulla at nibh lobortis facilisis.
      </Body2>
    </Panel>,
  )

export const Hierarchy = () =>
  withTheme(
    <Flex
      column
      alignItems="flex-start"
      padding="40px 24px"
    >
      <H1>
        A balanced lunch starts with a healthy sandwich
      </H1>
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Flex
          position="sticky"
          top="150px"
          column
          height="auto"
          width="calc(35% - 32px)"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Body1>
            The copy above is an H1. Generally, you only
            want one per page. All of the styles in the
            default theme (or your own custom theme) are
            baked into the typography tags.
          </Body1>

          <Body1>
            In addition to font styles&mdash;such as
            font-family, -weight, -style, kerning
            (letter-spacing), etc.&mdash;, each font style
            has a configurable margin-bottom, so that
            there's consistently uniform space between the
            elements in your copy. The last Body1 and Body2
            in your container will not have this
            margin-bottom, so that there isn't awkward
            additional space added to the bottom padding of
            a Flex or Panel.
          </Body1>

          <Body2>
            The remaining headings and paragraphs are
            intended to show typography hierarchy. They go
            in order from H2 to H6, and each are paired with
            a Body1. This is a Body2, btw.
          </Body2>
        </Flex>

        <Flex
          column
          height="auto"
          width="calc(65% - 32px)"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <H2>Choosing the right sandwich</H2>
          <Body1>
            Lots of factors can go into choosing the
            centerpiece for your midday meal. Often, it's
            what you have in your fridge, any restrictions
            you have in your diet, or simply what you're
            feeling that day.
          </Body1>

          <H3>Nut butter sandwiches</H3>
          <Body1>
            Nut butter sandwiches are a great source of
            protein and polyunsaturated fats. If fresh fruit
            is added, and whole grain bread is used, they
            can be an excellent source of fiber and
            immune-boosting phytonutrients.
          </Body1>

          <H4>Making a peanut butter and jelly</H4>
          <H5>Spreading the peanut butter</H5>
          <Body1>
            No matter if you're a crunchy peanut butter fan
            or a creamy peanut butter fan, we have a PB&J to
            fit your needs! (The above heading is an H5)
          </Body1>

          <H6>Crunchy peanut butter fans, unite!</H6>
          <Body1>
            If you're using crunchy peanut butter, ensure
            that peanuts are evenly distributed for an
            overall crunchy experience. (The above heading
            is an H6)
          </Body1>

          <H6>
            Creamy peanut butter people, look no further
          </H6>
          <Body1>
            If you're using crunchy peanut butter, ensure
            that peanuts are evenly distributed for an
            overall crunchy experience. (The above heading
            is an H6)
          </Body1>

          <H5>Spreading the jelly</H5>

          <H6>Opt for fresh fruit!</H6>
          <Body1>
            For fresh fruit, or natural fruit preserves, be
            sure to spread any fruit chunks so every bite is
            a textured delight. Fresh fruit adds fiber and
            extra vitamins and minerals to your sandwich.
          </Body1>

          <H6>Sometimes, jelly is more convenient</H6>
          <Body1>
            When your fruit bowl is empty, jelly can be just
            as good. Opt for no-sugar-added jams and jellies
            and pay attention to portion sizes when
            spreading onto your PB&J.
          </Body1>
        </Flex>
      </Flex>
    </Flex>,
  )
