import React from "react";
import { Routes, Route } from "react-router-dom";
// Layout
import { Navbar } from "./layout/Navbar";
// Pages
import { ActivePage } from "./pages/ActivePage";
import { ArchivePage } from "./pages/ArchivePage";
import { StatusPage } from "./pages/StatusPage";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<ActivePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>
    </div>
  );
};

export default App;
