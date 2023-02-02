import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import BackBtn from "./BackBtn";
import Button from "./Button";
import { AddSquare } from "./IconSvg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <BackBtn
        onClick={() => {
          navigate("/");
        }}
      />
      <p className="navbar__name">Creating Apprenticeship</p>
      <AddSquare id={"publish"} />
      <Button>Publish Apprenticeship</Button>
    </div>
  );
};

export default Navbar;
