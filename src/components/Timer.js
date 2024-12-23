import  {useState,useEffect} from 'react';
import ReactDOM from "react-dom";
import "./Timer.css";

const my_array = ["https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg","https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg","https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg","https://m.media-amazon.com/images/I/51pTbx2f89L._SX1500_.jpg","https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"];

export default function Timer() {
    let [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 4000);
  });
 
  
  if(count>my_array.length-1){
   
    setCount((count) =>0 );

  }
  
    



  
  return (
    <>
    <div className="s1">
      
    <div className="slideshow">
      
 
     <img src={my_array[count]} alt="" width="100%" height="300px" />
     
   
    </div>
   
    </div>
    
    </>
  );
}