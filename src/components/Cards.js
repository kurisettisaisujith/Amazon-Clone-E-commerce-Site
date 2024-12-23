import React from 'react';
import Four_img from "./Four_img.js";
import Singlecard from "./Singlecard";
import Scard from "./Scard"; 
import "./cards.css";
import {NavLink} from 'react-router-dom';
import Single_footer_img from './Single_footer_img.js';
import Images_onclick from './Images_onclick';

const Cards = () => {
  return (
    <div>
      <div className="cards_head">
        <div className='cards_main'>
      <div className='cards_div1'>
     <div className='fimg1'> <Four_img   content1="Gaming accessories" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg" img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg" img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg" img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg" cimg1="Headsets" cimg2="Keyboards" cimg3="Computer mice" cimg4="Chairs" content2="See more"/> </div>
     <div className='fimg1'><Singlecard  content1="Electronics" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_2x._SY608_CB432774322_.jpg" content2="See more"/></div>
     <div className='fimg1'><Singlecard  content1="Get fit at home" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" content2="Explore more"/></div>
      <div className='sn'>
        <div className='sign1' >
        <div className='sign'>
            <div className='sign_content'>
            <span>Sign in the best <br/> experience</span>
           
            </div>
            <div className='buttonclass'>
                <button className='sign_button'>Sign in securely</button>
            </div>
           
        </div>
        
      </div >
      <div className="post1"><img id="poster" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg" alt="poster"/></div>
      </div>
    </div>
 </div>
 <div className='cards_main'>
      <div className='cards_div1'>
     <div className='fimg1'> <Four_img   content1="Shop by category" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg" img2="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg" img3="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby240X._SY170_CB468850909_.jpg" img4="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg" cimg1="Computers" cimg2="Video Games" cimg3="Baby" cimg4="Toys & Games" content2="Shop now"/> </div>
     <div className='fimg1'><Singlecard  content1="Health & Personal Care" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" content2="Shop now"/></div>
     <div className='fimg1'><Singlecard  content1="Dresses" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" content2="Explore more"/></div>
     <div className='fimg1'><Scard  content1="Easy returns" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" content2="Learn more"/></div> 
    </div>
 </div>
 

 <div  className='scroll_img_head'>
 <div className='scroll_images'>
    <div className='heading'>Frequently repurchased in Durg store <span>Shop now</span></div>
    <div className='images12'>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/914yvzv7ACL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/714ieWrwbPL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71oaxrHBKkL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71V8kyX5-JL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/61YO+aQShHL._AC_SY200_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/61YO+aQShHL._AC_SY200_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71cUZC7mCqL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/91a9Yf8KbdL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/61Se5sV73RL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/51yeBfRCRUL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/91-R5huHLnL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/81mhmxLv4JL._AC_SY400_.jpg" alt="scroll"/>
        
      </div>
    </div></div>
    <div  className='scroll_img_head'>
    <div className='scroll_images'>
    <div className='heading'>Frequently repurchased in pet store <span>Shop now</span></div>
    <div className='images12'>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71LtXuEA1sL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71e-xrfjv3L._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/81fNJp6gTZL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/81P8wwMsqvL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71Z-lMc5IOS._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/81Wia8VaOeL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/61rV7AbNcQL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71BM6zkXZbL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/91D3RbgzKjL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/718JS-vaRHS._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/512gP8cz7fL._AC_SY400_.jpg" alt="scroll"/>
        <img id="scrollimg" src="https://m.media-amazon.com/images/I/71yvqBnUtKL._AC_SY400_.jpg" alt="scroll"/>
      
        
      </div>
    </div> </div>
    <div className='cards_main'>
      <div className='cards_div1'>
     <div className='fimg1'> <Singlecard  content1="New arrivals in Toys" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg" content2="Shop now"/> </div>
     <div className='fimg1'><Singlecard  content1="For your Fitness Needs" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg" content2="Shop now"/></div>
     <div className='fimg1'><Singlecard  content1="Shop activity trackers " content12="and smartwatches" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" content2="Explore more"/></div>
     <div className='fimg1'><Singlecard  content1="Kindle E readers" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Desktop_Dash_Kindle_2X._SY608_CB639752734_.jpg" content2="Shop now"/></div> 
    </div>
 </div>

    <div  className='scroll_img_head'>
  <div className='scroll_images'>
    <div className='heading'>popular items this session <span>Shop now</span></div>
    <div className='images12'>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/81ZEdtYBYfL._AC_SY400_.jpg" alt="scroll"/>
      <img  id="scrollimg" src="https://m.media-amazon.com/images/I/71hIjJkMqFL._AC_SY400_.jpg" alt="scroll"/>
      <img  id="scrollimg" src="https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/51irVXBTIrL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/61jn8lQRObL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/916UyKn-4QL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/71FVMsfij+L._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/71HN4P-pd5L._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/715LkF0QqAL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/617sGSjmC1L._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/81OiT2-NoeL._AC_SY400_.jpg" alt="scroll"/>
      <img id="scrollimg" src="https://m.media-amazon.com/images/I/613Ul9l0BaL._AC_SY400_.jpg" alt="scroll"/>
      </div>
    </div>
    </div>
   
    <div  className='scroll_img_head'>
  <div className='scroll_images'>
    <div className='heading'>International Top sellers <span>Shop now</span></div>
    <div className='images12'>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61pP5gObVXL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/81cAudYI+9L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71rJy3iVNRL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71gtg+3WVSL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/51CUt8fu+uL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61rowppY2TL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/31lC7JJnlkL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/41D5KYODdAL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/81qOD8EZTjL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/91jXI3HY2nL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/716EKQkCx-L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/51a4IxD5XsL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71VfR7Xhk8L._AC_SY400_.jpg" alt="scroll"/>
    
    
      </div>
    </div>
  
    </div>
    
   
    <div className='cards_main'>
      <div className='cards_div1'>
     <div className='fimg1'> <Singlecard  content1="Create with strip lights" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg" content2="Shop now"/> </div>
     <div className='fimg1'><Singlecard  content1="Shop Laptops & Tablets" content12="" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg" content2="Shop now"/></div>
     <div className='fimg1'><Singlecard  content1="Shop Pet supplies " content12="and smartwatches" img1="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg" content2="Explore more"/></div>
     <div className='fimg1'><Four_img   content1="a holiday home  starts" content12=" here" img1="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/T522/Decor1-186x116._SY116_CB607560774_.jpg" img2="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/T522/Kitchen1-372x232._SY232_CB607560774_.jpg" img3="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/T522/Entertaining-372x232._SY232_CB607560774_.jpg" img4="https://images-na.ssl-images-amazon.com/images/G/01/home/kariep/T522/Bedding-372x232._SY232_CB607560774_.jpg" cimg1="Decor" cimg2="Kitchen" cimg3="Entertaining" cimg4="Bath"  content2="Shop Home Holiday Prep "/> </div> 
    </div>
 </div>

 <div  className='scroll_img_head'>
  <div className='scroll_images'>
    <div className='heading'>Home Décor Under $20 <span>Shop now</span></div>
    <div className='images12'>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/613+CG1dP1L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/71kENaxQixL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/61XYX1tzoTL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/41d1tq6oesL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/81AOpcqJfHL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/61VxFel4T9L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/71CDFmK2qNS._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/710xU17suIL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/71Mda9UuJhL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg1" src="https://m.media-amazon.com/images/I/61XwmZLvaNL._AC_SY400_.jpg" alt="scroll"/>
    
    
      </div>
    </div>
  
    </div>


 
    <div  className='scroll_img_head'>
  <div className='scroll_images'>
    <div className='heading'>Top Sellers in Books for you <span></span></div>
    <div className='images12'>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/515QcHz5C5L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71m8rM7sFjL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61L9FLeci1L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61cT1CBepKL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/6137eG2okrL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/6137eG2okrL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/511Ng2MIRFL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61Ia4bAOJoL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/41vW+mlopWL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61cF3Lfr6tL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61DWAz77kEL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61A7+sTxu9L._AC_SY400_.jpg" alt="scroll"/>
   
      </div>
    </div>
  
    </div>
    <div>  <Images_onclick /> </div>

    <div  className='scroll_img_head'>
  <div className='scroll_images'>
    <div className='heading'>Popular Gifts in Baby <span>Shop now</span></div>
    <div className='images12'>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61t66wWbwSL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71hMN-O-OAL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/81gWQOAReLL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/6129I-o5iLL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71nEuBNdHSL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/81c5jJ6+NpL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/61vCn24QwwL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/817Rqx4FHSL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/8161Wp4qq9L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71KZF3CYRLL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/71y5ZsbotZL._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/91cmJZhpc9L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/8198yfo8r0S._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/613hQ37QW3L._AC_SY400_.jpg" alt="scroll"/>
    <img id="scrollimg" src="https://m.media-amazon.com/images/I/6129I-o5iLL._AC_SY400_.jpg" alt="scroll"/>
      </div>
     
    </div>
   
  
    </div>
    
   
    </div>
   
    </div>
 
  )
} 

export default Cards     

