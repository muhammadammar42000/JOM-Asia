import { useState } from "react";
import JOMinstance from "../../../api";
import instance from "../../api";
import Cross from "../../assets/images/cross.png";

import showPassIcon from "../../assets/images/eye1.png";
import hidePassIcon from "../../assets/images/hidden.png";

const Login = ({ setStep, step }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    localStorage.setItem("isLogged", "admin");
    window.location.reload();

    // try {
    //   JOMinstance.post("admin/login", {
    //     email: email,
    //     password: pass,
    //   });
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <div className={step === 1 ? "login login_active" : "login"}>
      <div className="login_inner">
        <p className="login_title">Login</p>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {err === "email" && <p className="signup_err">Email is not valid</p>}
        <label>Password</label>
        <input
          type={showPass ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
        />
        {err === "pass" && (
          <p className="signup_err">Password must be atleast 6 characters</p>
        )}
        {err === "invalid" && (
          <p className="signup_err">Invalid Username or Password</p>
        )}
        {err === "not approved" && (
          <p className="signup_err">Your request is pending from admin</p>
        )}

        <div className="showPass">
          <img
            onClick={() => setShowPass(!showPass)}
            src={showPass ? hidePassIcon : showPassIcon}
          />
        </div>

        <a className="login_submit login_btn" href="#" onClick={handleSubmit}>
          Login
        </a>
        <img
          src={Cross}
          alt=""
          className="login_close"
          onClick={() => setStep(0)}
        />
      </div>
    </div>
  );
};

export default Login;
