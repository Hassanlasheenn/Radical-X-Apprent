import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addAppren,
  addPositions,
  selectApprenDesc,
  selectPosition,
  selectPositions,
  selectTitle,
} from "../features/ApprenBoxSlice";
import "../styles/Navbar.css";
import BackBtn from "./BackBtn";
import Button from "./Button";
import { AddSquare } from "./IconSvg";
import Modal from "./Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const [publish, setPublish] = useState(false);
  const apprenTitle = useSelector(selectTitle);
  const apprenDesc = useSelector(selectApprenDesc);
  const userPosition = useSelector((state) => state.appren.position);

  const dispatch = useDispatch();

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
          setPublish(true);
          dispatch(addAppren({ apprenTitle, apprenDesc, userPosition }));
        }}
      >
        Publish Apprenticeship
      </Button>

      <Modal
        btnName={"Close"}
        onCloseModal={() => setPublish(false)}
        onSave={() => setPublish(false)}
        show={publish}
      >
        <div className="publish">
          <p className="publish__icon">🎉</p>
          <h2 className="publish__text">
            ApprenticeShip is published successfully
          </h2>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
