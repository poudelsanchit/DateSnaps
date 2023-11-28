import React, { useState } from 'react'
import { BsImages } from 'react-icons/bs'
import Image1 from "/images/1.jpg"
import Image2 from "/images/2.jpg"
import Image3 from "/images/3.jpg"
import Image4 from "/images/4.jpg"
const ImagePreview = ({imagePreview,isAnimationActive}) => {
  const [isClicked,setIsClicked]= useState(true)
  return (
    <>
     {imagePreview[0] && isAnimationActive &&
     <div className=' transition-all bg-white rounded-md  shadow-2xl translate-x-[-50%] translate-y-[-50%]   fixed bottom-1 md:bottom-10 top-1/2 left-1/2  h-96 w-[20rem] sm:w-[30rem] '>
     <img src={imagePreview[0]?imagePreview[0]:null} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center -rotate-12` : `absolute object-cover  h-40 w-52 left-0 top-0 rounded-sm bg-yellow-700 origin-center -rotate-6 scale-[2] transition-all z-0`} />

    <img src={imagePreview[1]?imagePreview[1]:null} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center -rotate-6` : `absolute object-cover  h-40 w-52 right-0 top-0 rounded-sm bg-yellow-700 origin-center rotate-6 scale-[2] transition-all z-0`} />
   
     <img src={imagePreview[2]?imagePreview[2]:null} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center rotate-12` : `absolute object-cover  h-40 w-52 left-0 bottom-10 rounded-sm bg-yellow-700 origin-center rotate- scale-[2] transition-all`} />
     
   <img src={imagePreview[3]?imagePreview[3]:null} alt="" className={!isClicked ? `absolute object-cover  h-40 w-40 rounded-sm bg-yellow-700 origin-center rotate-6` : `absolute object-cover  h-40 w-52 right-0 rounded-sm bg-yellow-700 origin-center -rotate-3 scale-[2] transition-all z-40 bottom-10`} />

</div>
  }
    </>
   
   
  )
}

export default ImagePreview