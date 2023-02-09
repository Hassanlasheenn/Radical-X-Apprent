import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addAppren,
  selectApprenDesc,
  selectNotification,
  selectTitle,
  setNotification,
} from "../features/ApprenBoxSlice";
import "../styles/Navbar.css";
import BackBtn from "./BackBtn";
import Button from "./Button";
import { AddSquare } from "./IconSvg";
import Notification from "./Notification";

const Navbar = () => {
  const navigate = useNavigate();
  const [publish, setPublish] = useState(false);
  const apprenTitle = useSelector(selectTitle);
  const apprenDesc = useSelector(selectApprenDesc);
  const userPosition = useSelector((state) => state.appren.position);

  const dispatch = useDispatch();

  // const handleNotification = () => {
  //   dispatch(setNotification(true));
  //   setTimeout(() => {
  //     dispatch(setNotification(false));
  //   }, 3000);
  // };

  return (
    <div className="navbar">
      <BackBtn
        onClick={() => {
          navigate("/");
        }}
      />
      <p className="navbar__name">Creating Apprenticeship</p>
      <AddSquare id={"publish"} />
      <Button
        onClick={() => {
          navigate("/");
          setPublish(true);
          dispatch(addAppren({ apprenTitle, apprenDesc, userPosition }));
        }}
      >
        Publish Apprenticeship
      </Button>
    </div>
  );
};

export default Navbar;
