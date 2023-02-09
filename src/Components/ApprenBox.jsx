/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import '../styles/ApprenBox.css';
// icons svg
import { useDispatch, useSelector } from 'react-redux';
import { BoxIcon1, BoxIcon2, BoxIcon3 } from './IconSvg';
import Modal from './Modal';
import {
  duplicate,
  erase,
  selectApprenDesc,
  selectPositions,
  selectTitle,
  setPosition,
  setTitle,
} from '../features/ApprenBoxSlice';

const ApprenBox = ({ id }) => {
  const [show, setShow] = useState(false);

  const apprenTitle = useSelector(selectTitle);
  const apprenDesc = useSelector(selectApprenDesc);
  const apprenPosition = useSelector(selectPositions);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="box-container">
      <div className="box">
        <div className="box__title-bar">
          <p className="box__title">{apprenTitle}</p>
          <div className="box__icons">
            <BoxIcon1 id="write" onClick={() => setShow(true)} />
            <BoxIcon2
              id="duplicate"
              onClick={() => {
                dispatch(duplicate({ id }));
              }}
            />
            <BoxIcon3
              id="delete"
              onClick={() => {
                dispatch(erase({ id }));
              }}
            />
          </div>
        </div>
        <p className="box__para"> {apprenDesc}</p>
        {apprenPosition.length > 0 &&
          apprenPosition.map((rolePosition) => (
            <div className="box__text--position-cont">
              <div className="box__text-cont">
                <p className="box__text">{rolePosition.userPosition}</p>
              </div>
            </div>
          ))}
      </div>
      <Modal
        title="Edit Card"
        btnName="Save"
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
            onChange={(e) => dispatch(setPosition(e.target.value))}
            required
          />
        </form>
      </Modal>
    </div>
  );
};

export default ApprenBox;
