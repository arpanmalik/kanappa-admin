import React from "react";
import Modal from "react-bootstrap/Modal";

function UploadPoll(props) {
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
              <input type="text" placeholder="Poll Question" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Option one" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Option two" />
            </div>
            <button className="modal7">Upload</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadPoll;