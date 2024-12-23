import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Webpage =()=>{
const CssForThePage =styled.div`
#Header{
    background:#007185;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    align-items: center;

    height: 60px;
    font-size: 16px;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 25%);
    background: #007185;
    color: #fff;
}
#Headerul{
    background:#007185;
    text-decoration:none;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.Headera{
    color:#FFFFFF;
    text-decoration:none;
    padding:7px 10px
}
.Headera0{
    color:#FFFFFF;
     text-decoration:none;
    padding:7px 25px;
}
.Headera1{
    padding: 0 24px;
    line-height: 37px;
    border-right: 1px solid #fff;
    text-decoration:none;
    color:#FFFFFF;
}
.Headerlist{
    background:#007185;
    list-style:none;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font:16px "Amazon Ember", Arial, sans-serif;
}
#cards{
    padding:30px 0px;
    background:#007185;
    margin:0px ;

}
#p{
    font:20px "Amazon Ember", Arial, sans-serif;
    color:#FFFFFF;
}
#Hone{
    font:28px "Amazon Ember", Arial, sans-serif;
    color:#FFFFFF;
}
#container{
    font:14px "Amazon Ember", Arial, sans-serif;
    padding:0px 20px;
    color:#0F1111;
   
}
#continer0{
    font:14px "Amazon Ember", Arial, sans-serif;
    padding:0px 20px;
    color:#0F1111;
    display:flex;
    flex-direction:row;
}
#card{
    display:flex;
    flex-direction: colunm;
    margin:16px 70px;
    color:#0F1111;
    background:#FFFFFF;
    border-radius:4px;
    width:350px;
    height:94px;
    padding:0px;
   

}
#image{
    margin:25px 10px  ;
    height:60px; 
    width:60px;
}
.a{
    text-decoration:none;
    padding:15px 0px 0px;
    font-size: 15px;
    line-height: 1.3;
    padding: 5px 17px;
    display: flex;
    align-items: center;
    overflow-wrap: break-word;  
    color:#0F1111;
}
#issuecards {
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    background:#007185;
    padding:0px 20px;
    
}

#cardmatch{
    background:#FFFFFF;
    
    
}
#pagewrapper{
    background:#F7FAFA;
    padding:4px 0px;
    color:0F1111;
    font:14px "Amazon Ember", Arial, sans-serif;
}
#h2{
    color:#000000;
    font:24px "Amazon Ember", Arial, sans-serif;
    padding:5px;
    margin:0px;
}
#topics{
    color:#0F1111;
    margin:0px 45px 0px 0px;
    display:flex;
    flex-direction:column;
    text-decoration:none;
    
}
#lable{
    font:15px "Amazon Ember", Arial, sans-serif;
    padding:5px 17px;
    color:#111111;
   
    margin:7px;
    text-decoration:none;
    list-style:none;
}
#lable1{
    font:15px ;
    -famifontly:Amazon Ember, Arial, sans-serif;
    padding:5px 17px;
    color:#FFFFFF;
    background: #008296;
    border-radius: 4px;     
    overflow: hidden;
    margin:7px;
    text-decoration:none;
    list-style:none;
}
.a1{
    color:#FFFFFF;
    text-decoration:none;
}
.PLATFORMLINKS{
    text-decoration:none;
    list-style:none;
    color:#0f1111;
    
}
#span{
    color:#767676;
}
#searchinput{
    background-color: #fff;
    height: 31px;
    padding: 3px 7px;
    line-height: normal;
       width: 100%;
    margin-right: 0;    
    width: 100%;
}
#search{
    width: 100%;
    margin-right: 0;
}
#topicli{
    list-style-type: none;
    margin: 10px 0 0;
    display: block;
}
#find{
    text-decoration:none;
    list-style:none;
    color:#0f1111;
    align-items: center;
    height:auto;
    width:auto;
    overflow-wrap: break-word;
}

#findtext{
    text-decoration:none;
    list-style:none;
    color:#767676;
    align-items: center;
    overflow-wrap: break-word;
    height:auto;
    wdith:auto;
}
#topiccards{
    display:flex;
    flex-direction:row;
    background-color: #f7fafa;
}
#topiccards0{
    display:flex;
    flex-direction:column;
    background-color: #f7fafa;
    justify-content: space-between;
    margin:0px 20px;
}
#topiccards1{
    display:flex;
    flex-direction:column;
    background-color: #f7fafa;
    justify-content: space-between;
  
    margin: 0px 30px 0px;
}
#topicli{
    text-decoration:none;
    list-style:none;
   
}
#topic0{
    height:auto;
    width:auto;
    padding: 0px 90px;
    height: 94px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 16px 20px;
    display: flex;
    margin: 0px 30px 0px;
    border-radius:5px;
}
#topic2{
    height:auto;
    width:auto;
    padding: 0px 90px;
    height: 94px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 16px 20px;
    display: flex;
    margin: 16px 30px 200px;
}
@media (max-width: 1000px){
    .Header_customer{
        display:none;
    }
}

` 
return(
          
  
        <CssForThePage> 
              <div className='Header_customer'>
        <div id="Header">
            <ul id="Headerul">
                  <li class=" Headerlist">
                      <Link to="/Customerservices" className="Headera1">Customerservices</Link>        
                  </li>
                  <li class="Headerlist">
                      <Link to="/Home"className="Headera0">Home</Link> 
                  </li>
                  <li class="Headerlist">
                      <Link to="/Digitalservices"className="Headera">Digitalservices</Link> 
                  </li>
            </ul>
        </div>       
        <div id="cards">
            <div id='container'>
<h1 id="Hone">
            Welcome to Amazon Customer Service
            </h1>
            <p id="p">
            What would you like help with today? You can quickly take care of most things here, or connect with us when needed.

            </p>
       
            </div>
            
            <div id='issuecards'>
            <div id='card'>
                <img id='image' src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_order_v2._CB432205751_.png' />
                <Link to="/Delivery" className="a">A delivery,order on return</Link>
            </div>
            <div id='card'>
                <img id='image' src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_prime_v2._CB432205750_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Prime</Link>
            </div>
            <div id='card'>
                <img id='image' src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_paymentgc_v2._CB432205751_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Payment,Charged or gift cards</Link>
            </div>
            
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_login_security_v2._CB432205751_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Login,address,Security & privacy</Link>
            </div>
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_account_v2._CB432205751_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Memberships,subscriptions or communications</Link>
                
            </div>
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_device_v2._CB432205751_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Kindel ,Fire,Alexa or Other Amazon Devices</Link>
            </div>
            
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_dcontent_v3._CB428304563_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">eBooks, Prime videos or Music</Link>
            </div>
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/accessibility._CB653395151_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Accessibility</Link>
            </div>
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/fshub_somethingelse_v3._CB428112012_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Somtehing else</Link>
            </div>
            <div id='card'>
                <img id='image'src='https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/gateway/self-service/fshub/Login_Icon_2._CB618207853_.png'height="60px" width="60px" />
                <Link to="/Delivery" className="a">Login & password</Link>
            </div>
            </div>
            </div>
            <div id='container'>
            <div id='pagewrapper'>
              <lable> <h2 id='h2'>Search our help library</h2> 
              <div id='search'>
              <form>  <img src="data:image/png;base64,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" height="18px " width="18px"/>
              <input type='search' maxLength="500" id='searchinput' placeholder="type somthing Like, queation about charge"> 
            
            </input></form>
                </div> </lable>
               <h2 id='h2'> All help topics</h2> 
            </div>
                <div id='continer0'>
                
            <div id='topics'>
                <label id='lable1'><Link to="/Delivery" className="a1">Recommende topics</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Where's my stuff</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Shipping and Delivery</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Returns and Refunds</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Manageing your Account</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Security & Privacy</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Payment, Pricing and promotions</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Devices & Digital Solutions</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Amazon Business Account</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Large Items and Heavy-Bulky Service</Link> </label>
                <label id='lable'><Link to="/Delivery" className="a">Orther topics & Help sites</Link> </label>    
            </div>
            <div id ="topiccards">
            <div id ="topiccards0">
            <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Find the missind package that show as "Delivery"</div><div id ="findtext" >Most packages arrive on time, but, sometimes, the tracking may show as "delivered" and you don't have your package.</div></Link>
            </li></div>
            <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Trackyour package</div><div id ="findtext" >You can find tracking information in your order details. If an order includes multiple items, each may have separate delivery dates and tracking.</div></Link>
            </li></div>
            
                
                <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Cancel Items or Orders</div><div id ="findtext" >You can cancel items or orders that haven't entered the shipping process yet..</div></Link>
            </li></div>
            <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Find a missing item from your package</div><div id ="findtext" >If an item is missing from your package, it may have been shipped separately.</div></Link>
            </li></div>
            </div>
            <div id ="topiccards1">
            <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Late Deliveries</div><div id ="findtext" >Most packages arrive on time. Orders sometimes show up after the estimated delivery date..</div></Link>
            </li></div>
            <div id ="topic0">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Check status of a refund</div><div id ="findtext" >You can check the status of your refund in Your Orders ..</div></Link>
            </li></div>
            <div id ="topic2">
            <li id='topicli'><Link to ="/AbeBooks" CLASS="PLATFORMLINKS"><div id="find">Replace an item</div><div id ="findtext" >If you received a damaged, defective, or incorrect item sold by Amazon, you can request a replacement for a small number of eligible items through Your Orders ..</div></Link>
            </li></div>
                </div>
                </div>
                </div>
            </div>


            </div>
           
        </CssForThePage>
    
)
}

export default Webpage