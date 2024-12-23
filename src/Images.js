import React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';


const Images = () => {
    const V = styled.div`
    #vspan1{
        font-size: 18px;
        font-family: "Amazon Ember",Arial,sans-serif;
        color:#111111;
    }
    #vspan2{
        font-size: 13px;
        font-family: "Amazon Ember",Arial,sans-serif;
        color:#111111;
    }
  
    `;
  return (
    <div>
        <V>
      <>

      <div id="vedio"><ReactPlayer id="vedio_playing" url='https://www.youtube.com/watch?v=G-Fg7l7G1zw'  /><br/></div>

      <span id='vspan1'>NANFANG BROTHERS Damascus Kitchen Knife Set With Block Feedback</span><br/><br/><span id="vspan2">
NANFANG BROTHERS OFFICIAL</span>

      </>  
      </V>
    </div>
  )
}

export default Images
