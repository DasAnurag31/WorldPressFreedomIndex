import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import ListIndex from "./components/ListIndex";
import TableComponent from "./components/TableComponent";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [page, setpage] = useState("");

  return (
    <div id="app" className="bg-violet-800">
      <NavBar page={page} />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="list" element={<TableComponent />} />
      </Routes>
    </div>
  );
};

export default App;
