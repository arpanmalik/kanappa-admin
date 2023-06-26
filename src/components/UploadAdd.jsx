import React from "react";
import Modal from "react-bootstrap/Modal";
import img from "../Images/c23.png";

function UploadAdd(props) {
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
              <select>
                <option value="">Add Section</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="modal8">
              <img src={img} alt="" />
              <p>Drag and drop an video / link, or Browse</p>
            </div>
            <button className="modal7">Save</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadAdd;
