import React, { useEffect, useRef, useState } from "react";
import "../css/Category.css";

const categories = ['남성 의류', '여성 의류', '신발', '가방', '시계/쥬얼리', '디지털/가전', '스타굿즈'];
const SubCategories: any = {
    '남성 의류': [
        '패딩/점퍼', '코트', '맨투맨', '후드티/후드집업', '티셔츠', '셔츠', '가디건', '니트/스웨터', '바지'
    ],
    '여성 의류': [
        '패딩/점퍼', '코트', '맨투맨', '후드티/후드집업', '티셔츠', '셔츠', '가디건', '니트/스웨터', '바지'
    ],
    '신발' : [
        '스니커즈', '남성화', '여성화'
    ],
    '가방' : [
        '여성가방', '남성가방', '여행용'
    ],
    '시계/쥬얼리' : [
        '시계', '쥬얼리'
    ],
    '디지털/가전' : [
        '모바일', '가전제품', 'PC', '카메라'
    ],
    '스타굿즈' : [
        'BTS', '윤하'
    ]
}

const Category = () => {
    const [category, setCategory] = useState<string>("");
    
    const ClickEventHandler = (e: React.MouseEvent) => {
        console.log((e.target as HTMLElement).textContent); // target : 좌표의 element return
        const tmp = (e.target as HTMLElement).textContent
        if (tmp === null) return;
        setCategory(tmp);
        console.log(SubCategories[tmp]);

        
        
        

        
    };
    return(
        <div>
        
            <div className="layout">
                {categories.map((categoryName) => <button className="btn-layout btn-font" onClick={ClickEventHandler}>{categoryName}</button>)}
                
            </div>
            <div className="layout">
                {category && SubCategories[category].map((data: string) => <button className="btn-layout btn-font">{data}</button>)}
            </div>
            <div className="layout">
                
            </div>
        </div>
    )
};

export default Category;
