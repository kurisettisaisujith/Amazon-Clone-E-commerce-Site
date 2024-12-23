import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Unavilable = () => {
    const U = styled.div`
   .unavailble_dis{
    width:100%;
    overflow-wrap: break-word;
    color: black;
    padding: 5px;
   
    font-size: 25px ;
font-weight: bold;
    font-family: "Amazon Ember",Arial,sans-serif;
   } 
   .unavaible_link{
    font-size: 18px;
   
    color: #064F70;
   }
   .unavaible_link:hover{
    color: red;
    text-decoration:underline; 
   }
    
    `;
  return (
    <div>
      <U>
      <div>
        <div className='unavailble_dis'><span>This deal is currently unavailable, but you can find more great deals on our Todays Deals page.</span></div>
       <br/><br/> <NavLink  to ="/" className="nav_list"> <div className='unavaible_link'><span>Click here to see current deals.</span></div></NavLink> 
      </div>
      </U>
    </div>
  )
}

export default Unavilable
