import React from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import img from "../Images/c15.png";
import img2 from "../Images/c18.png";
import img3 from "../Images/c20.png";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="dash4">
            <div className="dash5">
              <TopPart />
              <div className="dash7">
                <div className="dash8">
                  <h3>11</h3>
                  <p>Article</p>
                </div>
                <div className="dash8">
                  <h3>$2.4K</h3>
                  <p>Money Earned</p>
                </div>
                <div className="dash8">
                  <h3>36</h3>
                  <p>News</p>
                </div>
              </div>
              <div className="dash9">
                <h1>Your Statistics</h1>
                <div className="dash10">
                  <h4>Working Hours</h4>
                  <h5>My Courses</h5>
                  <select>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                    <option value="">Yearly</option>
                  </select>
                </div>
                <img src={img} alt="" />
              </div>
            </div>
            <div className="dash6">
              <div className="dash11">
                <Navbar />
              </div>
              <div className="dash12">
                <div className="dash13">
                  <h6>+ Add Adds</h6>
                  <p>Upload adds of every section</p>
                </div>
                <div className="dash14">
                  <img src={img2} style={{paddingRight:"40px"}} alt="" onClick={() => navigate("/add")} />
                </div>
              </div>
              <div className="dash15">
                <div className="dash16">
                  <p>Upload Articles</p>
                  <div className="dash18">
                    <div className="dash19">
                      <h5>180</h5>
                      <img src={img3} alt="" />
                    </div>
                    <div className="dash20">
                      <img src={img2} alt="" onClick={() => navigate("/add")} />
                    </div>
                  </div>
                </div>
                <div className="dash16">
                  <p>Upload Articles</p>
                  <div className="dash18">
                    <div className="dash19">
                      <h5>180</h5>
                      <img src={img3} alt="" />
                    </div>
                    <div className="dash20">
                      <img src={img2} alt="" onClick={()=>navigate("/add")} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="dash21">
                <div className="dash22">
                  <div className="dash24">
                    <div className="dash25"></div>
                  </div>
                  <div className="dash26"></div>
                  <div className="dash27"></div>
                  <div className="dash26"></div>
                  <div className="dash27"></div>
                </div>
                <div className="dash23">
                  <div className="dash28"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
