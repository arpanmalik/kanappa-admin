import React from "react";
import {useNavigate} from "react-router-dom";
import img from "../Images/c4.png";
import img3 from "../Images/c3.png";

const ForgotPass = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="login1">
        <div className="login2">
          <div className="login3">
            <img className="login5" src={img} alt="" />
          </div>
          <div className="login4"></div>
        </div>
        <div className="login7">
          <img  src={img3} alt="" />
          <div className="login8">
            <p>Change Your</p>
            <h3>Password</h3>
            <div className="login9">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
              <i class="fa-solid fa-eye"></i>
            </div>
            <div className="login9">
              <i class="fa-solid fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
              <i class="fa-solid fa-eye"></i>
            </div>
            <button onClick={()=>navigate("/")}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
