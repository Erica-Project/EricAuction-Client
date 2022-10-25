import "./UsedStatusBar.css";
import React, { useState, useRef } from "react";


function UsedStatusBar () {
    const [color, Setcolor] = useState<any>();
    
    const statusinfo = {
        'status' : ["매우 나쁨", "나쁨", "보통", "좋음", "매우 좋음"],
        'color' : ["red", "orange", "yellow", "green", "blue"]
        
    };

    const ClickEventHandler = (e : React.MouseEvent) => {
        const tmp = e.target as HTMLElement;
        if(!color){
            Setcolor(tmp);
            tmp.classList.add('addcolor');
        } 
        else if(color !== tmp){
            color.classList.remove('addcolor');
            tmp.classList.add('addcolor');
            Setcolor(tmp);
        }
    }
    

    


    return (
        <div className="statusbox">
            {statusinfo['status'].map((statusName) => <button className="status-btn" onClick={ClickEventHandler}>{statusName}</button>)}
        </div>
    )
}

export default UsedStatusBar;