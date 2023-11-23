import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-datesprimary z-50 sticky top-0 h-14 flex justify-center text-2xl font-Roboto text-datessecondary font-medium items-center'>
            <div className=' w-[80%] '>
                <span className='text-black font-semibold'>Date</span>
                <span className='mb-5 font-semibold'>Snaps</span>
            </div>
        </div>
    )
}

export default NavBar