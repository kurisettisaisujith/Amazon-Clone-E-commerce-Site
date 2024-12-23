import React from 'react';
import Propstodaydeals from "./Propstodaydeals";
import Props_scrolling_today_deals from "./Props_scrolling_today_deals"
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Promotion from './Promotion';

const Today_deals = () => {
    const X = styled.div`
    .Today_deals_images_heading{
        color: black;
        font-size: 28px;
        font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;
        padding:10px;
    }
    .today_deals_img{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .today_deals_img_class{
        margin-left:20px ;
        margin-right:20px;
       
    }
    .today_deals_scrolling{
      
        display:flex;
        overflow-x: scroll;
        padding:40px
        margin-left: 50px;
        margin-right: 50px;
    }
    .today_winter_deals{
        color: black;
        font-size: 20px;
        font-weight: bold;
        font-family: "Amazon Ember",Arial,sans-serif;
        padding:5px;
    }
    
    `;
    
  return (
    <div>
      <X>
      <div className='Today_deals_images'>
        <div className='Today_deals_images_heading'><span>Today deals</span></div>
        <hr/>
        <div  className='today_deals_img_class'>
        <div className='today_deals_img'>
        <NavLink  to ="/unavilable" className="nav_list"> <Propstodaydeals fimg="https://m.media-amazon.com/images/I/61krLWRanJL._AC_UF226,226_FMjpg_.jpg" fdetails="Today only: Stock up your Kindle" fdeals="10% off" fprize="120" /></NavLink> 
        <NavLink  to ="/promotion" className="nav_list"><Propstodaydeals fimg="https://m.media-amazon.com/images/I/412h-5VfK-L._AC_UF226,226_FMjpg_.jpg" fdetails="GOOLOO JUMP STARTER DOTD" fdeals="10% off" fprize="120" /></NavLink> 
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51f599COi0L._AC_UF226,226_FMjpg_.jpg" fdetails="" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51f599COi0L._AC_UF226,226_FMjpg_.jpg" fdetails="DERMORA Eye Mask Treatment" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41dKht0V9NL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Premium Bedding Essentials from Mueller" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/61uZC3jBWEL._AC_UF226,226_FMjpg_.jpg" fdetails="DERMORA Eye Mask Treatment" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41W+5yTLxaL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Luxurious Cotton Bath Towels from Lane Linen" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51DXk5ShseL._AC_UF226,226_FMjpg_.jpg" fdetails="ThisWorx Car Vacuum" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/31voSR0c9tS._AC_UF226,226_FMjpg_.jpg" fdetails="eufy by Anker Robot Vacuums" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/81fW7SLVgVL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on WOW Shampoo & Conditioner" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51w+St6mNtL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Mueller Kitchen Essentials" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51OelHO+rbL._AC_UF226,226_FMjpg_.jpg" fdetails="Fusion Black Pro Massage Guns" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51mmO1qGj8S._AC_UF226,226_FMjpg_.jpg" fdetails="Amazon Essentials Fashion for Men" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/61UR45ZM9WL._AC_UF226,226_FMjpg_.jpg" fdetails="Prime Exclusive: Spend $50, save 20% on select Amazon brands" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/31Ojm6M1WgL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Samsung Memory and Drives" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/410ph4ZcRTL._AC_UF226,226_FMjpg_.jpg" fdetails="OnePlus 11 5G Unlocked Phone & Free RAM Upgrade" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41x-+xTeIcL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Safety 1st Grow and Go All-in-One Convertible Car Seat,Rear-Facing 5-" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41osF6p2CaL._AC_UF226,226_FMjpg_.jpg" fdetails="Bose Portable Speakers" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41ygD8fFRjL._AC_UF226,226_FMjpg_.jpg" fdetails="SGIN Laptop 12GB DDR4 512GB SSD, 15.6 Inch Windows 11 Laptops with" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/51zHrxj-saL._AC_UF226,226_FMjpg_.jpg" fdetails="RAEMAO Massage Gun Deep Tissue, Electric Muscle Massager Percussion" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41dj1IZxtbL._AC_UF226,226_FMjpg_.jpg" fdetails="Save on Square Terminal and more" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/31nOK3PrahL._AC_UF226,226_FMjpg_.jpg" fdetails="Beats Headphones and Earbuds" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41tU7Q6VwoL._AC_UF226,226_FMjpg_.jpg" fdetails="Dreo Space Heater for Indoor Use, 1500W Fast Heating Ceramic Electric" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/31P2kF1-jwL._AC_UF226,226_FMjpg_.jpg" fdetails="Momcozy S9 Pro Wearable Breast Pump, Hands-Free Breast Pump of Longest" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41yhvfkvU5L._AC_UF226,226_FMjpg_.jpg" fdetails="Teoanns Memory Foam Mattress Bed in a Box" fdeals="10% off" fprize="120" />
        <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41gad7FYB4L._AC_UF226,226_FMjpg_.jpg" fdetails="Bedsure Duvet Covers - Brushed" fdeals="10% off" fprize="120" />
        <NavLink  to ="/unavilable" className="nav_list">  <Propstodaydeals fimg="https://m.media-amazon.com/images/I/41+ZUDEVmtL._AC_UF226,226_FMjpg_.jpg" fdetails="Ca'Lefort Beverage Refrigerator and Wine Cooler…" fdeals="10% off" fprize="120" /></NavLink> 
        
        </div>

      </div>
      </div>
      <div><img src="https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg" alt="slide image" width="100%" height="200px"/></div>
     <br/><br/> <div className='today_winter_deals'><span>winter deals</span></div>
      <div className='today_deals_scrolling'>
        
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41SnMyYxI1L._AC_UF226,226_FMjpg_.jpg" fdetails="Power Tools" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/31QKdnG1++L._AC_UF226,226_FMjpg_.jpg" fdetails="Home Office Desks" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41SnMyYxI1L._AC_UF226,226_FMjpg_.jpg" fdetails="Power Tools" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/31QKdnG1++L._AC_UF226,226_FMjpg_.jpg" fdetails="Home Office Desks" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41SnMyYxI1L._AC_UF226,226_FMjpg_.jpg" fdetails="Power Tools" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/31QKdnG1++L._AC_UF226,226_FMjpg_.jpg" fdetails="Home Office Desks" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41VqNmjXYXL._AC_UF226,226_FMjpg_.jpg" fdetails="Sunny Health & Fitness Bikes, Rowers, and more" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41HabxsEe1L._AC_UF226,226_FMjpg_.jpg" fdetails="Watches from Invicta, Timex, Bulova, and more" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41Mm21DWogL._AC_UF226,226_FMjpg_.jpg" fdetails="Crocs" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41xzIjqH59L._AC_UF226,226_FMjpg_.jpg" fdetails="Luggage & Travel Gear" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/312bw+YnyQL._AC_UF226,226_FMjpg_.jpg" fdetails="Heating, Cooling & Air Quality" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/51tOusTFw3S._AC_UF226,226_FMjpg_.jpg" fdetails="Mattresses & Box Springs" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41bOqDzitcL._AC_UF226,226_FMjpg_.jpg" fdetails="Kitchen Cookware" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/41SnMyYxI1L._AC_UF226,226_FMjpg_.jpg" fdetails="Power Tools" fdeals="10% off" fprize="120" />
      <Props_scrolling_today_deals fimg="https://m.media-amazon.com/images/I/31QKdnG1++L._AC_UF226,226_FMjpg_.jpg" fdetails="Home Office Desks" fdeals="10% off" fprize="120" />
      </div>
      </X>
    </div>
  )
}

export default Today_deals
