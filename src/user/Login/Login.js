import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    validateError: "",
  });

  const onChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
    console.log(userInput);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <div className="mainRow flexJustifyCenter">
        <div className="login">
          <div className="loginBox">
            <h3 className="txtUpper">Sign in to your acocunt</h3>
            <h5>
              If you already have a Rimowa account, please sign in. We'll use
              your existing details for a speedier checkout.
            </h5>
            <form className="signInForm flexColumnCenter" onSubmit={onSubmit}>
              <p className="showError">{userInput.validateError}</p>
              <div className="inputWrapper">
                <input
                  type="eamil"
                  name="email"
                  placeholder="Email Address*"
                  value={userInput.email}
                  onChange={onChange}
                />
                <p className="showError">{userInput.emailError}</p>
              </div>
              <div className="inputWrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={userInput.password}
                  onChange={onChange}
                />
                <p className="showError">{userInput.passwordError}</p>
              </div>
              <button onClick={onSubmit}>Sign In</button>
            </form>
            <p className="txtUpper">
              <Link to="">Forgotten your password?</Link>
            </p>
          </div>
        </div>
        <div className="signup">
          <div className="signupBox">
            <h3 className="txtUpper">Don't have an account?</h3>
            <h5>Creating a RIMOWA account lets you:</h5>
            <ul className="pitchLine">
              <li>ADD ITEMS TO YOUR WISHLIST</li>
              <li>GET PERSONALISED RECOMMENDATIONS</li>
              <li>CHECK OUT MORE QUICKLY</li>
              <li>TRACK YOUR ORDERS</li>
              <li>REGISTER MY RIMOWA</li>
            </ul>
            <div className="Login center">
              <p>
                <Link to="/signup">Create Account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
