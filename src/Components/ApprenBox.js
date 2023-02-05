import React, { useState } from "react";
import "../styles/ApprenBox.css";
// icons svg
import { BoxIcon1, BoxIcon2, BoxIcon3 } from "./IconSvg";
import Modal from "./Modal";
import {
  duplicate,
  erase,
  selectApprenDesc,
  selectPositions,
  selectTitle,
  setTitle,
} from "../features/ApprenBoxSlice";
import { useDispatch, useSelector } from "react-redux";

// const savedTitles = localStorage.getItem("Title Name")
//   ? JSON.parse(localStorage.getItem("Title Name"))
//   : [];
// const savedPositions = localStorage.getItem("Position Name")
//   ? JSON.parse(localStorage.getItem("Position Name"))
//   : [];

const ApprenBox = ({ id }) => {
  const [show, setShow] = useState(false);
  // const [title, setTitle] = useState(savedTitles);
  // const [position, setPosition] = useState(savedPositions);

  const apprenTitle = useSelector(selectTitle);
  const apprenDesc = useSelector(selectApprenDesc);
  const apprenPosition = useSelector(selectPositions);

  const userPosition = useSelector((state) => state.appren.position);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   if (!!title) {
  //     localStorage.setItem("Title Name", JSON.stringify(title));
  //   }
  // }, [title]);

  // useEffect(() => {
  //   if (!!position) {
  //     localStorage.setItem("Position Name", JSON.stringify(position));
  //   }
  // }, [position]);

  return (
    <div className="box-container">
      <div className="box">
        <div className="box__title-bar">
          <p className="box__title">{apprenTitle}</p>
          <div className="box__icons">
            <BoxIcon1 id={"write"} onClick={() => setShow(true)} />
            <BoxIcon2
              id={"duplicate"}
              onClick={() => {
                dispatch(duplicate({ id }));
              }}
            />
            <BoxIcon3
              id={"delete"}
              onClick={() => {
                dispatch(erase(id));
              }}
            />
          </div>
        </div>
        <p className="box__para"> {apprenDesc}</p>
        {apprenPosition.length > 0 &&
          apprenPosition.map((position) => {
            <div className="box__text-cont">
              <p key={position.userPosition} className="box__text">
                {position}
              </p>
            </div>;
          })}
      </div>
      <Modal
        title={"Edit Card"}
        btnName={"Save"}
        onCloseModal={() => setShow(false)}
        onSave={() => setShow(false)}
        show={show}
      >
        <form onSubmit={handleSubmit} className="modal-body__container">
          <p className="modal-body__title">Enter Box Title</p>
          <input
            className="modal-body__input"
            type="text"
            placeholder="Type here"
            onChange={(e) => dispatch(setTitle(e.target.value))}
            required
          />
          <p className="modal-body__title">Enter Position Title</p>
          <input
            className="modal-body__input"
            type="text"
            placeholder="Type here"
            // onChange={(e) => dispatch(setPosition(e.target.value))}
            required
          />
        </form>
      </Modal>
    </div>
  );
};

export default ApprenBox;
