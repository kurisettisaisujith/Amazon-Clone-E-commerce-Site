import React from 'react';
import "./cart.css";
import {NavLink} from 'react-router-dom';

const Card = () => {
  return (
    <div>
        <div className='cart_head'>
      <div>
        <div className='cart_details'>
        <div className='cart_img'>
            <img src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt=""/>
        </div>
        <div className='cart_dis'><span>
Your Amazon Cart is empty</span><br/><span id="see_today_deals">
Shop today's deals</span>
<NavLink  to ="/form" className="nav_list"> <div className='cart_box_button1'>< button className='cart_sign_button1'>Sign up</button></div></NavLink>
</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card
