import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import "./sell.css";

const Sell = () => {
  return (
    <div>
      <div>
        <div className='sell_amazon'>
            <div className='sell_head'><span>Sell on Amazon</span></div>
            <NavLink  to ="/form" className="nav_list"> <div className='sell_sign_button'>< button className='sell_sign_button'>Sign up</button></div></NavLink> 
        </div>
        <div className="sell_box_head">
        <div className="sell_box">
           <div className='sell_name'>Become an
Amazon seller</div>
           <div className='sell_des'>
            The fastest-growing and preferred acquisition channel for over half our multichannel sellers
            </div>
          
            <NavLink  to ="/form" className="nav_list"><div className='sell_box_button'>< button className='sell_sign_button'>Sign up</button></div></NavLink>
          
        </div>
        <div className='sell_box_img'><img src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-2-sm.png" height="250px"/></div>
        </div>

        <div className="sell_box_head1">
        <div className="sell_box1">
           <div className='sell_name1'>Start selling today</div>
           <div className='sell_des1'>
           Put your products in front of the millions of customers who search Amazon.com every day.
            </div>
          
            <NavLink  to ="/form" className="nav_list"> <div className='sell_box_button1'>< button className='sell_sign_button1'>Sign up</button></div></NavLink>
          
        </div>
        <div className='sell_box_img1'><img src="https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-6-sm.png" height="400px"/></div>
        </div>
      </div>
    </div>
  )
}

export default Sell
