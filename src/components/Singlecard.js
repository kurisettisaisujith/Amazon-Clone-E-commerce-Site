import React from 'react';
import "./singleimg.css";

const Singlecard = (props) => {
  return (
    <div>
      <div className='single'>
      <div className='simg'>
        <div className='sm1'>{props.content1}<br/>
             {props.content12}</div>
        <div className='sm2'>
           
            <img id="smimages21" src={props.img1}/>  
          
             </div>
             <div className='sm3'>{props.content2}</div>
             </div>
             </div>
    </div>
  )
}

export default Singlecard
