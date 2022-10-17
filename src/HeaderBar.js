import React from "react";
import "./HeaderBar.css";
import "./Flex.css";

const HeaderBar = () => {

  return (
    <div className="Hcontainer">
      <div className="side">
        <div style={{backgroundColor:'red',width:'100%',height:'100%'}}>

        </div>
      </div>
      <div className="center">
        <div className="centercontainer">
          <div className="titleBox">
            <div>
              <span className="HeaderTitle">EricAuction</span>
            </div>
          </div>
          <div className="searchBox">
            <div style={{width:'100%'}}>
              <input type="search" className="searchInput" placeholder="찾고 있는 상품을 검색해 주세요"></input>
            </div>
          </div>
          <div className="etcBox">

          </div>
        </div>
      </div>
      <div className="side">
        <div style={{backgroundColor:'red',width:'100%',height:'100%'}}>

        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
