import React from 'react'
import Popbox from './Popbox';
import data from '../data';

const Card = ({ card }) => {

    const Pop = data.map(item => {return( <div className="popbox">
    <div className="title">{item.Title}</div>
    <div className="date">{item.subdate}</div>
    <div className="image"><img className='img' src={item.img} /></div>
   </div>)})

    var date = card.date.split(" ");
    return (

        <div className='w-[285px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter	'>
            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>
                    {date[0] + " " + date[1]}

                </div>
                <div className='text-xs text-datessecondary'>{date[2]}</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2 '>
            <div>{Pop}</div>
            </div>
            
        </div>
    )
}

export default Card