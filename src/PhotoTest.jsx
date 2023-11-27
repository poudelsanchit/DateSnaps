import React, { useState } from 'react'
import Image1 from "/images/1.jpg"
import Image2 from "/images/2.jpg"
import Image3 from "/images/3.jpg"
import Image4 from "/images/4.jpg"
import { motion,useScroll } from 'framer-motion'
const PhotoTest = () => {
    const [isClicked, setIsClicked] = useState(false);
    const { scrollYProgress } = useScroll();

    const triggerClicked = () => {
        setIsClicked(prev => !prev)
    }
    return (
        // <div className='w-full h-screen flex justify-center items-center  '>
        //     <div className={!isClicked ? 'flex h-[50rem] w-[50rem] justify-center items-center origin-center cursor-pointer hover:scale-[.99]  relative ' : 'flex h-[30rem] w-[30rem] justify-center items-center origin-center cursor-pointer hover:scale-[.99]  relative '} onClick={triggerClicked}>

        //         <img src={Image1} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center -rotate-12` : `absolute object-cover  h-40 w-52 left-0 top-0 rounded-sm bg-yellow-700 origin-center -rotate-6 scale-[2] transition-all z-0`} />

        //         <img src={Image2} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center -rotate-6` : `absolute object-cover  h-40 w-52 right-0 top-0 rounded-sm bg-yellow-700 origin-center rotate-6 scale-[2] transition-all z-0`} />
               
        //         <img src={Image4} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center rotate-12` : `absolute object-cover  h-40 w-52 left-0 bottom-10 rounded-sm bg-yellow-700 origin-center rotate- scale-[2] transition-all`} />
                 
        //         <img src={Image3} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center rotate-6` : `absolute object-cover  h-40 w-52 right-0 rounded-sm bg-yellow-700 origin-center -rotate-3 scale-[2] transition-all z-40 bottom-10`} />

        //     </div>



        //     {/* <img src={Image1} alt="" className=' object-cover w-96 h-96 rounded-md absolute  origin-center -rotate-12' />
        //         <img src={Image2} alt="" className=' object-cover w-96 h-96 rounded-md absolute  origin-center -rotate-6' />
        //         <img src={Image3} alt="" className=' object-cover w-96 h-96 rounded-md absolute  origin-center -rotate-0' />
        //         <img src={Image4} alt="" className=' object-cover w-96 h-96 rounded-md absolute  origin-center rotate-6' /> */}





        // </div>
        <>
       
      <h1>
        <code>useScroll</code> demo
      </h1>
       </>
    )
}

export default PhotoTest