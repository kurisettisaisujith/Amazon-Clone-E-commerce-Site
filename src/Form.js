import React,{useState} from 'react';
import styled from 'styled-components';

import "./form.css";

export default function Form() {
  const [name,setName]= useState("");
  function sujith(){
    window.confirm(`do you want to save name: ${name} `);
  }

  const F = styled.div`


  
  `;
  
  return(
    <>
    <F>
    <div className='form_head'>
    <div className="parent">
        <div className="child1" ><img src="https://rmhcsoutherncolorado.org/wp-content/uploads/2019/01/amazon-logo-transparent.png" alt="logo" width="110px" height="30px"/>
        </div>
        <div className="child12">
        <div className="child2">
              <h2>Create account</h2>
              <form onSubmit={sujith}>
             <><b>Your name</b></><br/>
                <input  name="name" value ={name} size="35" onChange={(e)=>setName(e.target.value)} /><br/><br/>
                <><b>Email </b></><br/>
                <input type ="Email" name ="input2"  size="35"/><br/><br/>
                <b>password</b><br/>
                <input type ="password" name ="input1" size="35" /><br/>
                <i>i</i> passwords must be at least 6 characters<br/><br/>
                <b>Re-enter password</b><br/>
                <input type ="password" name ="input4" size="35" /><br/><br/>
               <button type ="submit" >submit</button>
                

              </form>
        </div>
        <div className="child3">
        <h6>By creating an account,you agree to Amazons<br/><b>Conditions of Use</b> and <b>Privacy Notice</b></h6>       
         </div>

         <div className="child4">
        <h6>Already hava an account?<b>Sign in</b></h6>       
         </div>
         </div>
      


         </div>
    </div>
    </F>
    </>
  )
}