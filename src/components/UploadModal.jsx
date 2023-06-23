import React from "react";
import Modal from "react-bootstrap/Modal";

function UploadModal(props) {
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
                <option value="">Sports Category</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Title" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Writer Name" />
            </div>
            <div className="modal3">
              <i class="fa-regular fa-envelope"></i>
              <input type="text" placeholder="Upload Banner" />
            </div>
            <div className="modal3">
                <i class="fa-sharp fa-solid fa-cloud-arrow-up"></i>
                <input type="file" placeholder="Upload File" />
            </div>
            <button className="modal7">Upload</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadModal;
