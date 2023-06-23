import React from "react";
import Sidebar from "./Sidebar";
import TopPart from "./TopPart";
import Navbar from "./Navbar";

import img from "../Images/c18.png";

const Upload = () => {
  return (
    <>
      <div className="dash1">
        <div className="dash2">
          <Sidebar />
        </div>
        <div className="dash3">
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
                            <img src={img} alt="" />
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
    </>
  );
};

export default Upload;
