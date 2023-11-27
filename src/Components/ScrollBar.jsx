
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
    <div className='  fixed bottom-10 right-[30rem]  h-3 w-[30rem] bg-[#dee1da] dark:bg-datessecondary  shadow-2xl rounded-full  flex justify-center items-center'>
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