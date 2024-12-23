import React from 'react';
import styled from 'styled-components';


const single_footer_img = (props) => {
    const X = styled.div`


    
.footer{
    width:300px;
height:auto;
    padding:40px
}
#fimg{
    width:200px;
    height: 150px;
}
.Amachoice{

   color: #232f3e;
    float: left;
    font-size: small;
   
}

.fdetails{
   
    color: #007185;
    font-size: 12px;
    overflow-wrap: break-word;
    font-family: "Amazon Ember",Arial,sans-serif;

}
.fd{
    width:200px;
}
.fdeals{
    color:#ffffff;
    width: 50px ;
    font-size: 12px;
    margin: 0px 6px 0px 0px;
    padding: 4px 6px;
    background-color: red;
    font-family: "Amazon Ember",Arial,sans-serif;

}


.Amachoice{
    color: black;

   padding-top: 1%;
    font-size: 15px ;

    font-family: "Amazon Ember",Arial,sans-serif;
}
    `;
  return (
    <div>
<X>
   
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
    </X>
    </div>
    
  )
}

export default single_footer_img
