import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TASK from "./component/TASK";
import EditForm from "./EditForm";
import Create from "./Create";
function Rout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TASK />} />
        {/* <Route path="/edit/:id" element={<EditForm />} /> */}
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}
export default Rout;
