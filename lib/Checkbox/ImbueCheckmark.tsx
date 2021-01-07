import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: {
    pathLength: 0,
    opacity: 1,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
  },
}

const ImbueCheckmark = () => {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 81 60"
      version="1.1"
      xmlSpace="preserve"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <g transform="matrix(1,0,0,1,-401.977,-144.84)">
        <motion.path
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.3,
          }}
          exit="hidden"
          d="M406.977,177.458L428.528,199.009L477.697,149.84"
          fill="none"
          strokeWidth="10px"
        />
      </g>
    </motion.svg>
  )
}

export default ImbueCheckmark
