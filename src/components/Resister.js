import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import "../resister.css";


const Resister = () => {
    const Nav = styled.nav`

    }
    }







    `
  return (
    <div>
      
        <div>
        <div>
         <div className='overflow'>
        <ul>
        <li> <NavLink  to ="/all" className="nav_list1">registry & gifting</NavLink></li>  <li> <NavLink  to ="/all" className="nav_list1">Find a registry or gift list</NavLink></li>  <li> <NavLink  to ="/all" className="nav_list1">Create a registry or gift list</NavLink></li>  <li><NavLink  to ="/all" className="nav_list1">Help</NavLink></li>
        </ul>   </div>
      <img src="https://m.media-amazon.com/images/G/01/img18/home/registry/SavileRow_Registry_D._CB1198675309_.jpg" alt="poster" width="100%"/>
       </div>
       <div className='rrestor'>
       <div >
        <span className="rspan">Find a registry or gift </span>
         </div>
        <div>
            <div className='rsearch'>
                <div className='rreaserarchspan'><span>Resister name</span><br/>
                < input type="text" value="search by resistornt name"/>
                </div>
               
            <div className='rreaserarchgift' >
            <input type="text" value="search by resistornt  gift type"/>
            </div>
            
            <div className='rreaserarchspanbutton'>
            <button>submit</button>
            </div>
            </div>
            
        </div>
        </div>
        
        <div className='rreason'>

          <div className='rreason_heading'>
          <span>Reasons to create a registry or gift list on Amazon</span>
          </div>
          <div className='rimages'>
            <div>
            <div className='rreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/customgiftlist/icon_Celebrate.svg" alt=""/>
            </div>
            <div className='rreson_images_description'>
            <span> Celebrate any milestone</span>
            </div>
          </div>
          <div>
            <div className='rreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/customgiftlist/icon_Share.svg" alt=""/>
            </div>
            <div className='rreson_images_description'>
            <span> Easy to share</span>
            </div>
          </div>
          <div>
            <div className='rreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/customgiftlist/icon_Return.svg" alt=""/>
            </div>
            <div className='rreson_images_description'>
            <span> Extended Returns</span>
            </div>
          </div>
          <div>
            <div className='rreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/customgiftlist/icon_Thank_you.svg" alt=""/>
            </div>
            <div className='rreson_images_description'>
            <span>Thank you list</span>
            </div>
          </div>
          
          </div>
        </div>

        <div className='learnmore'>

     
        <div >
        <span className="lspan">Learn more about our different registries and gift lists </span>
         </div>
       <div className='limages'>
        <div className='limagecard'>
         <div className='lreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/wedding_registry_238x238.jpg" alt=""/>
            </div>
            <div className='l_images_description'>
            <span> I'm getting married </span>
            </div>
         </div>

         <div className='limagecard'>
         <div className='lreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/baby/registry/v2/dsk/homepage/Babysquare.jpg" alt=""/>
            </div>
            <div className='l_images_description'>
            <span> I'm welcoming a baby </span>
            </div>
         </div>

         <div className='limagecard'>
         <div className='lreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/birthday_gift_238x238.jpg" alt=""/>
            </div>
            <div className='l_images_description'>
            <span>Celebrating a child's birthday</span>
            </div>
         </div>

         <div className='limagecard'>
         <div className='lreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/Holiday_238x238-2.jpg" alt=""/>
            </div>
            <div className='l_images_description'>
            <span>Preparing for the Winter holidays</span>
            </div>
         </div>

         <div className='limagecard'>
         <div className='lreason_images'>
              <img src="https://m.media-amazon.com/images/G/01/img18/home/2021/Gift_List_Registry/gift/custom_gift_238x238.jpg" alt=""/>
            </div>
            <div className='l_images_description'>
            <span>Celebrating a different occasion</span>
            </div>
         </div>
         </div>
         </div>
        </div>
      </div>
     
   
  )
}

export default Resister
