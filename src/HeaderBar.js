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
