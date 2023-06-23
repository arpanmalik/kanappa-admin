import React from "react";
import Modal from "react-bootstrap/Modal";

function UploadModal2(props) {
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
            <div className="modal4">
              <button className="modal5">MEN</button>
              <button className="modal6">WOMEN</button>
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <select>
                <option value="">Tournament</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <select>
                <option value="">Select Rank</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Team Name" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Rating" />
            </div>
            <button className="modal7">Update</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadModal2;
