import React, { useState } from 'react'
import Stories from 'react-insta-stories'
function InstaStories({ imagePreview, isAnimationActive }) {
    const [isActive, setIsActive] = useState(false);
    console.log(imagePreview)

    const story = [
        {
            url: `${imagePreview[0] ? imagePreview[0] : 'images/1.jpg'}`,
            duration: 2000,
        },
        {
            url: `${imagePreview[1] ? imagePreview[1] : 'images/2.jpg'}`,
            duration: 2000,
        },

        {
            url: `${imagePreview[2] ? imagePreview[2] : 'images/3.jpg'}`,
            duration: 2000,
            header: {
                heading: 'Nabin Kandel',
                subheading: 'Posted 30W ago',
                profileImage: 'https://picsum.photos/100/100',
            }
        },

        {
            url: `${imagePreview[3] ? imagePreview[3] : 'images/4.jpg'}`,
            duration: 2000,
        },



    ]

    return (
        // <div className=' h-screen flex justify-center w-screen fixed bg-opacity-25 backdrop-blur-[2px]'>

        // <div className=' rounded-md mt-12 h-fit border-solid border-8 border-white'>
        //     <Stories
        //     loop={true}
        // stories={story}
        // defaultInterval={8000}
        // width={320}
        // height={488}
        // keyboardNavigation={true}
        // />
        // <div className=' flex  bg-white h-12 font-Arial '>
        //     <div><img src='https://picsum.photos/100/100' className=' absolute h-8 m-2 rounded-full'/></div>
        //     <div className='ml-12 mt-3'> Date Snaps</div>
        //     <div className='ml-40 mt-3 flex  text-slate-700 cursor-pointer'> x </div>
        // </div>
        // </div>

        //  </div>
        <>
            {
                isAnimationActive && !isActive &&
                <div className=' h-screen flex justify-center w-screen fixed '>
                    <div className=' rounded-md mt-12 h-fit border-solid border-8 border-white' >
                        <Stories
                            loop={true}
                            stories={story}
                            defaultInterval={8000}
                            width={320}
                            height={488}
                            keyboardNavigation={true}
                        />
                        <div className=' flex  bg-white h-12 font-Arial '>
                            <div><img src='https://picsum.photos/100/100' className=' absolute h-8 m-2 rounded-full' /></div>
                            <div className='ml-12 mt-3'> Date Snaps</div>
                            <div className='ml-40 mt-3 flex  text-slate-700 cursor-pointer' onClick={() => setIsActive(prev => !prev)}> x </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default InstaStories