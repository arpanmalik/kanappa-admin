import React, {useState} from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";
import UploadAdd from "./UploadAdd";

import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c18.png";

const Upload = () => {
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
            <div className="upload1">
                <div className="upload2">
                    <TopPart />
                </div>
                <div className="upload3">
                    <Navbar />
                    <div
                        className="dash12"
                        style={{ width: "90%", marginLeft: "2%" }}
                    >
                        <div className="dash13">
                            <h6>+ Add Adds</h6>
                            <p>Upload adds of every section</p>
                        </div>
                        <div className="dash14">
                            <img src={img} alt="" onClick={()=>setShow2(true)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upload4">
                <div className="upload5">
                    <select>
                        <option value="">Article</option>
                        <option value="">Article</option>
                        <option value="">Article</option>
                        <option value="">Article</option>
                    </select>
                </div>
                <div className="upload6">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Edit/Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Lorem Ipsum</td>
                                <td>10.05.2023</td>
                                <td>Active</td>
                                <td className="upload7">
                                    <button className="upload8">Edit</button>
                                    <button className="upload9">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
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

export default Upload;
