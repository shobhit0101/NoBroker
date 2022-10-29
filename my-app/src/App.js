import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import PostPropertyForm from "./components/Postproperty/PostPropertyForm";
import Login from "./components/Login.js";
import Filter from "./components/Filter/Filter";
import Markonmap from "./components/Postproperty/Postpropform_comp/Markonmap";
function App() {
  return (
    <>
      <Router>        
        {/* <NavBar /> */}

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/postyourproperty" element={<PostPropertyForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/search" element={<Filter />} />
          <Route exact path="/map" element={<Markonmap />} />
          <Route exact path="/" element={<Home />} />
            
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  );
}

export default App;