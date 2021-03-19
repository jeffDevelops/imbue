import React, {
  Fragment,
  FC,
  memo,
  MouseEvent,
} from 'react'
import styled from 'styled-components'
import { ArrowDropUp } from '@styled-icons/remix-line/ArrowDropUp'
import Flex from '../Flex'
import { ListTreeProps } from './types'
import { UL, ListItem } from './styled'
import { v4 as uuid } from 'uuid'
import { motion } from 'framer-motion'

const DropupIcon = styled(ArrowDropUp)`
  fill: ${p => p.theme.listTree.list.dropdownIcon.fill};
  width: ${p => p.theme.listTree.list.dropdownIcon.width};
`

const iconVariants = {
  expanded: { transform: 'rotateX(0deg)' },
  collapsed: { transform: 'rotateX(180deg)' },
}

const ListTree: FC<ListTreeProps> = memo(
  (tree: ListTreeProps) => {
    'name' in tree &&
      tree &&
      tree.name === 'layout' &&
      console.log({ tree })

    return (
      <UL>
        <ListItem
          onClick={(e: MouseEvent<HTMLLIElement>) => {
            // e.stopPropagation()

            'subBranches' in tree && tree.subBranches
              ? 'onExpansionChange' in tree &&
                tree.onExpansionChange &&
                tree.onExpansionChange()
              : 'onClick' in tree &&
                tree.onClick &&
                tree.onClick()
          }}
        >
          {tree &&
            'subBranches' in tree &&
            tree.subBranches?.length && (
              <motion.div
                animate={
                  tree.expanded ? 'expanded' : 'collapsed'
                }
                transition={{ duration: 0.3 }}
                variants={iconVariants}
                initial={false}
              >
                <DropupIcon />
              </motion.div>
            )}
          {tree.render()}
        </ListItem>
        {tree && 'subBranches' in tree && tree.subBranches && (
          <>
            {tree.expanded && (
              <>
                {tree.subBranches.map(branch => {
                  const key = uuid()
                  return (
                    <Fragment key={key}>
                      <Flex
                        justifyContent="flex-start"
                        width="auto"
                        padding="0 0 0 40px"
                        onClick={(
                          e: MouseEvent<HTMLDivElement>,
                        ) => {
                          e.stopPropagation()
                          'subBranches' in branch &&
                          branch.subBranches
                            ? 'onExpansionChange' in
                                branch &&
                              branch.onExpansionChange &&
                              branch.onExpansionChange()
                            : 'onClick' in branch &&
                              branch.onClick &&
                              branch.onClick()
                        }}
                      >
                        <ListTree
                          expanded={
                            'expanded' in branch &&
                            branch.expanded
                          }
                          render={branch.render}
                          subBranches={
                            ('subBranches' in branch &&
                              branch.subBranches) ||
                            undefined
                          }
                          initiallyExpanded={
                            'initiallyExpanded' in branch &&
                            branch.initiallyExpanded
                          }
                        />
                      </Flex>
                    </Fragment>
                  )
                })}
              </>
            )}
          </>
        )}
      </UL>
    )
  },
)

export default ListTree
