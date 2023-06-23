import React from "react";
import {useNavigate} from "react-router-dom";
import img from "../Images/c1.png";
import img2 from "../Images/c2.png";
import img3 from "../Images/c3.png";

const Login = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="login1">
        <div className="login2">
          <div className="login3">
            <img className="login5" src={img} alt="" />
            <img className="login6" src={img2} alt="" />
          </div>
          <div className="login4"></div>
        </div>
        <div className="login7">
          <img src={img3} alt="" />
          <div className="login8">
            <p>Welcome back !!!</p>
            <h3>Sign in</h3>
            <div className="login9">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="login9">
              <i class="fa-solid fa-lock"></i>
              <input type="email" placeholder="Email Address" />
              <i class="fa-solid fa-eye"></i>
            </div>
            <h6 onClick={()=>navigate("/forgot-pass")}>Forget Password ?</h6>
            <button onClick={()=>navigate("/dashboard")}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
