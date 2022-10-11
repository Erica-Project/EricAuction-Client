import "./App.css";
import "./Flex.css";
import "./Regist.css";
import HorizonLine from "./Horizontalline";
import { useState } from "react";
import React from "react";
import HeaderBar from "./HeaderBar";

function App() {
  const fileInput = React.createRef(null);

  const handleImageButton = (e) => {
    fileInput.current.click();
  };

  const setImage = (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    fetch("http://18.183.252.212:8080/uploadFile",{
      method: "POST",
      mode: "cors",
      header:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        file: formData
      })
    }).then((response) => console.log(response));
  };

  return (
    <div>
      <header>
        <HeaderBar />
      </header>
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
                //style={{ display: "none" }}
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">제목</span>
            </div>
            <div className="main">
              <input
                className="titleInput"
                placeholder="제목을 입력해주세요."
              ></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">카테고리</span>
            </div>
            <div className="main">
              <input className="titleInput"></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">세부 카테고리</span>
            </div>
            <div className="main">
              <input className="titleInput"></input>
            </div>
          </div>
          <HorizonLine />
          <div className="containerTitle">
            <div className="side">
              <span className="title">제품상태</span>
            </div>
            <div className="main">
              <div>
                <input type="radio" id="중고 상품" value="중고 상품" />
                중고상품
                <input type="radio" id="새 상품" value="새 상품"></input>
                새상품
              </div>
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
    </div>
  );
}

export default App;
