import { useState } from "react";
import "./PageOne.css";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function PageOne() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [dataFilled, setDataFilled] = useState(false);

  // const history = useHistory();
  const navigate = useNavigate();

  const handleClick = () => {
    if (dataFilled) {
      navigate("/PageTwo");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (name.length <= 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (userName.length <= 0) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
    }

    if (email.length <= 0) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (mobile.length < 10) {
      setMobileError(true);
    } else {
      setMobileError(false);
    }

    if (!submit) {
      if (
        !nameError &&
        !usernameError &&
        !emailError &&
        !mobileError &&
        isChecked
      ) {
        localStorage.setItem("S_name", name);
        localStorage.setItem("S_username", userName);
        localStorage.setItem("S_email", email);
        localStorage.setItem("S_phn", mobile);

        navigate("/PageTwo");

        setDataFilled(true);
      }
    }
  };
  return (
    <div className="P1_outerBox">
      <div className="P1_leftBox">
        <div className="P1_text">
          Discover new things on <br></br>Superapp
        </div>
      </div>

      <div className="P1_rightBox">
        <div className="P1_rightSideBox">
          <div className="P1_apptitle">
            <p className="P1_heading">Super app</p>
            <p className="P1_subHead">Create your new account</p>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={`P1_name P1_ip   ${nameError ? "P1_ipE" : ""}`}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br></br>
              <label className={`P1_req ${nameError ? "" : "P1_reqN"}`}>
                Field is required
              </label>
              <br></br>
              <input
                type="text"
                className={`P1_userName P1_ip   ${
                  usernameError ? "P1_ipE" : ""
                }`}
                placeholder="UserName"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <br></br>
              <label className={`P1_req ${usernameError ? "" : "P1_reqN"}`}>
                Field is required
              </label>
              <br></br>
              <input
                type="email"
                className={`P1_email P1_ip   ${emailError ? "P1_ipE" : ""}`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br></br>
              <label className={`P1_req ${emailError ? "" : "P1_reqN"}`}>
                Field is required
              </label>
              <br></br>
              <input
                type="number"
                className={`P1_mobile P1_ip   ${mobileError ? "P1_ipE" : ""}`}
                placeholder="Mobile"
                onChange={(e) => setMobile(e.target.value)}
              ></input>
              <br></br>
              <label className={`P1_req ${mobileError ? "" : "P1_reqN"}`}>
                Field is required enter 10 digits mobile Number
              </label>
              <br></br>
              <div className="P1_checkBox">
                {/* <input type="checkbox" className="check" /> */}
                <input
                  type="checkbox"
                  className="P1_check"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                ></input>
                <p style={{ marginLeft: "5px" }}>
                  Share my registration data with Super app
                </p>{" "}
              </div>
              <label
                className={`P1_req ${isChecked ? "P1_reqN" : ""} ${
                  submit ? "" : "P1_reqN"
                }`}
              >
                Check this box if you want to proceed
              </label>
              <br></br>

              <button type="submit" onClick={handleClick}>
                SIGN UP
              </button>
            </form>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span style={{ color: "#72DB73" }}>
                {" "}
                Terms and Conditions of Use{" "}
              </span>
            </p>
            <p className="privacyPolicy">
              To learn more about how Superapp collects,uses,shares and protects
              your personal data please head Superapp{" "}
              <span style={{ color: "#72DB73" }}>Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageOne;
