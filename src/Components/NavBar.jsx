import React, { useEffect, useState } from 'react'
import { FiGithub } from "react-icons/fi";
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
const NavBar = () => {
    const [theme,setTheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):'light');
    const  handleTheme=()=>{
        if(theme==='light')
        {
          setTheme('dark')
        }
        else{
          setTheme('light')
          const html = document.querySelector('html');
          html.classList.remove('dark')
        }
  
      }
      useEffect(()=>{
        localStorage.setItem('theme',theme);
        const localTheme= localStorage.getItem('theme');
        const html = document.querySelector('html');
        html.classList.add(localTheme)
      },[theme])
      

    return (
        <div className='bg-datesprimary dark:bg-datesDarkPrimary z-50 sticky top-0 h-22 flex justify-between text-3xl pt-4 pb-6 font-Roboto text-datessecondary font-medium items-center px-8'>
    
            <div>
                <span className='text-black dark:text-white font-semibold'>Date</span>
                <span className='mb-10 font-semibold'>Snaps</span>
            </div>
            <div className='flex gap-5'>
            <div className='cursor-pointer text-white text-lg bg-datessecondary p-1 rounded-md'>
                <a href="https://github.com/poudelsanchit/DateSnaps" target='_blank'><FiGithub /></a>
            </div>
            <div className='cursor-pointer text-white text-lg bg-datessecondary p-1 rounded-md' onClick={handleTheme}>
            {theme==='light'?
  <BsMoonFill /> : <BsSunFill/>}
            </div>
            </div>
          
        </div>
    )
}

export default NavBar