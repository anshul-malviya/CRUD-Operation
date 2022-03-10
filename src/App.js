import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Adduser from "./Components/Adduser";
import Alluser from "./Components/Alluser";
import Edit from "./Components/Edit";
import Error from "./Components/Error";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<Alluser />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
export default App;