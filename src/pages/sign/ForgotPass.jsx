import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../Context/Auth";
import RadicalX from "../../imgs/RadicallX-Black-Logo 1.svg";

const ForgotPass = ({ title }) => {
  const emailRef = useRef(null);
  const { resetPass } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPass(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <img className="right__image" src={RadicalX} alt="" />

        {error && <h3 id="error">{error}</h3>}
        {message && <h3 id="success">{message}</h3>}
        <form onSubmit={handleSubmit} className="right__form">
          <p className="right__header">Reset Password</p>
          <input
            className="right__input"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <button disabled={loading} className="right__button">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
