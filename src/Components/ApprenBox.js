import React, { useEffect, useState } from 'react';
import '../styles/ApprenBox.css';
// icons svg
import { BoxIcon1, BoxIcon2, BoxIcon3 } from './IconSvg';
import Modal from './Modal';
import { erase } from '../features/ApprenBoxSlice';
import { useDispatch } from 'react-redux';

const savedTitles = localStorage.getItem('Title Name') ? JSON.parse(localStorage.getItem('Title Name')) : [];
const savedPositions = localStorage.getItem('Position Name') ? JSON.parse(localStorage.getItem('Position Name')) : [];

const ApprenBox = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(savedTitles);
  const [position, setPosition] = useState(savedPositions);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  }
  

useEffect(() => {
    if(!!title) {        
        localStorage.setItem(
            'Title Name',
            JSON.stringify(title)
        );
    }

}, [title]);

useEffect(() => {
    if(!!position) {
        localStorage.setItem(
            'Position Name',
            JSON.stringify(position)
        );
    }
}, [position])

  return (
    <div className='box-container'>
        <div className='box'>
            <div className='box__title-bar'>
                <p className='box__title'>{title}</p>
                <div className='box__icons'>
                    <BoxIcon1 id={"write"} onClick={() => setShow(true)} />
                    <BoxIcon2 id={"duplicate"} onClick={() => {}} />
                    <BoxIcon3 id={"delete"} onClick={() => {dispatch(erase())}} />
                </div>
            </div>

            <p className='box__para'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut 
                labore et dolore magaliqua.
            </p>

            <div className='box__text-cont'>
                <p className='box__text'>
                    {position}
                </p>
            </div>
        </div>
        <Modal title={"Edit Card"} btnName={"Save"} onClose={() => setShow(false)} show={show}>
            <form 
                onSubmit={handleSubmit}
                className="modal-body__container">
                <p className='modal-body__title'>Enter Box Title</p>
                <input 
                    className='modal-body__input' 
                    type="text" 
                    placeholder='Type here'
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <p className='modal-body__title'>Enter Position Title</p>
                <input 
                    className='modal-body__input' 
                    type="text" 
                    placeholder='Type here' 
                    onChange={e => setPosition(e.target.value)}
                    required
                />
            </form>
        </Modal>
    </div>
  )
}

export default ApprenBox;
