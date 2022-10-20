import React from 'react';
import "../css/headerbar.css";


function HeaderBar() {
  return (
    <div className="Hcontainer">
      <div className="side">
        <div style={{width:'100%',height:'100%'}}>
        </div>
      </div>
      <div className="center">
        <div className="centercontainertop"></div>
        <div className="centercontainer">
          <div className="titleBox">
            <div>
              <span className='HeaderTitle'>EricAuction</span>
            </div>
          </div>
          <div className="searchBox">
            <div style={{width:'100%'}}>
              <input type="search" className="searchInput" placeholder="찾고 있는 상품을 검색해 주세요"></input>
            </div>
          </div>
          <div className="etcBox">
            <div className="realtime">
                <span className="realtimeText">실시간 검색어</span>
            </div>
          </div>
        </div>
        <div className="centercontainerbottom">
            <div className="menuside"></div>
            <div className="menubox">
                <a href='#'>홈</a>
                <a href='#'>카테고리</a>
                <a href='#'>판매하기</a>
                <a href='#'>내 상점</a>
            </div>
            <div className="menuside"></div>
        </div>
        
      </div>
      <div className="side">
        <div style={{width:'100%',height:'100%'}}>
        </div>
      </div>
    </div>
  );
}



export default HeaderBar;
