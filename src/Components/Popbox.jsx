import React from 'react'
import "./style/popbox.css"
function Popbox(props) {
  return (
    <div>
        
       <div className="popbox">
        <div className="title">{props.Title}</div>
        <div className="date">{props.date}</div>
        <div className="image"><img className='img' src={props.img} /></div>
       </div>



    </div>
  )
}

export default Popbox