import React from 'react';
import "../css/Home.css";
import { useState, useRef, useEffect } from "react";
import RegistSell from "./RegistSell";
import { setEmitFlags } from 'typescript';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


function Home() {
  const [count, setCount] = useState(1);

  var imgArray = new Array();
  imgArray[0] = img1;
  imgArray[1] = img2;
  imgArray[2] = img3;

  const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];

  useEffect(() => {
    setTimeout(() => {
      setCount(Math.floor((count+1)%3))
    }, 3000);
  })
  
  
  
  return (
    <div>
      <div className="container">
        <div className="side"></div>
        <div className="homecenter">
          <img id="rotImg" className="imglayout" src = {imgArray[count]} />

          <div className="registedItemContainer">
            최근에 등록된 상품
            <div className="itemContainer">
              {items.map((itemName) => <div className="item"><div className="itemImage">img</div>{itemName}</div>)}
            </div>
            
          </div>
        </div>
        <div className="side"></div>
      </div>
     
    </div>
  );
}

export default Home;
