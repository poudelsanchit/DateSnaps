import React from 'react'
import { motion, useTransform, useScroll } from "framer-motion";
const Card = ({ card }) => {
    var date = card.date.split(" ");
    return (

        <div className='w-[285px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter	'>

            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>

                    {`${date[0]} ${date[1]}`}

                    {/* {date[0] + " " + date[1]} */}

                </div>
                <div className='text-xs text-datessecondary'>{`${date[2]}`}</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2 '>
                <div>


                    <div className="  rounded-md pt-[6px] px-[14px] pb-[12px] m-[4px]" style={card.color ? { backgroundColor: card.color } : null}>
                        
                        <div className="title">{card?.title}</div>
                        <div className="date">{`${date[0]} ${date[1]}`}</div>
                        <div className="image"><img className='img' src={card.img} /></div>
                    </div>
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