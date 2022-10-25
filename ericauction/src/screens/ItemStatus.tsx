import React from "react";
import react from "react";
import { useState, useRef } from "react";
import { isTemplateExpression } from "typescript";
import "./ItemStatus.css";
import UsedStatusBar from "./UsedStatusBar";

function ItemStatus() {
    const [radio, setRadio] = useState<any>(true);
    const [defaultradio, setDefaultradio] = useState("used");
    
    const ClickEventHandler = (e : React.MouseEvent) => {
        const tmp = e.target as HTMLElement;
        if(defaultradio === tmp.id) return;
        console.log(defaultradio);
        console.log(tmp.id);
        setDefaultradio(tmp.id);
        setRadio(!radio);
        console.log(defaultradio); //여기 왜 바뀌는데 찍히는건 바뀌기 전의 로그가 찍히지?
    }

    return(
        <div>
            <input type="radio" id="used" value="중고 상품" onClick={ClickEventHandler} checked = {radio} />
            중고상품
            <input type="radio" id="new" value="새 상품" onClick={ClickEventHandler} checked = {!radio}></input>
            새상품

            {radio && <UsedStatusBar />}
        </div>
    )

}

export default ItemStatus;