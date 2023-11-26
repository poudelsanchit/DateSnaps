import React from 'react';
import { useState } from 'react';

export default function TestAdd() {
//   const [open, setOpen] = React.useState(false);

    const [isOpen, setIsOpen] = useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };


  const TriggerBtn = () => {
    setIsOpen(prev => !prev);
  };

//   const handleClose = () => {
//     setOpen(false);
//   };
console.log(isOpen)
  return (
    <>
      <div className='Btn fixed bottom-6 left-16  '>
      <button  onClick={TriggerBtn} className=' rounded-full w-8 bg-slate-900 text-white h-12 font-bold shadow-sm text-xl hover:bg-gray-700'>+</button>
      </div>

        {isOpen?<div className=' font-Arial flex items-stretch bg-grey-lighter mt-10 ml-36 absolute left-0 right-0'> <div className=' rounded-md p-6 fixed text-white   bg-slate-700 mx-auto w-1/2 text-center '>



        <div className=' ml-11 mb-2 flex justify-around'>
                    <div>Create Post</div>
                    {/* <div>+</div> */}
        </div>
        <hr></hr>
        <div  className='  p-4'>
                    <div className='flex text-left'>
                        <div> <img className=' h-8 mr-2 rounded-full' src='https://res.cloudinary.com/amenitiz/image/upload/w_500,dpr_auto,f_auto,q_auto:good/v1670596120/jd8epqybnwi12n8m2znp.png' /></div>
                        <div>Sanchit Poudel
                            <div className=' rounded-md bg-slate-800 text-white p-1 px-2 w-fit'>Public</div>
                        </div>
                    </div>
                    <div className=' mt-2 mb-2 text-left'><input className=' mt-2  text-2xl w-full bg-transparent border-hidden' type="text" name="" id="" placeholder='whats on your mind? ' /></div>
        </div>
        
        <div className=' flex items-end align-center w-full'>
            <div className=' mr-52'>Add to your Post</div>


<input class=" absolute right-0 w-56 " id="file_input" type="file"/>

           
        </div>



        <div className=' mt-3 bg-slate-600 p-4 rounded-sm hover:cursor-pointer active:bg-blue-700'>Post</div>


        </div>
          
        </div>
        
        : null}


      
    </>
  );
}