import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Newnavbar from "./components/Newnavbar";
import "./index.css";
import Resister from "./components/Resister";
import Giftcard from "./Giftcard";
import Today_deals from "./Today_deals";
import styled from 'styled-components';
import Unavilable from "./Unavilable";
import Promotion from "./Promotion";
import Sell from "./Sell";
import Footer_ from "./Footer_";
import Form from "./Form";
import Cart from "./Cart";
import Footer from "./components/Footer";
import Detailed_product from "./Detailed_product"
import Vedios1 from "./Vedios1"
import Images from "./Images";
import Customercare from "./components/Customercare";



       




 
ReactDOM.render(
  <><BrowserRouter>

<Navbar/>
<Newnavbar/>
  <Routes>
  <Route path="/" element={<Header/>}> </Route>
  <Route path="/Resister" element={<Resister/>}> </Route>
  <Route path="/customercare" element={< Customercare/>}> </Route>
  <Route path="/Today_Deals" element={<Today_deals/>}> </Route>
  <Route path="/Gifts_Cards" element={<Giftcard/>}> </Route>
  <Route path="/unavilable" element={<Unavilable/>}> </Route>
  <Route path="/promotion" element={<Promotion/>}> </Route>
  <Route path="/sell" element={<Sell/>}> </Route>
  <Route path="/form" element={<Form/>}> </Route>
<Route path="/cart" element={<Cart/>}></Route>

    
    </Routes>
   
 
<Footer_/>
    </BrowserRouter>


  </>,document.getElementById("root")
);
