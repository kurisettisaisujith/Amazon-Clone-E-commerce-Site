import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Promotion = () => {
    const P = styled.div`
    .promotion{
        border-top: 3px solid white;
    }
    .promotion_class{
      background-color:#232F3E;
      

      width:100%;
      height:auto;
    }
    .promotion_prime{
        width:100%;
        overflow-wrap: break-word;
        color: #1A98FF;
        padding:5px;
     
        text-align: center;
        font-size: 28px ;
    font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;
    }
    .promotion_percentage{
        width:100%;
        overflow-wrap: break-word;
        color: #ffffff;
        padding:5px;
     
        text-align: center;
        font-size: 28px ;
    font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;
    }
    .promotion_offer{
        width:100%;
        overflow-wrap: break-word;
        color: #ffffff;
        text-align: center;
        padding:5px;
        font-size: 14px ;
    font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;

    }
    .promotion_sign_in{
        width:100%;
        overflow-wrap: break-word;
        color: black;
        text-align: center;
         padding-top:30px;
        font-size: 20px ;
    font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;
    }
    .promotion_sign_in_button{
        width:200px ;
        background: #f0c14b;
        border-color: #a88734 #9c7e31 #846a29;
        border-radius: 8px;
       
    }
    .promotion_button_class{
        padding:10px;
        display:flex;
        align-items: center;
    justify-content: center;
    }
    
    `
    ;
   


  return (
    <div>
        <P>
            <div className='promotion'>
      <div className='promotion_class'>
       
        <div className='promotion_prime'><span>Prime member exclusive</span></div>
        <div className='promotion_percentage'><span>Save 20% when you buy 4000rs  of select items</span></div>
        <div className='promotion_offer'><span>Stock Up & Save | Limited-time offer</span></div>
      </div>
      <div className='promotion_sign_in'><span>Sign in to see if you're eligible for this promotion</span></div>
      <NavLink  to ="/form" className="nav_list"><div className='promotion_button_class' > <button className='promotion_sign_in_button'>Sign in</button></div></NavLink>
      </div>
      </P>

    </div>
  )
}

export default Promotion
