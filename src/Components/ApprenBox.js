import React, { useState } from 'react';
import '../styles/ApprenBox.css';
// icons svg
import { BoxIcon1, BoxIcon2, BoxIcon3 } from './IconSvg';
import Modal from './Modal';

const ApprenBox = ({ boxTitle }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='box-container'>
        <div className='box'>
            <div className='box__title-bar'>
                <p className='box__title'>{boxTitle}</p>
                <div className='box__icons'>
                    <BoxIcon1 id={"write"} onClick={() => setShow(true)} />
                    <BoxIcon2 id={"duplicate"} />
                    <BoxIcon3 id={"delete"} />
                </div>
            </div>

            <p className='box__para'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magaliqua.
            </p>

            <div className='box__text-cont'>
                <p className='box__text'>
                    Product Manager
                </p>
            </div>
        </div>
        <Modal title={"Add Position"} btnName={"Close"} onClose={() => setShow(false)} show={show}>
            <p className='modal-body__title'>Enter your position</p>
            <input className='modal-body__input' type="text" placeholder='Type here' />
        </Modal>
    </div>
  )
}

export default ApprenBox;
