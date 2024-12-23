import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';



const Nav = () => {
    const X = styled.div`
    ul{
        list-style:none;
        display:flex;
        gap:3.5rem;
        float:left;
       
      
      }
      .nav_list2{
        text-decoration: none;
      font-family: inherit;
      color:#002f06;
      
      }
      ul:hover{
        text-decoration: underline;
        
     }


    
    
    
    `;
  
  return (<>
    <div>
    <hr/>
        <X>
      
     <div className='Detailed'> 
  

          <div className='ul_top1'>
            <ul>
                <li>
                    <NavLink  to ="/vedios" className="nav_list2">Vedios</NavLink>
                </li>
                <li>
                    <NavLink to ="/images" className="nav_list2">Images</NavLink>
                </li>
              
            </ul>
            </div>  
            
   
        
    
    </div>   
    </X>

    </div>
  
    </>
  )
}    

export default Nav