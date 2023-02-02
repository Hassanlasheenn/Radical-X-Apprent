import React, { useEffect, useRef, useState } from "react";
import "../SignUp/Signup";
import RadicalX from "../../../imgs/RadicallX-Black-Logo 1.svg";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { lock } from "react-icons-kit/feather/lock";
import { mail } from "react-icons-kit/feather/mail";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/Auth";

const Signup = ({ title }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setMessage("Created account successfully");
    } catch {
      setError("Failed to create account");
      setMessage("");
    }

    setLoading(false);
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const togglePassword = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <img className="right__image" src={RadicalX} alt="" />
        {error && <h3 id="error">{error}</h3>}
        {message && <h3 id="success">{message}</h3>}
        <form onSubmit={handleSubmit} className="right__form">
          <p className="right__header">Create an Account</p>
          <div className="right__email-container">
            <span id="sms">
              <Icon icon={mail} size={20}></Icon>
            </span>
            <input
              className="right__input"
              type="email"
              placeholder="Email"
              ref={emailRef}
            />
          </div>
          <div className="right__pass-container">
            <span id="lock">
              <Icon icon={lock} size={20}></Icon>
            </span>
            <input
              className="right__input"
              type={type}
              placeholder="Password"
              ref={passwordRef}
            />
            <span id="eye" onClick={togglePassword}>
              <Icon icon={icon} size={20} />
            </span>
            <span id="lock2">
              <Icon icon={lock} size={20}></Icon>
            </span>
            <input
              className="right__input-confirm"
              type={"password"}
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
            />
          </div>
          <div className="right__remember-container">
            <p>
              Already a user?
              <Link to={"/login"} id="signin">
                Sign in
              </Link>
            </p>
          </div>
          <button disabled={loading} className="right__button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
