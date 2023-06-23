import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import img from "../Images/c15.png";
import img2 from "../Images/c18.png";

const ReportAnalysis = () => {
  const [cal, setCal] = useState(new Date());
  return (
    <>
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="predict1">
            <div className="predict2">
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
                <img src={img} alt="" style={{ width: "98%" }} />
              </div>
            </div>
            <div className="predict3">
              <div className="report1">
                <Navbar />
                <div className="predict4">
                  <div className="predict5">
                    <h6>+Add Questions</h6>
                    <p>Questions for the Predict and win section</p>
                  </div>
                  <div className="predict6">
                    <img src={img2} alt="" />
                  </div>
                </div>
                <div className="report2">
                  <h3>April 11,2021</h3>
                  <Calendar onChange={setCal} value={cal} />
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
                  <img src={img} alt="" style={{ width: "98%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportAnalysis;
