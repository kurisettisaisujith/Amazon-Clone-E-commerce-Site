import React from 'react';
import Navbar from './Navbar';
import Newnavbar from "./Newnavbar";
import Timer from './Timer';
import Four_img from './Four_img';
import Singlecard from './Singlecard';
import One_threecards from './One_threecards';
import "./header.css"
import  Cards  from "./Cards.js";


const Header = () => {
  return (
    <div>
 
 
   <Timer/>
   <Cards/>
   </div>
  
    
  )
}

export default Header
