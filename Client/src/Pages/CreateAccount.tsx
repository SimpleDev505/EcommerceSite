import { useState } from "react";
import { Link } from "react-router";
import validator from "validator";
import Dropdown from "../Components/DropDown";
import { MobileNumberMenuItems } from "./Menus/CreateAccountMenu";
import "../Styles/CreateAccount.css";

function CreateAccount() {
  const [invalidname, setinvalidname] = useState(false);
  const [invalidno, setinvalidno] = useState(false);
  const [invalidpass, setinvalidpass] = useState(false);
  const setname = (e: string) => {
    console.log(e);
    setinvalidname(!validator.isAlpha(e));
  };

  const setno = (e: string) => {
    setinvalidno(!validator.isMobilePhone(e));
  };
  const setpass = (e: string) => {
    setinvalidpass(!validator.isStrongPassword(e, { minNumbers: 6 }));
    console.log(invalidpass);
  };

  return (
    <>
      <div className="mainSignIn">
        <div className="logo"></div>
        <span className="signin-cnt">
          <p style={{ fontSize: "32px" }}>Create Account</p>
          <p style={{ fontSize: "16px", marginTop: ".5em" }}>Your name</p>
          <input
            onChange={(e) => setname(e.target.value)}
            className={"sign-in-input input-email-valid"}
            placeholder="First and Last Name"
            autoFocus={true}
            style={{
              height: "2.5em",
              borderRadius: "4px",
              padding: "3px 7px",
              marginTop: "2px",
            }}
            type="text"
          ></input>
          {invalidname ? (
            <div id="create-auth">
              <span className="create-invalid-icon"></span>
              <div>Name must not contain numbers or special characters</div>
            </div>
          ) : null}
          {/* mobile no */}
          <p style={{ fontSize: "16px", marginTop: ".5em" }}>Mobile number</p>
          <Dropdown
            dropdownbuttonbg="lightgrey"
            heading="India +91"
            items={MobileNumberMenuItems}
            width="fit-content"
            height="fit-content"
            scrollable={true}
            list_height="10em"
            border_radius=".3em"
          ></Dropdown>
          <input
            onChange={(e) => setno(e.target.value)}
            className={
              invalidno
                ? "sign-in-input input-email-invalid"
                : "sign-in-input input-email-valid"
            }
            style={{
              height: "2.5em",
              borderRadius: "4px",
              padding: "3px 7px",
              marginTop: "2px",
            }}
            type="number"
            placeholder="Mobile number"
          ></input>
          {invalidno ? (
            <div id="create-auth">
              <span className="create-invalid-icon"></span>
              <div>Enter your mobile number</div>
            </div>
          ) : null}
          {/* pass */}
          <p style={{ fontSize: "16px", marginTop: ".5em" }}>Password</p>

          <input
            onChange={(e) => setpass(e.target.value)}
            className={
              invalidpass
                ? "sign-in-input input-email-invalid"
                : "sign-in-input input-email-valid"
            }
            style={{
              height: "2.5em",
              borderRadius: "4px",
              padding: "3px 7px",
              marginTop: "2px",
            }}
            type="password"
            placeholder="At least 6 characters"
            min={6}
          ></input>
          {invalidpass ? (
            <div id="create-auth">
              <span className="create-invalid-icon"></span>
              <div>Enter your password</div>
            </div>
          ) : null}
          <div style={{ marginTop: ".5em", fontSize: "15px" }}>
            To verify your number, we will send you a text message with a
            temporary code. Message and data rates may apply.
          </div>
          <Link to="/createaccount">
            <div
              style={{
                textAlign: "center",
                marginTop: ".5em",
                background: "#FFD814",
                color: "black",
                padding: ".3em",
                borderRadius: "1em",
                fontSize: "16px",
              }}
            >
              Verify mobile number
            </div>
          </Link>

          <div style={{ marginTop: "1em" }} className="line"></div>
          <span style={{ marginTop: ".5em" }}>Buying for work?</span>
          <span style={{ color: "#007185" }}>
            Create a free business account
          </span>
          <span className="line-cnt">
            <div className="line"></div>
          </span>
          <Link to="/signin">
            <div style={{ textAlign: "left", marginTop: ".5em" }}>
              <span style={{ color: "black" }}>Already have an account? </span>
              <span style={{ color: "#007185", textDecoration: "underline" }}>
                Signin
              </span>
            </div>
          </Link>
          <span style={{ fontSize: "14px", marginTop: "1em" }}>
            By creating an account or logging in, you agree to AtoZ's
            <Link
              to="/signin"
              style={{ color: "#007185", textDecoration: "underline" }}
            >
              {" "}
              Conditions of Use{" "}
            </Link>
            and
            <Link
              to="/signin"
              style={{ color: "#007185", textDecoration: "underline" }}
            >
              {" "}
              Privacy Policy.
            </Link>
          </span>
        </span>
        <div className="line" style={{ marginTop: "3em" }}></div>
        <div className="Signin-CR">
          <div className="Signin-CR-cnt">
            <Link to="/signin" style={{ color: "#007185", fontSize: "13px" }}>
              Conditions of Use
            </Link>
            <Link to="/signin" style={{ color: "#007185", fontSize: "13px" }}>
              Privacy Notice
            </Link>
            <Link to="/signin" style={{ color: "#007185", fontSize: "13px" }}>
              Help
            </Link>
          </div>
          <span
            style={{
              fontSize: "13px",
              width: "100%",
              alignSelf: "center",
              marginBottom: "1em",
            }}
          >
            © 1996-2025, AtoZ.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
