import React from 'react'
import data from '../data';
import Draft from '../Draft';

const Card = ({ card }) => {
    console.log(card)

    console.log(card);


    // var date = card.date.split(" ");

    return (

        <div className='w-[285px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter	'>
            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>
                    Nov 16
                    {/* {date[0] + " " + date[1]} */}

                </div>
                <div className='text-xs text-datessecondary'>2023</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2 '>
                <div>
                    <div className="popbox">
                        <div className="title">{card?.text?.title}</div>
                        <div className="date">{card.subdate}</div>
                        <div className="image"><img className='img' src={card.img} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card