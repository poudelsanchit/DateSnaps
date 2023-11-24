import React from 'react'
import { FiGithub } from "react-icons/fi";

const NavBar = () => {
    return (
        <div className='bg-datesprimary z-50 sticky top-0 h-22 flex justify-center text-3xl pt-4 pb-6 font-Roboto text-datessecondary font-medium items-center'>
            <div className=' w-[84%] '>
                <span className='text-black font-semibold'>Date</span>
                <span className='mb-10 font-semibold'>Snaps</span>
            </div>
            <div className='cursor-pointer text-white text-lg bg-datessecondary p-1 rounded-md'>
                <a href="https://github.com/poudelsanchit/DateSnaps" target='_blank'><FiGithub /></a>
                </div>
        </div>
    )
}

export default NavBar