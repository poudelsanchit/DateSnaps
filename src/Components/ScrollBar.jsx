
import React from 'react'
import { motion,useScroll, useSpring } from 'framer-motion'
const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=' bg-[#dee1da] dark:bg-datessecondary  shadow-2xl rounded-full translate-x-[-50%] translate-y-[-50%]   fixed bottom-1 md:bottom-10 right-1/2 left-1/2  h-3 w-[20rem] sm:w-[30rem] '>
     <div className='relative w-full h-full'>
     <motion.div
        className="progress-bar rounded-full h-full origin-[0] absolute bg-black dark:bg-white left-0 right-0"
        style={{  scaleX }}
      >
        </motion.div>
     </div>
      

    </div>
  )
}

export default ScrollBar