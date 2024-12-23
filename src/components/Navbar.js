import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import  './navbar.css';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Navbar = () => {
    
  return (
        <>
            <div className="headomain">
            <div className="heado" >
        <div className="logo">
      <img  id="amz_logo" src = "./images/new_amz_log.png" alt = "logo" width="100px" height="50px"/>
      </div>
      <div className="deliver">
      < div className="img1">
      <img src = "./images/location-removebg-preview.png" alt = "logo"   width="60px" height="50px"/>
     </div>
     <div className='span'>
      <span id="span1">Hello</span><br/><span id='span2'>Select your address</span>
     </div>
     </div>
      <div className="search">
        <div className='s'><div className='all'>All</div></div>
        <div ><input className='s2' value="Search Amazon.in"></input></div>
        <div className='s3'><SearchOutlinedIcon className='searchlogo'/></div>
        

      </div>
      <div className="country">
      <NavLink  to ="/form" className="nav_list"><span id="span3">Hello,signin</span><br/><span id='span4'>Account & Lists</span></NavLink>
      </div>
      <div className="signin">
      <NavLink  to ="/form" className="nav_list"><span id="span5">Returns</span><br/><span id='span6'> & Orders</span></NavLink>
         </div>
      <div className="return">3</div>
      <NavLink  to ="/cart" className="nav_list">  <img  id="cart" src="./images/cart1-removebg-preview.png" alt="" width="60px" height="50px"/></NavLink>
      </div>
  </div>
  </>

    
      
    
  )
}

export default Navbar
