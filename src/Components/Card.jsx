import React from 'react'

import ImageCard from './ImageCard'
const Card = ({ card }) => {
    var date = card.date.split(" ");
    return (


        <div className='w-[300px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter 	'>

            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>

                    {`${date[0]} ${date[1]}`}

                    {/* {date[0] + " " + date[1]} */}

                </div>
                <div className='text-xs text-datessecondary'>{`${date[2]}`}</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2  '>
                <div className='origin-center  flex flex-col gap-5  '>


                    <div className="rounded-md h-64 w-full flex flex-col p-2 gap-2 hover:scale-[.99] " style={card.color ? { backgroundColor: card.color } : null}>

                        <div className="title">{card?.title}</div>
                        <div className="date">{`${date[0]} ${date[1]}`}</div>
                        <div className=" relative h-24 w-full cursor-pointer ">
                            {card?.images?.map((images, index) => {
                                return <ImageCard images={images} index={index} key={index} />;
                            })}

                        </div>

                    </div>
                    {card?.file?.images ?
                        <div className="rounded-md h-64 w-full flex flex-col p-2 gap-2 hover:scale-[.99] " style={card.color ? { backgroundColor: card.color } : null}>

                            <div className="title">{card?.title}</div>
                            <div className="date">{`${date[0]} ${date[1]}`}</div>
                            <div className=" relative h-24 w-full cursor-pointer ">
                                {card?.file?.images.map((images, index) => {
                                    return <ImageCard images={images} index={index} key={index} />;
                                })}

                            </div>

                        </div> : null}


                </div>
            </div>
        </div>
    )
}
const tempData = [
    {
        data: ["Sanchit", "Kendrit", "Sachin"]


    },
    {
        data: ["Sachin", "Sanchit", "Kendrit"]

    }
]

export default Card