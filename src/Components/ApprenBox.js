import React from 'react';
import '../styles/ApprenBox.css';
// icons svg
import { BoxIcon1, BoxIcon2, BoxIcon3 } from './IconSvg';

const ApprenBox = ({ boxTitle }) => {
  return (
    <div className='box-container'>
        <div className='box'>
            <div className='box__title-bar'>
                <p className='box__title'>{boxTitle}</p>
                <div className='box__icons'>
                    <BoxIcon1 id={"write"} />
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
    </div>
  )
}

export default ApprenBox;
