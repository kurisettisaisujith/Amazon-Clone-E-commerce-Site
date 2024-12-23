import React from 'react';
import Four_img from "./Four_img.js";
import Singlecard from "./Singlecard";
import Scard from "./Scard"; 
import "./cards.css";
import {NavLink} from 'react-router-dom';
import Single_footer_img from './Single_footer_img.js';
import Images_onclick from './Images_onclick';

const Footer = () => {
  return (
    <div>
    
      
        

    <div className='footer_images_class'>
    <div className='footer_heading'> <hr/><span>Gift ideas inspired by your shopping history</span></div>
    <div className='footerimages'>
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/81RY+mU4+fL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="30% off" fprize="230" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/611owqbxXmL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="30% off" fprize="500" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/81e6BaQEiZL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="40% off" fprize="540" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/81Xw9+wNavL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="20% off" fprize="600" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/713ZVYTSQJL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="50% off" fprize="200" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/61FlCVGilBL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="80% off" fprize="480" />
    <Single_footer_img fimg="https://images-na.ssl-images-amazon.com/images/I/81LhSdQK1nL._AC_UL160_SR160,160_.jpg" fdetails="Amazon Basics Lightweight Super Soft Easy Care Microfiber Bed Sheet Set with 14-Inch Deep Pockets - Full, Dark Gray" fdeals="10% off" fprize="120" />
    </div>
    <hr/>
    <div className='footerclass'>
    <div className='fotter_button' ><span>See personalized recommendations</span><br/>
      <button className="fbutton" >Sign in</button><br/>
      <span>New customer? Start here.</span></div>
    </div>
   
    </div>
   
    </div>
    
  
  )
} 

export default Footer
