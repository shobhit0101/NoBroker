import React from "react";
// import "../CSS/login.css";
import Footer from "./Footer";
const Login = () => {
  return (
    <>
      <div className="logincontainer">
        <div className="container">
          <form action="/login" className="form" id="login" method="POST">
            <h1 className="form__title">Login</h1>
            <div className="form_message form_message--error"></div>
            <div className="form__input-group">
              <input
                type="text"
                className="form__input"
                autoFocus
                placeholder="Username or email"
                id="name"
                name="name"
              />
              <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
              <input
                type="password"
                className="form__input"
                autoFocus
                placeholder="Password"
                name="passs"
                id="passs"
              />
              <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">
              Continue
            </button>
            <p className="form__text">
              <a href="/admin_login" className="form__link">
                Admin Login
              </a>
            </p>
            <p className="form__text">
              <a className="form__link" href="./" id="linkCreateAccount">
                Don't have an account? Create account
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
