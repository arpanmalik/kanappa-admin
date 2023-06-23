import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPass from "./components/ForgotPass";
import Dashboard from "./components/Dashboard";
import Sports from "./components/Sports";
import Upload from "./components/Upload";
import Predict from "./components/Predict";
import ReportAnalysis from "./components/Report";
import Add from "./components/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/report" element={<ReportAnalysis />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
