import React, {useState} from "react";
import Sidebar from "./Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c20.png";
import img2 from "../Images/c18.png";
import img3 from "../Images/c24.png";
import img4 from "../Images/c25.png";

const Sports = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="dash1 sport100" >
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="dash100" onClick={()=>handleShow(true)}>
              <i class="fa-solid fa-bars"></i>
          </div>
          <div className="sport1">
            <div className="sport2">
              <table className="sport4">
                <thead>
                  <tr>
                    <th>Tournament Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Match</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport10"><ul>
                        <li>Successful</li>
                      </ul></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport11">
                      <ul>
                        <li>Unsuccessful</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport10"><ul>
                        <li>Successful</li>
                      </ul></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport11">
                      <ul>
                        <li>Unsuccessful</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport10"><ul>
                        <li>Successful</li>
                      </ul></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport11">
                      <ul>
                        <li>Unsuccessful</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport10"><ul>
                        <li>Successful</li>
                      </ul></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport11">
                      <ul>
                        <li>Unsuccessful</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport10"><ul>
                        <li>Successful</li>
                      </ul></td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>
                      <div className="sport9">
                        <img src={img3} alt="" />
                        <p>vs</p>
                        <img src={img4} alt="" />
                      </div>
                    </td>
                    <td className="sport11">
                      <ul>
                        <li>Unsuccessful</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sport3">
                <div className="sport5">
                    <select>
                    <option value="">Cricket</option>
                    <option value="">Football</option>
                    <option value="">Hockey</option>
                    </select>
                </div>
                <div className="sport6">
                    <p>Upload Articles</p>
                    <div className="sport7">
                    <h3>180</h3>
                    <img src={img} alt="" />
                    </div>
                    <div className="sport8">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="sport6">
                    <p>Upload Articles</p>
                    <div className="sport7">
                    <h3>180</h3>
                    <img src={img} alt="" />
                    </div>
                    <div className="sport8">
                        <img src={img2} alt="" />
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

export default Sports;
