import React, { useState } from "react";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Garage from "./Pages/Garage";
import Contact from "./Pages/Contact ";
import Footer from "./Pages/Footer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const [garage, setGarage] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home gar={garage} setgar={setGarage} />} />
          <Route path="garage" element={<Garage gar={garage} />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
