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

const ImbueIndeterminate = () => (
  <motion.svg
    width="100%"
    height="100%"
    viewBox="0 0 81 10"
    version="1.1"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="1.5"
  >
    <g transform="matrix(1,0,0,1,-405.48,-273.943)">
      <g transform="matrix(1.02373,0,0,1,28.3648,-68.8656)">
        <motion.path
          variants={variants}
          transition={{
            duration: 0.3,
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          d="M373.257,347.808L442.337,347.808"
          fill="none"
          strokeWidth="10px"
        />
      </g>
    </g>
  </motion.svg>
)

export default ImbueIndeterminate
