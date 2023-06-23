import React from "react";

import img from "../Images/c13.png";

const TopPart = ()=>{
    return (
        <>
            <div className="top1">
                <div className="top2">
                    <h2>Hello Mark ! </h2>
                    <p>It's good to see you again</p>
                </div>
                <div className="top3">
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}

export default TopPart;