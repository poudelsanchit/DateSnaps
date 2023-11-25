import React from 'react'
import Image1 from "/images/1.jpg"
import Image2 from "/images/2.jpg"
import Image3 from "/images/3.jpg"
import Image4 from "/images/4.jpg"

import { motion } from 'framer-motion'
const PhotoTest = () => {
    return (
        <div className='w-full h-full '>
            <div className='flex justify-center items-center  '>
                <img src={Image1} alt="" className=' object-cover w-96 h-96 rounded-md absolute top-40 origin-center -rotate-12' />
                <img src={Image2} alt="" className=' object-cover w-96 h-96 rounded-md absolute top-40  origin-center -rotate-6' />
                <img src={Image3} alt="" className=' object-cover w-96 h-96 rounded-md absolute top-40  origin-center -rotate-0' />
                <img src={Image4} alt="" className=' object-cover w-96 h-96 rounded-md absolute top-40  origin-center rotate-6' />


            </div>



        </div>
    )
}

export default PhotoTest