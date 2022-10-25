import "./Flex.css";
import "./Regist.css";
import HorizonLine from "./Horizontalline";
import { useState, useEffect, ReactEventHandler } from "react";
import React from "react";
import Category from "./Category";
import ItemStatus from "./ItemStatus";
import Registbtn from "./Registbtn";

function RegistSell() {
  const [category, setCategory] = useState("");
  const [choice, setChoice] = useState("");
  const fileInput:any = React.createRef();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  const handleImageButton = (e: React.MouseEvent) => {
    fileInput.current.click();
  };

  const setImage = (e:any) => {
    console.log(e.target.files[0]);
  };

  const highFunction = (text:any) => {
    setCategory(text);
    console.log(text);
  }


  useEffect(() => {
    console.log(choice);
  }, [choice])

  return (
    <div>
      <div className="container">
        <div className="side"></div>
        <div className="center">
          <div>
            <h1>기본정보</h1>
          </div>
          <HorizonLine />
          <div className="container">
            <div className="side">
              <div className="title"></div>
              상품 이미지 (0/10)
            </div>
            <div className="main">
              <button className="imgBox" onClick={handleImageButton}></button>
              <input
                type="file"
                accept="img/*"
                ref={fileInput}
                onChange={setImage}
                style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle height10">
            <div className="side">
              <span className="title">제목</span>
            </div>
            <div className="main">
              <input
                className="titleInput"
                placeholder="제목을 입력해주세요"
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitlecategory height30">
            <div className="side">
              <span className="title">카테고리</span>
            </div>
            <div className="main">
              <Category/>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle height10">
            <div className="side">
              <span className="title">제품상태</span>
            </div>
            <div className="main">
              <ItemStatus />
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">즉시 판매가</span>
            </div>
            <div className="main">
              <input
                className="titleInputprice"
                type="text"
                placeholder="숫자만 입력해주세요."
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">경매 하한가</span>
            </div>
            <div className="main">
              <input
                className="titleInputprice"
                placeholder="숫자만 입력해주세요."
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <div className="titleEx">설명</div>
            </div>
            <div className="main">
              <input
                className="explaneInput"
                placeholder="여러장의 사진과 구입 시기, 브랜드, 사용감, 하자 여부등 상세 정보를 기입해주세요"
              ></input>
            </div>
          </div>
          <div className="containerTitle"></div>
        </div>
        <div className="side"></div>
      </div>
      <Registbtn/>
    </div>
  );
}

export default RegistSell;
