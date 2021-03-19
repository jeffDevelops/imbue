// Import the correct HTMLAttributes
import { SelectHTMLAttributes } from 'react'

export interface NativeSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  margin: string
  // ...properties
}

export interface StyledNativeSelectProps
  extends NativeSelectProps {
  // ...properties
}
