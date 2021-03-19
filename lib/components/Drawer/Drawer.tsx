import React, {
  FC,
  ReactNode,
  ReactHTML,
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  createContext,
  useContext,
  MouseEvent,
  useLayoutEffect,
} from 'react'
import { DrawerProps } from './types'
import {
  StyledDrawer,
  HorizontalHandle,
  VerticalHandle,
  Content,
  Scrollable,
} from './styled'
import { withTheme } from 'styled-components'
import { Theme } from '../../Theme'
import { useOnClickOutside } from '../../hooks'
import throttle from 'lodash/throttle'

export interface DrawerContextValue {
  width: null | number // px; null on initial render
  height: null | number // px; null on initial render

  negativeSpace: {
    width: number | null // px; null on initial render
    height: number | null // px; null on initial render
  }

  isDragging: boolean
}

const drawerContextInitialValue: DrawerContextValue = {
  width: null,
  height: null,
  negativeSpace: {
    width: null,
    height: null,
  },
  isDragging: false,
}

export const DrawerContext = createContext<
  DrawerContextValue
>(drawerContextInitialValue)

export interface Props extends DrawerProps {
  theme: Theme
  children: ReactNode
  as?: keyof ReactHTML
}

const Drawer: FC<Props> = ({
  onWidthChange,
  as = 'aside',
  children,
  theme,
  origin = 'left',
  initialOpenExtent = 0,
  minOpenExtent = 0,
  maxOpenExtent = 'fullLength',
  snapping,
  length = '100%',
  position = 'fixed',
  relativeTo = 'window',
  ContentProps = {
    origin,
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  zIndex = {
    focused: 9999,
    blurred: 1,
  },
  usePanelDesign = false,
  edgesIgnoringSafeArea,
  ...props
}: Props) => {
  /**
   * 'vertical' = 'opens top-to-bottom/bottom-to-top';
   * 'horizontal' = 'opens left-to-right/right-to-left'
   */
  const orientation =
    origin === 'top' || origin === 'bottom'
      ? 'vertical'
      : 'horizontal'

  const snapTolerance = snapping?.snapTolerance || 25

  const drawerRef = useRef<HTMLElement>(null)
  const [initialRender, setInitialRender] = useState(true)
  useEffect(() => {
    setInitialRender(false)
  }, [])

  const snapLowerBound = useMemo(() => {
    if (!snapping || snapping.snapExtent === undefined)
      return undefined
    const lowerBound = snapping.snapExtent - snapTolerance
    return lowerBound > 0 ? lowerBound : 0
  }, [snapping, snapTolerance])

  const snapUpperBound = useMemo(() => {
    if (!snapping || snapping.snapExtent === undefined)
      return undefined
    if (!initialRender && !drawerRef.current)
      return undefined

    const upperBound = snapping.snapExtent + snapTolerance
    return upperBound
  }, [snapping, snapTolerance, drawerRef, initialRender])

  const [openExtent, setOpenExtent] = useState(
    initialOpenExtent,
  )
  const [isDragging, setIsDragging] = useState(false)
  const [isSnapping, setIsSnapping] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Mouse position (only updated when drawer slides in respective plane)
  const [mouseX, setMouseX] = useState<null | number>(null)
  const [mouseY, setMouseY] = useState<null | number>(null)

  const [windowWidth, setWindowWidth] = useState<
    number | null
  >(null)
  const [windowHeight, setWindowHeight] = useState<
    number | null
  >(null)
  const [contextValue, setContextValue] = useState<
    DrawerContextValue
  >(drawerContextInitialValue)

  // Listen for drag events
  useEffect(() => {
    if (isDragging || isAnimating) {
      // Name functions so that eventListeners can be garbage collected
      const updateMouseX = throttle(
        (e: globalThis.MouseEvent) => {
          e.preventDefault()

          // Set the will-change property
          document.body.style.willChange = 'width'

          const relativeMouseX = Math.floor(
            relativeTo === 'parent'
              ? e.pageX -
                  (drawerRef?.current?.parentElement?.getBoundingClientRect()
                    .x || 0)
              : e.pageX,
          )

          if (
            relativeMouseX >= minOpenExtent ||
            relativeMouseX <= maxOpenExtent
          )
            setMouseX(relativeMouseX)
        },
        1000 / 30,
      )

      const updateMouseY = throttle(
        (e: globalThis.MouseEvent) => {
          e.preventDefault()

          // Set the will-change property
          document.body.style.willChange = 'height'

          const relativeMouseY = Math.floor(
            relativeTo === 'parent'
              ? e.pageY +
                  (drawerRef?.current?.parentElement?.getBoundingClientRect()
                    .y || 0)
              : e.pageY,
          )

          if (
            relativeMouseY >= minOpenExtent ||
            relativeMouseY <= maxOpenExtent
          )
            setMouseY(relativeMouseY)
        },
        1000 / 30,
      )

      const cancelDrag = () => {
        setIsDragging(false)
        document.body.style.cursor = 'default'
        document.body.style.willChange = 'auto'
      }

      // Update the appropriate coordinate
      if (orientation === 'vertical') {
        document.body.style.cursor =
          theme.drawer.handle.cursorY
        document.addEventListener('mousemove', updateMouseY)
      } else {
        document.body.style.cursor =
          theme.drawer.handle.cursorX
        document.addEventListener('mousemove', updateMouseX)
      }

      // Cancel updates when the user releases the mouse
      document.addEventListener('mouseup', cancelDrag)

      // Remove event listeners on unmount
      return () => {
        document.removeEventListener(
          'mousemove',
          updateMouseX,
        )
        document.removeEventListener(
          'mousemove',
          updateMouseY,
        )
        document.removeEventListener('mouseup', cancelDrag)
      }
    }
  }, [
    // isAnimating,
    isDragging,
    relativeTo,
    minOpenExtent,
    maxOpenExtent,
    orientation,
    theme.drawer.handle.cursorX,
    theme.drawer.handle.cursorY,
  ])

  // Update the layout if the user is dragging
  useLayoutEffect(() => {
    if (!isDragging) return

    /**
     *  The amount the drawer is allowed to open, given no maxOpenExtent
     */
    let containerLength: number | undefined
    /**
     *  Because the consumer can specify 'fullLength', this var refers to the calculated pixel value of the fullLength
     */
    let derivedMaxOpenExtent: number | undefined

    // Determine the value of the above variables:
    if (relativeTo === 'window') {
      const length =
        orientation === 'vertical'
          ? window.innerHeight
          : window.innerWidth

      containerLength = length

      derivedMaxOpenExtent = (() => {
        if (maxOpenExtent === 'fullLength') return length

        // Return the smaller of the window size and the min passed in props
        return Math.min(length, maxOpenExtent)
      })()
    } else {
      const parentRect = drawerRef?.current?.parentElement?.getBoundingClientRect()
      const length =
        orientation === 'vertical'
          ? parentRect?.height
          : parentRect?.width

      containerLength = length

      derivedMaxOpenExtent = (() => {
        if (maxOpenExtent === 'fullLength') return length
        if (!length) return undefined

        // Return the smaller of the container size and the min passed in props
        return Math.min(length, maxOpenExtent)
      })()
    }

    /**
     * Don't update the DOM ("bail") if the mouse position exceeds the bounds of the
     * drawer, or if those bounds weren't successfully calculated because
     * the ref wasn't yet assigned, or within the tolerance bounds of a snap
     * point.
     */

    if (containerLength === undefined) return
    if (!derivedMaxOpenExtent) return

    const shouldBail = (
      mousePosition: number | null,
      containerLength: number,
      snapExtent: number | null,
    ): boolean =>
      snapExtent !== null ||
      !mousePosition || // first render
      mousePosition < minOpenExtent || // user has moved mouse beyond min width
      mousePosition > maxOpenExtent || // user has moved mouse beyond max width
      mousePosition > containerLength // user has moved mouse beyond bounds of container

    /**
     * The drawer should snap either if it's in the tolerance range of
     * the min (i.e. fully closed if min is 0) or max (i.e., fully open)
     * @param mousePosition
     */
    const determineSnapExtent = (
      mousePosition: number,
      containerLength: number,
    ): null | number => {
      let extent: number | null = null

      const max =
        maxOpenExtent === 'fullLength'
          ? containerLength
          : maxOpenExtent

      // Within tolerance range of maxOpenExtent
      if (mousePosition > max - snapTolerance) extent = max

      // Within tolerance range of minOpenExtent
      if (mousePosition < minOpenExtent + snapTolerance)
        extent = minOpenExtent

      const withinToleranceOfCustomExtent =
        // Consumer-specified snapping enabled
        !!snapping &&
        snapUpperBound !== undefined &&
        snapLowerBound !== undefined &&
        // Mouse position within bounds of consumer-specified snapExtent
        mousePosition < snapUpperBound &&
        mousePosition > snapLowerBound

      if (
        withinToleranceOfCustomExtent &&
        snapping?.snapExtent
      )
        extent = snapping.snapExtent

      if (extent === null) {
        setIsSnapping(false)
        return null
      }

      setIsSnapping(true)
      setOpenExtent(extent)
      return extent
    }

    switch (origin) {
      case 'top': {
        if (!mouseY) return

        const snapExtent = determineSnapExtent(
          mouseY,
          containerLength,
        )

        if (shouldBail(mouseY, containerLength, snapExtent))
          return
        return setOpenExtent(mouseY)
      }
      case 'bottom': {
        if (!mouseY) return

        const invertedMouseY = containerLength - mouseY
        const snapExtent = determineSnapExtent(
          invertedMouseY,
          containerLength,
        )

        if (
          shouldBail(
            invertedMouseY,
            containerLength,
            snapExtent,
          )
        )
          return
        return setOpenExtent(containerLength - mouseY)
      }

      case 'left': {
        if (!mouseX) return

        const snapExtent = determineSnapExtent(
          mouseX,
          containerLength,
        )

        if (shouldBail(mouseX, containerLength, snapExtent))
          return

        return setOpenExtent(mouseX)
      }
      case 'right': {
        if (!mouseX) return

        const invertedMouseX = containerLength - mouseX
        const snapExtent = determineSnapExtent(
          invertedMouseX,
          containerLength,
        )

        if (
          shouldBail(
            invertedMouseX,
            containerLength,
            snapExtent,
          )
        )
          return
        return setOpenExtent(containerLength - mouseX)
      }
    }
  }, [
    isDragging,
    isAnimating,
    mouseX,
    mouseY,
    origin,
    orientation,
    relativeTo,
    snapping,
    snapLowerBound,
    snapUpperBound,
    snapTolerance,
    minOpenExtent,
    maxOpenExtent,
  ])

  // Subscribe to viewport resizes and record the dimensions, so that negative space can be calculated
  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }

    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const emitChanges = useCallback(() => {
    if (drawerRef?.current) {
      const drawerHeight = drawerRef.current.getBoundingClientRect()
        .height
      const drawerWidth = drawerRef.current.getBoundingClientRect()
        .width

      const newContextValue = {
        height: drawerHeight,
        width: drawerWidth,
        negativeSpace: {
          width:
            relativeTo === 'window'
              ? windowWidth
                ? windowWidth - drawerWidth
                : null
              : drawerRef.current.parentElement?.getBoundingClientRect()
                  .height || null,
          height:
            relativeTo === 'window'
              ? windowHeight
                ? windowHeight - drawerHeight
                : null
              : drawerRef.current.parentElement?.getBoundingClientRect()
                  .width || null,
        },
        isDragging: isAnimating || isSnapping || isDragging,
      }

      onWidthChange && onWidthChange(newContextValue)
      setContextValue(newContextValue)
    }
  }, [
    isAnimating,
    drawerRef,
    mouseX,
    mouseY,
    windowWidth,
    windowHeight,
    relativeTo,
  ])

  // getBoundingClientRect of container on updates to supply context consumers
  useLayoutEffect(() => {
    emitChanges()
  }, [
    isAnimating,
    drawerRef,
    mouseX,
    mouseY,
    windowWidth,
    windowHeight,
    relativeTo,
    emitChanges,
  ])

  // Continue to lift updates to parents and emit changes to subscribed consumers while animation runs
  useLayoutEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (isAnimating) {
      interval = setInterval(() => {
        emitChanges()
      }, 16.67) // 60 FPS
    } else {
      interval && clearInterval(interval)
    }
    return () => {
      interval && clearInterval(interval)
    }
  }, [isAnimating])

  /**
   * Ensure that the user can close the drawer if other elements are on the page
   */
  const assumeFocus = () => {
    if (drawerRef?.current) {
      drawerRef.current.style.zIndex = `${zIndex.focused}`
    }
  }

  /**
   * Relinquish "focus" when the user clicks outside of the drawer
   */
  const relinquishFocus = useCallback(() => {
    if (drawerRef?.current) {
      drawerRef.current.style.zIndex = `${zIndex.blurred}`
    }
  }, [zIndex])

  useOnClickOutside(drawerRef, relinquishFocus)

  return (
    <DrawerContext.Provider value={contextValue}>
      <StyledDrawer
        onAnimationComplete={() => setIsAnimating(false)}
        onAnimationStart={() => setIsAnimating(true)}
        usePanelDesign={usePanelDesign}
        animate={{
          [orientation === 'vertical'
            ? 'height'
            : 'width']: openExtent,
        }}
        onMouseDown={assumeFocus}
        onBlur={relinquishFocus}
        ref={drawerRef}
        origin={origin}
        openExtent={openExtent}
        minOpenExtent={minOpenExtent}
        maxOpenExtent={maxOpenExtent}
        position={position}
        length={length}
        isSnapping={isSnapping}
        zIndex={zIndex}
        {...props}
      >
        <Content
          {...ContentProps}
          edgesIgnoringSafeArea={!!edgesIgnoringSafeArea}
        >
          <Scrollable {...ContentProps}>
            {children}
          </Scrollable>
        </Content>

        {origin === 'top' || origin === 'bottom' ? (
          <HorizontalHandle
            isSnapping={isSnapping}
            openExtent={openExtent}
            onMouseDown={(e: MouseEvent<HTMLElement>) => {
              e.preventDefault()
              setIsDragging(true)
            }}
            origin={origin}
          />
        ) : (
          <VerticalHandle
            isSnapping={isSnapping}
            openExtent={openExtent}
            onMouseDown={(e: MouseEvent<HTMLElement>) => {
              e.preventDefault()
              setIsDragging(true)
            }}
            origin={origin}
          />
        )}
      </StyledDrawer>
    </DrawerContext.Provider>
  )
}

/** Gets the most immediate parent drawer and returns its, and its negative space's, dimensions */
export const useDrawerDimensions = () => {
  const drawerDimensions = useContext(DrawerContext)

  if (drawerDimensions === undefined) {
    throw new Error(
      'Imbue Error: useDrawerDimensions must be within the render hierarchy of a Drawer component',
    )
  }

  return drawerDimensions
}

export default withTheme(Drawer)
