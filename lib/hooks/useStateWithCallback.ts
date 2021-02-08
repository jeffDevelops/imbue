import { useRef, useState, useEffect } from 'react'

type Callback<StateType> = (newState: StateType) => void

export const useStateWithCallback = <StateType>(
  initialValue: StateType,
): [
  StateType,
  (
    state: StateType,
    callback?: Callback<StateType>,
  ) => void,
] => {
  const callbackRef = useRef<null | Callback<StateType>>(
    null,
  )

  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(value)

      callbackRef.current = null
    }
  }, [value])

  const setValueWithCallback = (
    newValue: StateType,
    callback?: Callback<StateType>,
  ) => {
    if (callback) {
      callbackRef.current = callback
    }

    return setValue(newValue)
  }

  return [value, setValueWithCallback]
}
