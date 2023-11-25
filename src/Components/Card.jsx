import React from 'react'

const Card = ({ card }) => {
    console.log(card);


            if (card && card.date) {
            const dateObject = new Date(card.date);
        
            // Extract year and month
            var year = dateObject.getFullYear();
            var month = dateObject.toLocaleString('default', { month: 'long' });
            var day = dateObject.getDate();
            }
  

    return (

        <div className='w-[285px]  flex flex-col  text-base font-Sans-serif font-medium tracking-tighter	'>
            <div className='flex flex-col items-center border-b-[1px] border-border h-max  w-full pb-4	'>
                <div className='font-meduim'>
                 {month} {day}
                </div>
                <div className='text-xs text-datessecondary'>{year}</div>

            </div>
            <div className='h-full border-r-[1px] border-border pl-1 pr-1 pt-2 '>
                <div>
                    <div className="  rounded-md pt-[6px] px-[14px] pb-[12px] m-[4px]" style={card.color?{backgroundColor:card.color}:null} >
                        <div className="title">{card.title}</div>
                        <div className="date">{month} {day}</div>
                        <div className="image"><img className='img' src={card.img} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card