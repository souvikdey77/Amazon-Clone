import { Link } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://lh3.googleusercontent.com/proxy/-1br5t-p2o-OfzZ5sGBBr_1FtTRPo7ADAYJng91o1-u3w-fVnJByIdc2AHUCD6mVqk0m-0W9yjZ-t-7dL7tS22g9iJ9qd23JEJQPXwsaXTJc1aNAmeF2GWL24cCHNM_NWBkMO8iPGjZvd9qyz28TvxlVez4L4ew"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to Amazon Fake Version (by SOUVIK DEY)
          Conditions of use & Sale. Please see our Privacy Notice, our Cookies
          Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
