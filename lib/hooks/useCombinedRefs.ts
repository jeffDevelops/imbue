import {
  useEffect,
  useRef,
  RefObject,
  ForwardedRef,
} from 'react'

/**
 * Generic custom hook allowing the use of multiple refs.
 * Use case: when a ref is forwarded from the parent, but
 * is also needed locally.
 */
export const useCombinedRefs = <
  ElementType extends HTMLElement
>(
  ...refs: (
    | RefObject<ElementType>
    | ForwardedRef<ElementType>
  )[]
) => {
  const targetRef = useRef<null | ElementType>(null)

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ;(ref as any).current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}
