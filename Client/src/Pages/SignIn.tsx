import { Link } from "react-router";
import "../Styles/SignIn.css";
import Dropdown from "../Components/DropDown";
import { SignInMenuItems } from "../Pages/Menus/signinMenu";
import { useState } from "react";
import validator from "validator";

function SignIn() {
  const [invalidemail, setinvalidemail] = useState(false);
  const setemail = (e: string) => {
    console.log(e);
    setinvalidemail(!validator.isEmail(e));
    console.log(invalidemail);
  };

  return (
    <>
      <div className="mainSignIn">
        <Link to="/" className="logo"></Link>
        <span className="signin-cnt">
          <p style={{ fontSize: "32px" }}>SignIn</p>
          <p style={{ fontSize: "16px", marginTop: ".5em" }}>
            Email or mobile phone number
          </p>
          <input
            onChange={(e) => setemail(e.target.value)}
            className={
              invalidemail
                ? "sign-in-input input-email-invalid"
                : "sign-in-input input-email-valid"
            }
            style={{
              height: "2.5em",
              borderRadius: "4px",
              padding: "3px 7px",
              marginTop: "2px",
            }}
            type="email"
          ></input>
          {invalidemail ? (
            <div id="signin-auth-email">
              <span className="signin-invalid-email-icon"></span>
              <div>
                Wrong or Invalid email address or mobile phone number. Please
                correct and try again.
              </div>
            </div>
          ) : null}
          <Link to="/signin">
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
              Continue
            </div>
          </Link>
          <span style={{ fontSize: "16px", marginTop: "1em" }}>
            By continuing, you agree to AtoZ's
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
              Privacy Notice.
            </Link>
          </span>
          <div
            style={{
              marginTop: "1.5em",
              color: "#007185",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "fit-content",
              maxHeight: "1em",
            }}
          >
            <Dropdown
              dropdownbuttonbg="transparent"
              heading="v"
              items={SignInMenuItems}
              width="fit-content"
              height="fit-content"
            ></Dropdown>
            <span>Need Help?</span>
          </div>
          <div style={{ marginTop: "1em" }} className="line"></div>
          <span style={{ marginTop: "1em" }}>Buying for work?</span>
          <span style={{ marginTop: "1em", color: "#007185" }}>
            Shop on AtoZ Business
          </span>
        </span>
        <span className="line-cnt">
          <div className="line"></div>
          <div className="line-text">New to AtoZ?</div>
          <div className="line"></div>
        </span>
        <Link to="/createaccount">
          <button
            className="create-account-button"
            style={{ textAlign: "center" }}
          >
            Create your AtoZ account
          </button>
        </Link>
        <div className="line" style={{ marginTop: "3em" }}></div>
        <div className="Signin-CR">
          <div className="Signin-CR-cnt">
            <Link to="/signin" style={{ color: "#007185", fontSize: "15px" }}>
              Conditions of Use
            </Link>
            <Link to="/signin" style={{ color: "#007185", fontSize: "15px" }}>
              Privacy Notice
            </Link>
            <Link to="/signin" style={{ color: "#007185", fontSize: "15px" }}>
              Help
            </Link>
          </div>
          <span
            style={{ fontSize: "15px", width: "100%", alignSelf: "center" }}
          >
            © 1996-2025, AtoZ.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </>
  );
}

export default SignIn;
