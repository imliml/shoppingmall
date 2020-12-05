import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignUp.scss";

const SignUp = () => {
  const [userInput, setUserInput] = useState({
    fname: "",
    lname: "",
    email: "",
    pw1: "",
    pw2: "",
    pwtype: "password",
    visibility: "Show",
    personalData: false,
    Privacy: false,
    fnameError: "",
    lnameError: "",
    emailError: "",
    pw1Error: "",
    pw2Error: "",
  });

  const handlePrivacy = () => {};

  const handlePersonalData = () => {};

  const handlePw = () => {
    if (userInput.pwtype === "password") {
      setUserInput({ pwtype: "text", visibility: "hide" });
    } else {
      setUserInput({ pwtype: "password", visibility: "show" });
    }
  };

  const onChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <div className="mainRow flexJustifyCenter">
        <div className="signup">
          <h3 className="txtUpper center">Create a Rimowa Account</h3>
          <form className="signInForm flexColumnCenter" onSubmit={onSubmit}>
            <div className="inputWrapper flex">
              <div className="left" />
              <div className="right">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name*"
                  value={userInput.fname}
                  onChange={onChange}
                />
                <p classNam="showError center">{userInput.fnameError}</p>
              </div>
            </div>

            <div className="inputWrapper flex">
              <div className="left" />
              <div className="right">
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name*"
                  value={userInput.lname}
                  onChange={onChange}
                />
                <p classNam="showError center">{userInput.lnameError}</p>
              </div>
            </div>

            <div className="inputWrapper flex">
              <div className="left" />
              <div className="right">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={userInput.email}
                  onChange={onChange}
                />
                <p classNam="showError center">{userInput.emailError}</p>
              </div>
            </div>

            <div className="inputWrapper flex">
              <div className="left" />
              <div className="right">
                <input
                  type={userInput.pwtype}
                  name="pw1"
                  placeholder="Password *"
                  value={userInput.pw1}
                  onChange={onChange}
                />
                <span className="togglePw" onClick={handlePw}>
                  {userInput.visibility}
                </span>
                <p classNam="showError center">{userInput.pw1Error}</p>
                <p className="passwordreq center">
                  The password must contain at least 8 characters including 1
                  number, 1 upper and 1 lower case letter
                </p>
              </div>
            </div>

            <div className="inputWrapper flex">
              <div className="left" />
              <div className="right">
                <input
                  type="password"
                  name="pw2"
                  placeholder="Confirm Password *"
                  value={userInput.pw2}
                  onChange={onChange}
                />
                <p classNam="showError center">{userInput.pw2Error}</p>
              </div>
            </div>

            <div className="checkWrapper flex">
              <div className="left">
                <input
                  type="checkbox"
                  checked={userInput.personalData}
                  onChange={handlePersonalData}
                />
              </div>
              <div className="right">
                <p>
                  I consent to RIMOWA processing my personal data in order to
                  send personalised marketing material in accordance with the
                  consent form and the privacy policy.
                </p>
              </div>
            </div>

            <div className="checkWrapper flex">
              <div className="left">
                <input
                  type="checkbox"
                  checked={userInput.Privacy}
                  onChange={handlePrivacy}
                />
              </div>
              <div className="right">
                By clicking "create account", I consent to the privacy policy.
              </div>
            </div>
            <button onClick={onSubmit}>Create Account</button>
          </form>
          <div className="caption center">
            <p>By creating an account, you agree to our:</p>{" "}
            <p>
              <Link to="">TERMS OF CONDITIONS</Link> |
              <Link to="">PRIVACY POLICY</Link>
            </p>
          </div>
          <div className="signin center">
            <p>
              <Link to="/login">ALREADY HAVE AN ACCOUNT?</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
