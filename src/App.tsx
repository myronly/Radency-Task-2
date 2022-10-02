import { Routes, Route } from "react-router-dom";
import { CreateNote } from "./components/table/CreateNote";

import { Navbar } from "./layout/Navbar";

import { ActivePage } from "./pages/ActivePage";
import { ArchivePage } from "./pages/ArchivePage";
import { StatusPage } from "./pages/StatusPage";

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Routes>
        <Route path="Radency-Task-2/active" element={<ActivePage />} />
        <Route path="Radency-Task-2/archive" element={<ArchivePage />} />
        <Route path="Radency-Task-2/status" element={<StatusPage />} />
      </Routes>
      <CreateNote />
    </div>
  );
};

export default App;
