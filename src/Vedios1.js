import React from 'react'
import  {useState,useEffect} from 'react';
import "./vedios.css";

const Vedios = () =>{
    const my_array = ["https://m.media-amazon.com/images/I/71bQioJsnPL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71L3f2Ka7yS._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71KJGzj1F4L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/71-cezoD86L._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81eh6mNvDrL._AC_SL1500_.jpg","https://m.media-amazon.com/images/I/81Q7JCzpWfL._AC_SL1500_.jpg"];

    let [count, setCount] = useState(0);

    


 
    

  return (
   
    <div>
      <div className='image_display'>
       
        <div className='image_selected_display'>
            <img src={my_array[count]} alt="image_display" id="selected_image" />
        </div>
        <div className='clicks'>
        <div className='image_selecting'>
       
            <div className='image_selecting_description'><span>
Kitchen Damascus Knife Set, 15-Piece Kitchen Knife Set with Block, ABS Ergonomic Handle for Chef Knife Set and Serrated Steak Knives Knife Sharpener and...</span></div>
        </div>
        <div className='image_selecting_choice'>
       
       
       <div class="image_selecting_choices ">
          <div className='select1'id="">
        <img  onClick={(e)=>setCount((count) =>0 )}  id="click1"  src={my_array[0]} alt=""/> 
          
          </div>
          <div  className='select1' >
          <img  onClick={(e)=>setCount((count) =>1 )}  id="click1"  src={my_array[1]} alt=""/> 
        
          </div>
          <div className='select1' id="">
         
          <img  onClick={(e)=>setCount((count) =>2 )}  id="click1"  src={my_array[2]} alt=""/> 
        
          </div>
          <div className='select1' id="">
        <img  onClick={(e)=>setCount((count) =>3 )}  id="click1"  src={my_array[3]} alt=""/> 
          
          </div>
          <div className='select1' id="">
        <img  onClick={(e)=>setCount((count) =>4 )}  id="click1"  src={my_array[4]} alt=""/> 
          
          </div>
          <div className='select1' id="">
        <img  onClick={(e)=>setCount((count) =>5 )}  id="click1"  src={my_array[5]} alt=""/> 
          
          </div>
     </div>
     </div>
   </div>
    
     
   </div>
 </div>
 
  )
}

export default Vedios