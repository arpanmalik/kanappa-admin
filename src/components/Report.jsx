import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";
import Calendar from "react-calendar";

import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import UploadAdd from "./UploadAdd";
import ApexChart from "./ApexChart";

import "react-calendar/dist/Calendar.css";
import img2 from "../Images/c18.png";

const ReportAnalysis = () => {
  const [cal, setCal] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  return (
    <>
     <UploadAdd show={show2} onHide={() => setShow2(false)} />
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="dash100" onClick={()=>handleShow(true)}>
              <i class="fa-solid fa-bars"></i>
          </div>
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
                <ApexChart />
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
                    <img src={img2} alt="" onClick={()=>setShow2(true)} />
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
                  <ApexChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ReportAnalysis;
