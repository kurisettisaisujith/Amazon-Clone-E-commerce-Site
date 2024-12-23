import React from 'react';
import "./single_footer_img.css";

const single_footer_img = (props) => {
  return (
    <div>

   
        <div className='footer_head'> 
    
       
       
      <div className='footer'>
        <div className='fim'>
           <img  id="fimg" src={props.fimg} alt="" />
        </div>
        <div className='fd'>
        <div className='fdtails'>
            <span>{props.fdetails}</span>
        </div></div>
        <div className='fdeals'>
            <span>{props.fdeals}</span>
        </div>
        <div className='Amachoice'>
           <span>{props.fprize}</span>
        </div>
        
        
      </div>
    </div>
    </div>
    
  )
}

export default single_footer_img
