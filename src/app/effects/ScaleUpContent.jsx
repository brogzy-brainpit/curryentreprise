import { useInView,motion } from 'framer-motion'
import React, { useRef } from 'react'

function ScaleUpContent({children,duration=0.50,delay=0.04}) {
  const scaleIt= useRef(null)
      const inView= useInView(scaleIt,{once:false})

      const scaleUp={
        initial:{scale:"0"},
    enter:{scale:1,transition:{duration,delay,ease: [0.33, 1, 0.68, 1]}},
    exit:{scale:"0"}
     
  }
  return (
   <motion.div variants={scaleUp}  initial="initial" animate="enter" exit="exit">
{children}
          </motion.div>
  )
}

export default ScaleUpContent