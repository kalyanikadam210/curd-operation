import React from "react";
import "./App.css";
import Create from "./compoents/Create";
import Read from "./compoents/Read";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upadate from "./compoents/Upadate";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/update" element={<Upadate />} />
          <Route exact path="/read" element={<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
