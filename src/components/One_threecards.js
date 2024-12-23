import React from 'react';
import "./onethree.css"

const Four_img = (props) => {
  return (
    <div>
        <div className='ot'>
      <div className='t'>
        <div className='t1'>{props.content1}<br/>
        {props.content12}</div>
        <div className='t2'>
            <div className='t21'>
            <img id="t21" src={props.img1}/>  
            <br/><span>{props.cimg1}</span>
             </div>
             <div class="t22">
                <div className='' id="">
                <img  id="t221"  src={props.img2}/>
                <span>{props.cimg2}</span>
                </div>
                <div  className='' >
                <img id="t221"   src={props.img3}/>
                <span>{props.cimg3}</span>
                </div>
                <div className='' id="">
               
                <img id="t221" src={props.img4}/>
                <span>{props.cimg4}</span>
                </div></div>
           </div>
        <div className='t3'>Shop now</div>
      </div>
    </div>
    </div>
  )
}

export default Four_img
