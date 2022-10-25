import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="foot">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-6">
                <h5 className="footer-features-text">Features</h5>
                <ul className="nav flex-column">
                  <li className="footer-item">
                    <Link className="footer-item-text" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="footer-item-text" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="footer-item-text" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="footer-item">
                    <Link className="footer-item-text" to="postyourproperty">
                      Post your property
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h2 style={{ color: "white" }}>Contact Us at :-</h2>
                  <p style={{ "fontSize": "20px", color: "white" }}>
                    <i
                      className="fa fa-mobile mobilecolor"
                      style={{"fontSize":" 30px"}}
                      aria-hidden="true"
                    ></i>{" "}
                    +91 0123456789.
                  </p>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between py-1 my-1 border-top">
              <p style={{ color: "white", "marginTop": "20px" }}>
                © 2021 Company, Inc. All rights reserved.
              </p>
              <ul
                className="list-unstyled d-flex"
                style={{ "fontSize": "30px" }}
              >
                <li className="ms-3">
                  <Link className="link-light" to="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="link-light" to="#">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </Link>
                </li>
                <li className="ms-3">
                  <Link className="link-light" to="#">
                    <i
                      className="fa fa-facebook-official"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
