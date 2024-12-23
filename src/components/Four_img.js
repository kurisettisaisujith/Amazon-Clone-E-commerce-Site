import React from 'react';
import "./fourcards.css";

const Four_img = (props) => {
  return (
    <div>
        <div className='four'>
      <div className='f'>
        <div className='f1'>{props.content1}<br/>
        {props.content12}</div>
        <div className='f2'>
            <div className='f21'>
            <img id="f21img" src={props.img1}/>  
            <span>{props.cimg1}</span>
             </div>
                <div className='f21' id="f21img1">
                <img  id="f21img"  src={props.img2}/>
                <span>{props.cimg2}</span>
                </div>
                <div  className='f21' >
                <img id="f21img"   src={props.img3}/>
                <span>{props.cimg3}</span>
                </div>
                <div className='f21' id="f21img2">
               
                <img id="f21img" src={props.img4}/>
                <span>{props.cimg4}</span>
                </div>
           </div>
        <div className='f3'>{props.content2}</div>
      </div>
    </div>
    </div>
  )
}

export default Four_img
