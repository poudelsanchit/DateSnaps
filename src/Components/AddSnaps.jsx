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
  };


console.log(imageUrl)
  console.log(isOpen)
  return (
    <>
      <div className='Btn fixed bottom-6 right-16  '>
        <button onClick={TriggerBtn} className='w-12 h-12 flex justify-center items-center rounded-full  bg-slate-900 dark:bg-white text-white   hover:bg-gray-700 text-xl'>
          <FaPlus className='dark:text-black'/>
        </button>
      </div>

      {isOpen ?
        //         <div className=' flex justify-center items-center absolute top-96 right-96  '> 
        //         <div className=' rounded-md p-6 fixed text-white   bg-slate-700 mx-auto w-1/2 text-center '>
        //         <div className=' ml-11 mb-2 flex justify-around'>
        //                     <div>Create Post</div>
        //                     {/* <div>+</div> */}
        //         </div>
        //         <div  className='  p-4'>
        //                     <div className='flex text-left'>
        //                         <div> <img className=' h-8 mr-2 rounded-full' src='https://res.cloudinary.com/amenitiz/image/upload/w_500,dpr_auto,f_auto,q_auto:good/v1670596120/jd8epqybnwi12n8m2znp.png' /></div>
        //                         <div>Sanchit Poudel
        //                             <div className=' rounded-md bg-slate-800 text-white p-1 px-2 w-fit'>Public</div>
        //                         </div>
        //                     </div>
        //                     <div className=' mt-2 mb-2 text-left'><input className=' mt-2  text-2xl w-full bg-transparent border-hidden' type="text" name="" id="" placeholder='whats on your mind? ' /></div>
        //         </div>

        //         <div className=' flex items-end align-center w-full'>
        //             <div className=' mr-52'>Add to your Post</div>


        // <input class=" absolute right-0 w-56 " id="file_input" type="file"/>


        //         </div>



        //         <div className=' mt-3 bg-slate-600 p-4 rounded-sm hover:cursor-pointer active:bg-blue-700'>Post</div>


        //         </div>

        //         </div>
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