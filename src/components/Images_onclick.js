import  {useState,useEffect} from 'react';
import ReactDOM from "react-dom";
import "./imagesonclick.css";

const my_array = ["https://m.media-amazon.com/images/I/71RpTYfbRiL._AC_SY400_.jpg","https://m.media-amazon.com/images/I/81uJOXAfODL._AC_SY400_.jpg","https://m.media-amazon.com/images/I/51cf92qyyAS._AC_SY400_.jpg"];
const my_array1 = ["https://m.media-amazon.com/images/I/61mOqGUKukL._SY879_.jpg","https://m.media-amazon.com/images/I/31qpAItcl1L._SS75_.jpg","https://m.media-amazon.com/images/I/31UFT9FyWML._SS75_.jpg"];
const my_array2 = ["https://m.media-amazon.com/images/I/21-345ltouL._SS75_.jpg","https://m.media-amazon.com/images/I/71krgEx-WXL._SX679_.jpg","https://m.media-amazon.com/images/I/716dxPYagtL._SX679_.jpg"];
const my_array3 = ["https://m.media-amazon.com/images/I/41mJYXmoWjL.jpg","https://m.media-amazon.com/images/I/41mJYXmoWjL._AC_SY350_.jpg","https://m.media-amazon.com/images/I/51DGcy8eBCL._AC_SY110_.jpg"];
const my_array4 = ["https://m.media-amazon.com/images/I/81aDu+k5epL._AC_SY340_.jpg","https://m.media-amazon.com/images/I/51RmIP+3zBL._AC_SY340_.jpg","https://m.media-amazon.com/images/I/61hJGMt0lZL._AC_SY340_.jpg"];
const my_array5 = ["https://m.media-amazon.com/images/I/41SUi05xyVL._AC_SY340_.jpg","https://m.media-amazon.com/images/I/71puqBWIgcL._AC_SY340_.jpg","https://m.media-amazon.com/images/I/619dqHEBRdL._AC_SY340_.jpg"];

export default function Timer() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [count4, setCount4] = useState(0);
    let [count5, setCount5] = useState(0);
    


 
    



  
  return (
    <div className='oot1'>
 
     <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array[count]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount((count) =>0 )}  id="t221"  src={my_array[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount((count) =>1 )}  id="t221"  src={my_array[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount((count) =>2 )}  id="t221"  src={my_array[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>
 <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array1[count1]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount1((count1) =>0 )}  id="t221"  src={my_array1[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount1((count1) =>1 )}  id="t221"  src={my_array1[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount1((count1) =>2 )}  id="t221"  src={my_array1[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>
 
 <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array2[count2]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount2((count2) =>0 )}  id="t221"  src={my_array2[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount2((count2) =>1 )}  id="t221"  src={my_array2[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount2((count2) =>2 )}  id="t221"  src={my_array2[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>


 <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array3[count3]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount3((count3) =>0 )}  id="t221"  src={my_array3[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount3((count3) =>1 )}  id="t221"  src={my_array3[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount3((count3) =>2 )}  id="t221"  src={my_array3[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>


 <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array4[count4]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount4((count4) =>0 )}  id="t221"  src={my_array4[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount4((count4) =>1 )}  id="t221"  src={my_array4[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount4((count4) =>2 )}  id="t221"  src={my_array4[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>


 <div className='oot'>
     <div className='ot'>
   <div className='t'>
     <div className='t1'>Continue shopping for<br/>
   </div>
     <div className='t2'>
         <div className='t21'>
         <img id="t21" src={my_array5[count5]} alt=""/>  
         <br/>
          </div><br/><br/>CLICK HERE
          <div class="t22">
             <div className='' id="">
           <img  onClick={(e)=>setCount5((count5) =>0 )}  id="t221"  src={my_array5[0]} alt=""/> 
             
             </div>
             <div  className='' >
             <img  onClick={(e)=>setCount5((count5) =>1 )}  id="t221"  src={my_array5[1]} alt=""/> 
           
             </div>
             <div className='' id="">
            
             <img  onClick={(e)=>setCount5((count5) =>2 )}  id="t221"  src={my_array5[2]} alt=""/> 
           
             </div></div>
        </div>
     <div className='t3'>Shop now</div>
   </div>
 </div>
 </div>



 

 </div>
  );
}