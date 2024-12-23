import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Back_to_top from "./Back_to_top";


const Footer_ = () => {
    const Navfooter=styled.div`
    .button{
        color:#FFFFFF;
        background:#4F6782;
        border:6px solid white
        font:13px "Amazon Ember", Arial, sans-serif;
        padding:15px 0px;
        width:100%;
       
    }
    ul{
        font:15px ;
        font-family:"Amazon Ember", Arial, sans-serif;
        display: flex;
        flex-direction: column;
       color:#ffffff
    }
    .footer_ull{
        display: flex;
        flex-direction: row;
        background-color: #232F3E;
        justify-content: space-evenly;
    }

    
    
    
    `;
  return (
    <div>
       <Footer/>
          <Navfooter>
            <div>
             
      <div>
        <div>
            <button className='button'>
             <Back_to_top/></button> </div>
        </div>
        <div className='footer_ull'>
            <ul>                                                                       
                <li>Amazon.com</li>
                <li>Your Lists</li>
                <li>Find a Gift</li>
                <li>Browsing History</li>
                <li>Returns</li>
            </ul>
            <ul>
            <li>  Your Orders</li>
            <li>Gift Cards & Registry</li>
            <li>Your Account</li>
            <li>Sell products on Amazon</li>
            <li>Customer Service</li>
            <li>Amazon.com</li>
            </ul>
        </div>
      
    </div>
    </Navfooter>
    </div>
  )
}

export default Footer_
