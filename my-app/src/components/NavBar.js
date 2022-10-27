import React from "react";
import "../CSS/nav.css";
import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <>
    
      
      <nav className="navbar navbar-expand-lg navbar-dark topnav">
        <div className="container-fluid">
        <img src="../images/outline_balcony_white_24dp.png" alt="balcony" class="balcony"/>
          <Link className="navbar-brand navbrand" to="/">
            Perfect View
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item active text-center">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item active text-center">
                <Link className="nav-link" to="/postyourproperty">
                  Post Property
                </Link>
              </li>
              <li className="nav-item active text-center">
                <button
                  type="button"
                  className="btn navbtn"
                  data-bs-toggle="modal"
                  data-bs-target="#ContactUsmodal"
                >
                  Contact Us
                </button>
              </li>
              <li className="nav-item active text-center">
                <Link className="nav-link" to="/login">
                  <i
                    className="fa fa-user-circle"
                    style={{ "fontSize": "15px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
