import React from "react";

import img from "../Images/c16.png";
import img2 from "../Images/c17.png";

const Navbar = () => {
  return (
    <>
    <div className="nav4">
      <div className="nav1">
         <div className="nav2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" />
        </div>
        <div className="nav3">
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <select>
                <option></option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
