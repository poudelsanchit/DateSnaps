import React, { useRef } from 'react';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image1 from '/images/1.jpg'
import { BsImage, BsImages } from 'react-icons/bs'
import usePreviewImage from '../hooks/useImagePreview';

export default function TestAdd() {
  const { imageUrl, handleImageChange } = usePreviewImage();
  const fileRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const TriggerBtn = () => {
    setIsOpen(prev => !prev);
  }
  return (
    <>
      <div className='Btn fixed bottom-6 right-5 md:right-10  '>
        <button onClick={TriggerBtn} className='w-12 h-12 flex justify-center items-center rounded-full  bg-slate-900 dark:bg-white text-white   hover:bg-gray-700 text-xl'>
          <FaPlus className='dark:text-black'/>
        </button>
      </div>
      {isOpen ?
        <div className=' pt-10 fixed bg-opacity-25 w-full h-screen backdrop-blur-[2px] flex justify-center  z-50 '>

          <div className=" bg-[#ffffff]  sm:h-max h-[90%] sm:w-4/12 w-full rounded-md shadow-md flex flex-col pb-5 ">
            <div className='flex justify-center items-center w-full pt-4  text-xl h-max'>
              <div className='font-Roboto tracking-tighter border-b-[1px]  border-datessecondary w-full flex justify-between items-center'>
                <div></div>
                <div className='font-bold'>Create Snap</div>
                <div className=' cursor-pointer hover:bg-white rounded-sm pr-4 ' onClick={TriggerBtn}><IoClose /></div>
              </div>
            </div>
            <div className='p-4'>
              <div className='flex  items-center gap-2'>
                <img src={Image1} alt="" className='w-16 h-16 object-cover rounded-full' />
                <div className='flex flex-col'>
                  <div className='font-Roboto font-bold text-lg'>Sanchit Poudel</div>
                      <input type="text" className='  focus:outline-none text-lg placeholder:text-lg' placeholder='title for your snap...' autoFocus  />
                </div>

              </div>
              <div className='flex flex-col'>
              
              {imageUrl ?            
              <img src={imageUrl} alt=""  className='h-60 w-full object-contain rounded-md mt-2'/>
               : null}

              <div className='pl-16 pt-5 pr-5 flex justify-between'>
                <BsImages className='text-2xl cursor-pointer' onClick={()=>fileRef.current.click()}/>
                <div className='bg-black w-32 h-10 rounded text-white flex justify-center items-center cursor-pointer' onClick={()=>setIsOpen(prev=>!prev)}>Upload</div>
              </div>
              <input type="file" className='hidden' ref={fileRef} onChange={handleImageChange} />
              </div>

            

            </div>
            

          </div>
        </div>

        : null}



    </>
  );
}