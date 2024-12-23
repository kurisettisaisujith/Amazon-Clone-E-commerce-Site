import React from 'react';

import styled from 'styled-components';

const Singlecard = (props) => {
  const S = styled.div`
  .single{
    width:240px;
    height: 400px;
    background-color: #ffffff;
    padding: 10px;
}
.simg{
    padding-left:20px ;
    padding-top:15px ;
    padding-right: 10px;
}
.sm1{
    color: #0f1111;
    padding-bottom: 9px;
    font-size: 21px ;
    font-weight: bold;
    font-family: "Amazon Ember",Arial,sans-serif;
}
.sm2{}
#smimages21{
    width:210px;
    height:250px

}
.sm3{
    color: #007185;
    font-size: 13px ;
    font-family: "Amazon Ember",Arial,sans-serif;
}
  
  `;

  return (
    <div>
      <S>
      <div className='single'>
      <div className='simg'>
        <div className='sm1'>{props.content1}<br/>
             {props.content12}</div>
        <div className='sm2'>
           
            <img id="smimages21" src={props.img1}/>  
          
             </div>
             <div className='sm3'>{props.content2}</div>
             </div>
             </div>
             </S>
    </div>
  )
}

export default Singlecard
