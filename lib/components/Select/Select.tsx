import React, {
  FC,
  useRef,
  useState,
  useMemo,
  cloneElement,
  useLayoutEffect,
  useCallback,
  ChangeEvent,
  MouseEvent,
  KeyboardEvent,
} from 'react'
import {
  AnimatePresence,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
} from 'framer-motion'
import {
  SelectProps,
  SelectOption,
  SingleSelectOnChange,
  MultiselectOnChange,
} from './types'
import {
  ImbueSelectClearSelectionIcon,
  ImbueSelectDropdownIcon,
  ImbueSelectTagDeselectionButtonIcon,
  StyledSelectClearSelectionIconButton,
  StyledPseudoElementContainer,
  StyledSelectDropdownIconButton,
  StyledSelectContainer,
  StyledTagsContainer,
  StyledMultiselectTag,
  StyledTagDeselectionButton,
  StyledSelectInput,
  StyledSelectOptionList,
  StyledSelectOption,
} from './styled'
import Label from '../Label/Label'
import {
  useOnClickOutside,
  useStateWithCallback,
} from '../../hooks'
import { Color } from '../../utility/Color/types'

const Select: FC<SelectProps> = ({
  options,
  optionsAreLoading = false,
  isSearchable = false,
  multiselect = false,
  error = '',
  zIndex = 1,
  disabled = false,
  label = undefined,
  SelectContainerProps = {
    id: undefined,
    zIndex: 2,
  },
  SelectDropdownIconButtonProps = {
    zIndex: 2,
    CustomDropdownIcon: undefined,
  },
  SelectClearSelectionIconButtonProps = {
    zIndex: 2,
  },
  SelectTagsContainerProps = {
    disabled: false,
  },
  SelectDeselectionButtonProps = {
    CustomTagDeselectionIcon: undefined,
  },
  SelectInputProps = {
    id: undefined,
    disabled: false,
  },
  SelectOptionListProps = {
    id: undefined,

    noOptionMatchesSearchtermStateText: undefined,
    NoOptionMatchesSearchtermState: undefined,

    emptyStateText: undefined,
    EmptyState: undefined,

    noMoreOptionsStateText: undefined,
    NoMoreOptionsState: undefined,
  },
  SelectOptionProps = {},
  onChange,
  ...props
}: SelectProps) => {
  /** Discern color prop */
  let color: Color | Record<string, never> = {}
  if ('meaning' in props || 'hierarchy' in props) {
    color = {
      ...(props.meaning
        ? { meaning: props.meaning }
        : {
            hierarchy: props.hierarchy,
          }),
    }
  }

  /** Normalize the defaultSelections into an ordered (null | SelectOption)[] to calculate the selecions initial state */
  const normalizedDefaultSelections = (() => {
    if (
      !multiselect ||
      !('defaultSelections' in props) ||
      props.defaultSelections !== undefined
    )
      return options.map(() => null)

    return options.map(option => {
      const defaultSelection = (props.defaultSelections as SelectOption[]).find(
        selection =>
          selection?.uniqueId === option.uniqueId,
      )

      return defaultSelection || null
    })
  })()

  /** Refs */
  const selectRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownIconRef = useRef<HTMLButtonElement>(null)
  const clearInputIconRef = useRef<HTMLButtonElement>(null)

  /** useLayoutEffect measurements */
  const [
    dropdownIconWidth,
    setDropdownIconWidth,
  ] = useState(0)
  const [
    clearInputIconWidth,
    setClearInputIconWidth,
  ] = useState(0)
  const [selectHeight, setSelectHeight] = useState(0)

  const [searchterm, setSearchterm] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  /** Used if the select is a multiselect */
  const [selections, setSelections] = useStateWithCallback<
    (SelectOption | null)[]
  >(normalizedDefaultSelections || [])
  const [sortOrder] = useState<SelectOption[]>(options)
  const [unselected, setUnselected] = useState<
    (SelectOption | null)[]
  >(options)

  /** Used if the select is a single select (multiselect is falsey) */
  const [
    selection,
    setSelection,
  ] = useStateWithCallback<SelectOption | null>(null)

  /** Take measurements on mount, and when selection(s) change(s) */
  useLayoutEffect(() => {
    if (dropdownIconRef?.current) {
      setDropdownIconWidth(
        dropdownIconRef.current.getBoundingClientRect()
          .width,
      )
    }

    if (clearInputIconRef?.current) {
      setClearInputIconWidth(
        clearInputIconRef.current.getBoundingClientRect()
          .width,
      )
    }

    if (selectRef?.current) {
      setSelectHeight(
        selectRef.current.getBoundingClientRect().height,
      )
    }
  }, [selections])

  const handleMultiselect = useCallback(
    (newSelectionIndex: number) => {
      const newSelections = [...selections]
      const newUnselected = [...unselected]

      if (selections[newSelectionIndex]) {
        /** The selection needs to be removed. Remove it. */
        newUnselected[newSelectionIndex] =
          sortOrder[newSelectionIndex]
        newSelections[newSelectionIndex] = null
      } else {
        /** The selection needs to be added. Add it. */
        newSelections[newSelectionIndex] =
          sortOrder[newSelectionIndex]
        newUnselected[newSelectionIndex] = null
      }

      setUnselected(newUnselected)

      setSelections(newSelections, () => {
        /* Call the parent's onChange handler */
        ;(onChange as MultiselectOnChange)(
          newSelections.filter(
            selection => !!selection,
          ) as SelectOption[],
        )
      })
    },
    [
      selections,
      unselected,
      setSelections,
      onChange,
      sortOrder,
    ],
  )

  const handleSingleSelect = useCallback(
    (index: number) => {
      setSelection(sortOrder[index], () => {
        ;(onChange as SingleSelectOnChange)(selection)
        setSearchterm('')
      })
    },
    [onChange, selection, setSelection, sortOrder],
  )

  const handleSelection = useCallback(
    (index: number) => {
      if (multiselect) return handleMultiselect(index)

      handleSingleSelect(index)
    },
    [handleMultiselect, handleSingleSelect, multiselect],
  )

  const handleClearSelections = useCallback(() => {
    if (multiselect) {
      const {
        newSelections,
        newUnselected,
      } = selections.reduce(
        (
          {
            newSelections,
            newUnselected,
          }: {
            newSelections: (SelectOption | null)[]
            newUnselected: (SelectOption | null)[]
          },
          current,
          index,
        ) => {
          /** If the option is currently unselected, leave it so */
          if (!current) {
            newSelections.push(null)
            newUnselected.push(unselected[index])

            return {
              newSelections,
              newUnselected,
            }
          }

          /** If the option is currently deselectable, leave it as selected */
          if (
            (current &&
              current.multiselectOptions
                ?.deselectionDisabled) ||
            current.multiselectOptions?.notDeselectable
          ) {
            newSelections.push(current)
            newUnselected.push(null)

            return {
              newSelections,
              newUnselected,
            }
          }

          /** The option is deselectable; deselect it */
          newSelections.push(null)
          newUnselected.push(current)

          return {
            newSelections,
            newUnselected,
          }
        },
        { newSelections: [], newUnselected: [] },
      )

      setSelections(newSelections, () => {
        ;(onChange as MultiselectOnChange)(
          newSelections.filter(
            selection => !!selection,
          ) as SelectOption[],
        )
      })
      setUnselected(newUnselected)
    } else {
      setSelection(null, () => {
        ;(onChange as SingleSelectOnChange)(null)
      })
    }
  }, [
    multiselect,
    onChange,
    selections,
    setSelection,
    setSelections,
    unselected,
  ])

  useOnClickOutside(selectRef, () => {
    setIsFocused(false)
  })

  const filteredOptions = useMemo(() => {
    return (multiselect
      ? unselected
      : options
    ).map(option =>
      option?.label.toString().match(new RegExp(searchterm))
        ? option
        : null,
    )
  }, [multiselect, unselected, options, searchterm])

  /* Allow the user to hit the backspace key when no searchterm to delete tags */
  const handleTagBackspace = useCallback(() => {
    if (!multiselect) {
      setSelection(null)
      ;(onChange as SingleSelectOnChange)(null)

      return
    }

    /** Work backwards from the end of the array to determine the last non-null SelectOption */
    const lastSelectedIndex = (() => {
      for (let i = selections.length - 1; i >= 0; i--) {
        if (
          selections[i] !== null &&
          !selections[i]?.multiselectOptions
            ?.deselectionDisabled
        ) {
          return i
        }
      }
      return undefined
    })()

    if (lastSelectedIndex === undefined) return

    if (
      multiselect &&
      /** Do nothing if the user is merely deleting characters from their searchterm */
      !searchterm &&
      /** Do nothing if there are no selections to deselect */
      selections.length &&
      /** Only allow backspace deselection if the option is 1) deselectable... */
      !selections[lastSelectedIndex]?.multiselectOptions
        ?.notDeselectable &&
      /** ...and 2) deselection for this option has not been disabled. */
      !selections[lastSelectedIndex]?.multiselectOptions
        ?.deselectionDisabled &&
      /** Appease TypeScript */
      selections[lastSelectedIndex] !== null
    ) {
      handleMultiselect(lastSelectedIndex)
    }
  }, [
    multiselect,
    searchterm,
    selections,
    setSelection,
    onChange,
    handleMultiselect,
  ])

  return (
    <>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <StyledPseudoElementContainer
        isFocused={isFocused}
        error={error}
      >
        <StyledSelectContainer
          {...SelectInputProps}
          {...SelectContainerProps}
          id={props.id}
          ref={selectRef}
          error={error}
          zIndex={SelectContainerProps.zIndex}
          onMouseDown={() => setIsFocused(true)}
          onClick={() => {
            if (inputRef.current) inputRef.current.focus()
          }}
          onFocus={() => {
            if (inputRef.current) inputRef.current.focus()
            setIsFocused(true)
          }}
          isFocused={isFocused}
        >
          <StyledTagsContainer
            {...SelectTagsContainerProps}
            isSearchable={isSearchable}
            inputValue={searchterm}
            multiselect={multiselect}
            dropdownIconWidth={`${dropdownIconWidth}px`}
            clearInputIconWidth={`${clearInputIconWidth}px`}
            disabled={
              SelectTagsContainerProps.disabled || disabled
            }
          >
            {/* Single Select */}
            {(!multiselect && selection?.label) || ''}

            {/* Multiselect */}
            {multiselect &&
              selections.map((selection, index) =>
                selection === null ? null : (
                  <StyledMultiselectTag
                    key={selection.uniqueId}
                    deselectionDisabled={
                      selection.multiselectOptions
                        ?.deselectionDisabled || false
                    }
                  >
                    {selection.label}
                    <StyledTagDeselectionButton
                      aria-labelledby={`${selection.uniqueId}-deselect-button`}
                      disabled={
                        selection.multiselectOptions
                          ?.deselectionDisabled || false
                      }
                      onClick={() => handleSelection(index)}
                    >
                      <span
                        hidden
                        id={`${selection.uniqueId}-deselect-button`}
                      >
                        {selection.uniqueId} Deselect Button
                      </span>

                      {SelectDeselectionButtonProps.CustomTagDeselectionIcon ? (
                        cloneElement(
                          <SelectDeselectionButtonProps.CustomTagDeselectionIcon />,
                          {},
                        )
                      ) : (
                        <ImbueSelectTagDeselectionButtonIcon
                          disabled={
                            selection.multiselectOptions
                              ?.deselectionDisabled || false
                          }
                        />
                      )}
                    </StyledTagDeselectionButton>
                  </StyledMultiselectTag>
                ),
              )}

            <StyledSelectInput
              ref={inputRef}
              {...color}
              {...SelectInputProps}
              disabled={disabled}
              multiselect={multiselect}
              onFocus={() => setIsFocused(true)}
              isSearchable={isSearchable}
              value={searchterm}
              onChange={(
                e: ChangeEvent<HTMLInputElement>,
              ) => setSearchterm(e.target.value)}
              onKeyDown={(
                e: KeyboardEvent<HTMLInputElement>,
              ) => {
                if (
                  multiselect &&
                  e.key === 'Backspace' &&
                  !searchterm
                ) {
                  handleTagBackspace()
                } else if (!multiselect && !!selection) {
                  handleClearSelections()
                }
              }}
            />
          </StyledTagsContainer>

          {/* Clear Select Option(s) Button */}
          {!!selection ||
            (selections.find(
              selection =>
                !!selection &&
                !selection.multiselectOptions
                  ?.deselectionDisabled &&
                !selection.multiselectOptions
                  ?.notDeselectable,
            ) && (
              <StyledSelectClearSelectionIconButton
                zIndex={zIndex}
                ref={clearInputIconRef}
                onMouseDown={(
                  e: MouseEvent<HTMLButtonElement>,
                ) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleClearSelections()
                }}
              >
                {SelectClearSelectionIconButtonProps.CustomClearSelectionIcon ? (
                  cloneElement(
                    <SelectClearSelectionIconButtonProps.CustomClearSelectionIcon />,
                    {
                      zIndex,
                    },
                  )
                ) : (
                  <ImbueSelectClearSelectionIcon
                    zIndex={zIndex}
                  />
                )}
              </StyledSelectClearSelectionIconButton>
            ))}

          {/* Dropdown Icon */}
          <StyledSelectDropdownIconButton
            zIndex={zIndex}
            ref={dropdownIconRef}
            onMouseDown={(
              e: MouseEvent<HTMLButtonElement>,
            ) => {
              e.preventDefault()
              e.stopPropagation()
              setIsFocused(!isFocused)
            }}
          >
            {SelectDropdownIconButtonProps.CustomDropdownIcon ? (
              cloneElement(
                <SelectDropdownIconButtonProps.CustomDropdownIcon />,
                {
                  zIndex,
                },
              )
            ) : (
              <ImbueSelectDropdownIcon
                isFocused={isFocused}
                zIndex={zIndex}
              />
            )}
          </StyledSelectDropdownIconButton>

          <MotionConfig
            features={[AnimationFeature, ExitFeature]}
          >
            <AnimatePresence>
              {isFocused && (
                <StyledSelectOptionList
                  onDrag={undefined as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                  onDragEnd={undefined as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                  onDragStart={undefined as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                  onAnimationStart={undefined as any} // eslint-disable-line @typescript-eslint/no-explicit-any
                  animate={{ opacity: 1, height: 'auto' }}
                  initial={{ opacity: 0, height: '0' }}
                  exit={{ opacity: 0, height: '0' }}
                  inputHeight={selectHeight}
                  {...SelectOptionListProps}
                >
                  {/* Empty state for when no options match user's searchterm */}
                  {filteredOptions?.filter(
                    option => option !== null,
                  ).length === 0 &&
                    searchterm && (
                      <>
                        {(() => {
                          if (
                            'NoOptionMatchesSearchtermState' in
                              SelectOptionListProps &&
                            SelectOptionListProps.NoOptionMatchesSearchtermState
                          ) {
                            return SelectOptionListProps.NoOptionMatchesSearchtermState
                          } else if (
                            'noOptionMatchesSearchtermStateText' in
                              SelectOptionListProps &&
                            SelectOptionListProps.noOptionMatchesSearchtermStateText
                          ) {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                {
                                  SelectOptionListProps.noOptionMatchesSearchtermStateText
                                }
                              </StyledSelectOption>
                            )
                          } else {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                No options match the
                                searchterm &quot;
                                {searchterm}
                                &quot;
                              </StyledSelectOption>
                            )
                          }
                        })()}
                      </>
                    )}

                  {/* Empty state for multiselect and single select */}
                  {options.length === 0 &&
                    !optionsAreLoading && (
                      <>
                        {(() => {
                          if (
                            'EmptyState' in
                              SelectOptionListProps &&
                            SelectOptionListProps.EmptyState
                          ) {
                            return SelectOptionListProps.EmptyState
                          } else if (
                            'emptyStateText' in
                              SelectOptionListProps &&
                            SelectOptionListProps.emptyStateText
                          ) {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                {
                                  SelectOptionListProps.emptyStateText
                                }
                              </StyledSelectOption>
                            )
                          } else {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                No options to list
                              </StyledSelectOption>
                            )
                          }
                        })()}
                      </>
                    )}

                  {/* Empty state for multiselect, when all available options are selected */}
                  {multiselect &&
                    !unselected.some(option => !!option) &&
                    selections.some(option => !!option) && (
                      <>
                        {(() => {
                          if (
                            'NoMoreOptionsState' in
                              SelectOptionListProps &&
                            SelectOptionListProps.NoMoreOptionsState
                          ) {
                            return SelectOptionListProps.NoMoreOptionsState
                          } else if (
                            'noMoreOptionsStateText' in
                              SelectOptionListProps &&
                            SelectOptionListProps.noMoreOptionsStateText
                          ) {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                {
                                  SelectOptionListProps.noMoreOptionsStateText
                                }
                              </StyledSelectOption>
                            )
                          } else {
                            return (
                              <StyledSelectOption
                                {...SelectOptionProps}
                                disabled={true}
                              >
                                All options have been
                                selected
                              </StyledSelectOption>
                            )
                          }
                        })()}
                      </>
                    )}

                  {filteredOptions.map(
                    (option: SelectOption | null, index) =>
                      option === null ? null : (
                        <StyledSelectOption
                          key={option.uniqueId}
                          {...SelectOptionProps}
                          multiselect={multiselect}
                          selected={
                            selection
                              ? selection.uniqueId ===
                                option.uniqueId
                              : false
                          }
                          onClick={() =>
                            handleSelection(index)
                          }
                        >
                          {option.label}
                        </StyledSelectOption>
                      ),
                  )}
                </StyledSelectOptionList>
              )}
            </AnimatePresence>
          </MotionConfig>
        </StyledSelectContainer>
      </StyledPseudoElementContainer>
    </>
  )
}

export default Select
