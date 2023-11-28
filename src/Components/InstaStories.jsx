import React from 'react'
import Stories from 'react-insta-stories'
function InstaStories() {

    const story = [
        {
            url: "https://date-snaps-pearl.vercel.app/images/4.jpg",
            duration: 2000,
        },
        {
            url: "https://date-snaps-pearl.vercel.app/images/3.jpg",
            duration: 2000,
        },
       
        {
            url: 'https://date-snaps-pearl.vercel.app/images/1.jpg',
            duration: 5000,
            header: {
                heading: 'Nabin Kandel',
                subheading: 'Posted 30W ago',
                profileImage: 'https://picsum.photos/100/100',
            }},

            {
                url: "https://date-snaps-pearl.vercel.app/images/3.jpg",
                duration: 2000,
            },



    ]

  return (
    // <div className=' bg-opacity-25 backdrop-blur-[2px]  '>
    
    <div className=' bg-opacity-25  fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] backdrop-blur-sm'><Stories  className=' rounded-md'
    
    loop={true}
    stories={story}
    defaultInterval={8000}
    width={320}
    height={488}
    keyboardNavigation={true}
    /></div>

    // </div>
  )
}

export default InstaStories