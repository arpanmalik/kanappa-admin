import React, {useState} from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c18.png";
import img2 from "../Images/c22.png";

const Predict = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
              <div className="predict4">
                <div className="predict5">
                  <h6>+Add Questions</h6>
                  <p>Questions for the Predict and win section</p>
                </div>
                <div className="predict6">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="predict7">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>Upload the Predict & Win Banner</p>
              </div>
              <div className="predict7">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>Upload the Predict & Win Banner</p>
              </div>
              <div className="predict7">
                <i class="fa-solid fa-cloud-arrow-up"></i>
                <p>Upload the Predict & Win Banner</p>
              </div>
              <div className="predict4">
                <div className="predict5">
                  <h6>+Add Questions</h6>
                  <p>Questions for the Predict and win section</p>
                </div>
                <div className="predict6">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="predict4">
                <div className="predict5">
                  <h6>+Add Questions</h6>
                  <p>Questions for the Predict and win section</p>
                </div>
                <div className="predict6">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
            <div className="predict3">
              <Navbar />
              <div className="predict4">
                <div className="predict5">
                  <h6>+Add Tips</h6>
                  <p>https://college-app-ebon.vercel.app/</p>
                </div>
                <div className="predict6">
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="predict8">
                <h4>Leaderboard</h4>
                <div className="predict9">
                  <img src={img2} alt="" />
                </div>
                <div className="predict9">
                  <img src={img2} alt="" />
                </div>
                <div className="predict9">
                  <img src={img2} alt="" />
                </div>
                <div className="predict9">
                  <img src={img2} alt="" />
                </div>
              </div>
              <button className="predict10">Restart/Reset</button>
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

export default Predict;
