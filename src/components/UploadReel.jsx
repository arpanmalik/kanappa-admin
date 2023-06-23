import React from "react";
import Modal from "react-bootstrap/Modal";
import img from "../Images/c23.png";

function UploadReel(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal1">
          <div className="modal2">
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Reel Title" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Paste the link of reel" />
            </div>
            <div className="modal8">
              <img src={img} alt="" />
              <p>Drag and drop an video / link, or Browse</p>
            </div>
            <button className="modal7">Upload</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadReel;
