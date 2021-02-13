import React, {
  useCallback,
  useState,
  forwardRef,
  useRef,
  ChangeEvent,
  useLayoutEffect,
} from 'react'
import Label from '../Label/Label'
import Flex from '../Flex/Flex'
import {
  RelativeContext,
  StyledTextarea,
  InputErrorMessage,
} from './styled'
import { TextareaProps } from './types'
import { Color } from '../../utility/Color/types'
import {
  useStateWithCallback,
  useCombinedRefs,
} from '../../hooks'

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      LabelProps,
      label,
      margin,
      id,
      resize,
      ...props
    }: TextareaProps,
    ref,
  ) => {
    const localRef = useRef<HTMLTextAreaElement>(null)
    const combinedRef = useCombinedRefs(localRef, ref)
    const [
      userDefinedMinHeight,
      setUserDefinedMinHeight,
    ] = useState<null | string>(null)
    const [
      textareaHeight,
      setTextareaHeight,
    ] = useStateWithCallback<string | null>(null)

    const [textareaWidth, setTextareaWidth] = useState<
      string | null
    >(null)

    // Keep track of whether the user is resizing, so that the width transition can be disabled
    const [isResizing, setIsResizing] = useState(false)

    // Keep track of whether the user has adjusted the textarea size
    const [hasBeenResized, setHasBeenResized] = useState(
      false,
    )

    // 2) handle the resize
    const handleResize = useCallback(() => {
      if (!combinedRef.current) {
        window.removeEventListener(
          'mousemove',
          handleResize,
        )
        return
      }

      const currentHeight = `${
        (combinedRef.current as HTMLTextAreaElement).getBoundingClientRect()
          .height
      }px`

      const currentWidth = `${
        (combinedRef.current as HTMLTextAreaElement).getBoundingClientRect()
          .width
      }px`

      if (
        combinedRef.current &&
        (currentHeight !== userDefinedMinHeight ||
          currentWidth !== textareaWidth)
      ) {
        setUserDefinedMinHeight(currentHeight)
        setTextareaWidth(currentWidth)
        setHasBeenResized(true)
      } else {
        window.removeEventListener(
          'mousemove',
          handleResize,
        )
      }
    }, [userDefinedMinHeight, textareaWidth])

    // 1) On mousedown, detect resize
    const handlePotentialResize = useCallback(() => {
      if (combinedRef.current) {
        combinedRef.current.blur()
      }

      if (resize?.direction !== 'none' || !!resize) {
        window.addEventListener('mousemove', handleResize)
        // Disable width transitions
        setIsResizing(true)
      }
    }, [userDefinedMinHeight, textareaWidth, resize])

    // 3) On mouseup, cancel the resize listener
    const removeResizeListener = () => {
      setIsResizing(false)
      window.removeEventListener('mousemove', handleResize)
    }

    // Initialize the height and width on mount, as soon as the height and width are known
    useLayoutEffect(() => {
      if (combinedRef.current) {
        setUserDefinedMinHeight(
          `${
            (combinedRef.current as HTMLTextAreaElement).getBoundingClientRect()
              .height
          }px`,
        )
        setTextareaWidth(
          `${
            (combinedRef.current as HTMLTextAreaElement).getBoundingClientRect()
              .width
          }px`,
        )
      }
    }, [])

    // Set the color based on which props are passed
    let color: Color | {} = {}
    if ('meaning' in props || 'hierarchy' in props) {
      color = {
        ...(props.meaning
          ? { meaning: props.meaning }
          : {
              hierarchy: props.hierarchy,
            }),
      }
    }

    const adjustHeightForText = useCallback(() => {
      if (!combinedRef.current) return
      const current = combinedRef.current as HTMLTextAreaElement

      const paddingTop = parseInt(
        getComputedStyle(current).paddingTop.replace(
          'px',
          '',
        ),
      )

      if (!hasBeenResized) {
        setTextareaHeight('auto', () => {
          if (combinedRef.current) {
            const newHeight = `${
              combinedRef.current.scrollHeight + paddingTop
            }px`
            setTextareaHeight(newHeight)
            setUserDefinedMinHeight(newHeight)
          }
        })
      }
    }, [hasBeenResized])

    useLayoutEffect(() => {
      adjustHeightForText()
    }, [props.value])

    return (
      <Flex
        position="relative"
        column
        alignItems="flex-start"
        margin={margin}
      >
        {label && (
          <Label htmlFor={id} {...LabelProps}>
            {label}
          </Label>
        )}
        <RelativeContext
          isResizing={isResizing}
          width={textareaWidth}
          height={textareaHeight}
          error={props.error}
          {...color}
        >
          <StyledTextarea
            maxHeight={(() => {
              if (typeof resize === 'boolean') return 'none'
              return resize?.maxHeight || 'none'
            })()}
            maxWidth={(() => {
              if (typeof resize === 'boolean') return 'none'
              return resize?.maxWidth || 'none'
            })()}
            minHeight={(() => {
              if (typeof resize === 'boolean') return 'none'
              return resize?.minHeight || '0'
            })()}
            minWidth={(() => {
              if (typeof resize === 'boolean') return 'none'
              return resize?.minWidth || '0'
            })()}
            resize={resize?.direction || 'none'}
            width={textareaWidth}
            height={textareaHeight}
            onChange={(
              e: ChangeEvent<HTMLTextAreaElement>,
            ) => {
              e.persist()
              if (props.onChange) {
                props.onChange(e)
              } else {
                adjustHeightForText()
              }
            }}
            onMouseDown={handlePotentialResize}
            onMouseUp={removeResizeListener}
            ref={combinedRef}
            id={id}
            {...props}
          />
          {props.error && (
            <InputErrorMessage>
              {props.error}
            </InputErrorMessage>
          )}
        </RelativeContext>
      </Flex>
    )
  },
)

export default Textarea
