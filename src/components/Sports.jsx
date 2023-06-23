import React from "react";
import Sidebar from "./Sidebar";

import img from "../Images/c20.png";
import img2 from "../Images/c18.png";

const Sports = () => {
  return (
    <>
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
          <div className="sport1">
            <div className="sport2">
              <table className="sport4">
                <thead>
                  <tr>
                    <th>Tournament Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
                  </tr>
                  <tr>
                    <td>Lorem Ipsum</td>
                    <td>10.05.2023</td>
                    <td>04:00 AM</td>
                    <td>Successful</td>
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
    </>
  );
};

export default Sports;
