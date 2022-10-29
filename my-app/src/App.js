import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import PostPropertyForm from "./components/Postproperty/PostPropertyForm";
import Login from "./components/Login.js";
import Admin_home from "./components/Admin_Portal/Admin_home";
import Admin_user from "./components/Admin_Portal/Admin_user";
import Admin_property from "./components/Admin_Portal/Admin_property";
import Admin_ContactUs from "./components/Admin_Portal/Admin_ContactUs";



import Filter from "./components/Filter/Filter";
import Markonmap from "./components/Postproperty/Postpropform_comp/Markonmap";
function App() {
  return (
    <>
      <Router>


        <Routes>


          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/postyourproperty" element={<PostPropertyForm />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/Admin_home" element={<Admin_home />} />
          <Route exact path="/Admin_user" element={<Admin_user />} />
          <Route exact path="/search" element={<Filter />} />
          <Route exact path="/Admin_property" element={<Admin_property />} />
          <Route exact path="/Admin_ContactUs" element={<Admin_ContactUs />} />


        </Routes>

      </Router>
    </>
  );
}

export default App;