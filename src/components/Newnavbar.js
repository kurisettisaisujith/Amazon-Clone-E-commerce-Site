import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import "./newnavbar.css";


const Nav = () => {
  
  
  return (
    <div>
      
     <div className='newnav'> 
      <nav>
       
            <div id="three_lines"><img src="./images/threelines-removebg-preview.png"alt="lines" width="50px" height="45px"/>
            </div>
         
          <div className='ul_top'>
            <ul>
                <li>
                    <NavLink  to ="/" className="nav_list">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/Today_Deals" className="nav_list">Today Deals</NavLink>
                </li>
                <li>
                    <NavLink to = "/customercare" className="nav_list">Customer Service</NavLink>
                </li>
                <li>
                    <NavLink to = "/Resister" className="nav_list">Registry</NavLink>
                </li>
                <li>
                    <NavLink to = "/Gifts_Cards" className="nav_list">Gifts Cards</NavLink>
                </li>
                <li>
                    <NavLink to = "/sell" className="nav_list">Sell</NavLink>
                </li>
            </ul>
            </div>  
            
   
      </nav>
    
    </div>
   
    </div>
  )
}    

export default Nav