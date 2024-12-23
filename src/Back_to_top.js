import React from 'react'
import styled from 'styled-components';

const Back_to_top = (props) => {
 

    const goToBtn =()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
       
    }
  return (
    <div>
   
      <div>
        <button id='button' onClick={goToBtn}>Back to top
</button>
      </div>
    
    </div>
  )
}

export default Back_to_top
