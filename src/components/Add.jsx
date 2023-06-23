import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";

import UploadModal from "./UploadModal";
import UploadModal2 from "./UploadModal2";
import UploadReel from "./UploadReel";
import UploadPoll from "./UploadPoll";
import UploadStory from "./UploadStory";
import "bootstrap/dist/css/bootstrap.min.css";

import img from "../Images/c18.png";

const Add = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  return (
    <>
      <UploadModal show={show} onHide={() => setShow(false)} />
      <UploadModal2 show={show2} onHide={() => setShow2(false)} />
      <UploadReel show={show3} onHide={() => setShow3(false)} />
      <UploadPoll show={show4} onHide={() => setShow4(false)} />
      <UploadStory show={show5} onHide={() => setShow5(false)} />
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="add1">
            <div className="add2">
              <TopPart />
            </div>
            <div className="add3">
              <Navbar />
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
          </div>
          <div className="add4">
            <div className="predict4">
              <div className="predict5">
                <h6>+Upload News</h6>
                <p>Updated on news page</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Update Ranking</h6>
                <p>Upload The Ranking at Home</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow2(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Upload Fantasy Previews</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow(true)} />
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
            <div className="predict4">
              <div className="predict5">
                <h6>+Upload Latest News</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Add Reels</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow3(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Upload Trending News</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Add Videos</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow3(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Upload Poll</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow4(true)} />
              </div>
            </div>
            <div className="predict4">
              <div className="predict5">
                <h6>+Add Content</h6>
                <p>Questions for the Predict and win section</p>
              </div>
              <div className="predict6">
                <img src={img} alt="" onClick={() => setShow5(true)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
