import React from 'react';
import "../css/home.css";
import RegistSell from "./RegistSell";


function Home() {
  return (
    <div>
        <div style={{height:100}}>
            
        </div>
        <div className='homecenter'>
            <RegistSell />
            {/* <span style={{fontSize:100}}>홈 화면입니다</span> */}
        </div>
    </div>
  );
}

export default Home;
