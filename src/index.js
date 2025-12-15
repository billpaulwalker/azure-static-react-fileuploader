import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import RunDetails from "./pages/RunDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload/:subject" element={<UploadPage />} />
        <Route path="/runs/:id" element={<RunDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);