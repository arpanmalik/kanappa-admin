import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import img from "../Images/c5.png";
import img2 from "../Images/c6.png";
import img3 from "../Images/c7.png";
import img4 from "../Images/c8.png";
import img5 from "../Images/c9.png";
import img6 from "../Images/c10.png";
import img7 from "../Images/c11.png";
import img8 from "../Images/c12.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="side1">
      <img className="side4" src={img} alt="" onClick={() => navigate("/")} />
      <div className="side2">
        <div className={location.pathname==="/dashboard"?"side3":"side3i"} onClick={() => navigate("/dashboard")}>
          <img src={img2} alt="" />
          <p>Dashboard</p>
        </div>
        <div className={location.pathname==="/sports"?"side3":"side3i"}  onClick={() => navigate("/sports")}>
          <img src={img3} alt="" />
          <p>Sports</p>
        </div>
        <div className={location.pathname==="/upload"?"side3":"side3i"}  onClick={() => navigate("/upload")}>
          <img src={img4} alt="" />
          <p>Uploads</p>
        </div>
        <div className={location.pathname==="/predict"?"side3":"side3i"}  onClick={() => navigate("/predict")}>
          <img src={img5} alt="" />
          <p>Predict & Win</p>
        </div>
        <div className="side3i">
          <img src={img6} alt="" />
          <p>Upload Ads</p>
        </div>
        <div className={location.pathname==="/report"?"side3":"side3i"}  onClick={() => navigate("/report")}>
          <img src={img7} alt="" />
          <p>Report & Analytics</p>
        </div>
        <div className="side3i" onClick={()=>navigate("/")}>
          <img src={img8} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
