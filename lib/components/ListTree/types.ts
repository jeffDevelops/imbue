export type ListTreeProps =
  // Either the ListTree has subBranches under it as is expandable
  | {
      render(): JSX.Element
      initiallyExpanded: boolean
      subBranches?: ListTreeProps[]
      onExpansionChange?(): void
      expanded: boolean
      name?: string
    }
  // Or it's the final branch and needs no means of expansion
  | {
      render(): JSX.Element
      onClick?(): void
    }
