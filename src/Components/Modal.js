import React from 'react';
import '../styles/Modal.css';

const Modal = ({ show, onClose, title, children }) => {
  return (
    <div className={`modal ${show ? 'show' : ''} `} onClick={onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h4 className="modal-title">{title}</h4>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Close</button>
                </div>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
