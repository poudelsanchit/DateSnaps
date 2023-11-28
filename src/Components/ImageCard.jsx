import React from 'react'

const ImageCard = ({images,index,handleDisplayImage}) => {
  return (
    <img src={images} className={
    index===0?'absolute object-cover  h-44 w-full rounded-lg bg-yellow-700 origin-center  rotate-2'
    :index===1?'absolute object-cover  h-44 w-full rounded-lg bg-yellow-700 origin-center  '
    :index===2?'absolute object-cover  h-44 w-full rounded-lg bg-yellow-700 origin-center -rotate-2'
    :'absolute object-cover  h-44 w-full rounded-lg bg-yellow-700 origin-center -rotate-3'   }/>
  )
}

export default ImageCard