import React from 'react';
import "./giftcard.css";
import {NavLink} from 'react-router-dom';
import Giftcard_scrolling from './Giftcard_scrolling'

const Giftcard = (props) => {
  return (
    <div>
        <div className='giftcard'>
 <div className='gifthead'>
               <span> Shop the perfect gift card </span>  
 </div>
            <hr/>
 <div className='gift_subhead'>
               <span>Shop by occasion</span>
 </div>
 <div className='giftlinks'>
        <ul>
        <li> <NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Occ_Easter_346x130.png" alt=""/> </NavLink></li>
    <li> <NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Occ_Birthday_346x130.png" alt=""/> </NavLink></li>
      <li> <NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Occ_THNX_346x130.png" alt=""/></NavLink></li> 
       <li><NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Occ_Workplace_346x130_EN.png" alt=""/></NavLink></li>
    <li> <NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Occ_NewBaby_346x130.png" alt=""/> </NavLink></li>
    <li> <NavLink  to ="/all" className="gift_list"><img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2021/GCLP/Support/2x/Occ_Wedding_346x130.png" alt=""/> </NavLink></li>
           </ul> 
          
   </div>
         <br/>
    
   <div className='see_all_originals_link'><span>see all originals</span> </div>
   <div className='shop_by_card_type_head'><span>Shop by card type</span></div>
   <div className='shop_cards'>

    <div className='shop_by_card_type_images'>
        <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_eGC._CB617227328_.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span>eGift Cards </span>

        </div>
        <div className='shop_card_discription'>
            <span> Add your personal message and send by email or text </span>

        </div>
        <div className='shop_card_link'><span>See options</span> </div>
    </div>

    <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_pGC.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span>Physical gift cards </span>

        </div>
        <div className='shop_card_discription'>
            <span>Send a smile with unique designs and fun packaging. </span>

        </div>
        <div className='shop_card_link'><span>Shop now</span> </div>
    </div>

    <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_PAH.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span>Print at home </span>

        </div>
        <div className='shop_card_discription'>
            <span>Print and fold an Amazon Gift Card at home. </span>

        </div>
        <div className='shop_card_link'><span>Get started</span> </div>
    </div>
    
    </div>


   </div>
   <hr/>
   <div>
   
    <div className='shop_by_card_type_images' >
        <div>
        <div className="shop_card_img1">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_2C_BGC_US.jpg" alt="" width="500px" height="150px"/>
        </div>
        <div className='shop_card_name'>
            <span>Specialty gift cards</span>

        </div>
        <div className='shop_card_discription'>
            <span> Give a gift from their favorite brand. </span>

        </div>
        <div className='shop_card_link'><span>See all brands</span> </div>
    </div>
    <div>
        <div className="shop_card_img1">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_2C_ASV.jpg" alt=""  width="500px" height="150px"/>
        </div>
        <div className='shop_card_name'>
            <span>Amazon Reload </span>

        </div>
        <div className='shop_card_discription'>
            <span>Easily add funds to your gift card balance. </span>

        </div>
        <div className='shop_card_link'><span>Find out how</span> </div>
    </div>
    </div>
    </div>
    <div className='shop_easter_celebrations'><span>Gift cards for Easter celebrations</span></div>
    <hr/>
    <div className='Shop_easter_scrolling_images_head'>
    <div className='Shop_easter_scrolling_images'>
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/41OTaFoz-hL._AC_SX184_.jpg" fdetails="Amazon.com Gift Card for any amount in various designs" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/519vWwMZ20L._AC_SX184_.jpg" fdetails="Amazon.com eGift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/41F7FVQpgNL._AC_SX184_.jpg" fdetails="Amazon.com Print at Home Gift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/51kQ8lmybQL._AC_SX184_.jpg" fdetails="Amazon.com eGift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/eastereggs_noto_email_v2016_us-main._CB619320669_.png" fdetails="Amazon.com eGift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/51H28RikgrL._AC_SX184_.jpg" fdetails="Amazon.com eGift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/41bRN3kZ5ZL._AC_SX184_.jpg" fdetails="Google Play Gift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/41jYCF9Mu4L._AC_SX184_.jpg" fdetails="Amazon.com Print at Home Gift Card" fdeals="10% off" fprize="120" />
    <Giftcard_scrolling fimg="https://images-na.ssl-images-amazon.com/images/I/41jevewSKsL._AC_SX184_.jpg" fdetails="Amazon.com eGift Card" fdeals="10% off" fprize="120" />
    </div>
        </div>

        <div>
            <hr/>
            <div className='shoppersonalisedcards'><span>Amazon.com Personalized eGift Cards</span></div>
            <div className='giftcardfooter'>

            <div className='shop_by_card_type_images'>
        <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_Personalized_Photo.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span> </span>

        </div>
        <div className='shop_card_discription'>
            <span> Make it special with a photo or video </span>

        </div>
        <div className='shop_card_link'><span>Shop now</span> </div>
    </div>

    <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_Personalized_Video.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span> </span>

        </div>
        <div className='shop_card_discription'>
            <span>Add more fun with animation and video </span>

        </div>
        <div className='shop_card_link'><span>Get started</span> </div>
    </div>

    <div>
        <div className="shop_card_img">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_3C_Personalized_ColoringPage.jpg" alt=""/>
        </div>
        <div className='shop_card_name'>
            <span> </span>

        </div>
        <div className='shop_card_discription'>
            <span>Personalized Coloring Page </span>

        </div>
        <div className='shop_card_link'><span>Shop now</span> </div>
    </div>
    
    </div>

            </div>
        </div><br/>
        <div className='shoppersonalisedcards'><span>Featured gift cards</span></div><br/>
        <div className='shop_footer_featured_images'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2022/Fall/GCLP/3C_Event_MilestoneMoments_US-en.png " alt="image1"/>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2022/Fall/GCLP/3C_Event_Music._CB617795802_.png " alt="image2"/>
            <img src=" https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2022/Fall/GCLP/3C_Event_Twitch.png" alt="twitter_images"/>
      
        </div>
        
        </div>

    </div>
  )
}

export default Giftcard
