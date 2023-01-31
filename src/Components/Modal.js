import React from "react";
import "../styles/Modal.css";
import { CloseIcon } from "./IconSvg";

const Modal = ({ show, onSave, onCloseModal, title, children, btnName }) => {
  return (
    <div className={`modal ${show ? "show" : ""} `} onClick={onCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <div className="modal-footer">
            <button type="submit" onClick={onSave} className="button">
              {btnName}
            </button>
            <button onClick={onCloseModal} className="modal-closeBtn">
              <CloseIcon id={"closeX"} />
            </button>
          </div>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
