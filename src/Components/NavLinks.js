import React from 'react';
import '../styles/NavLinks.css';

const NavLinks = ({ title, image }) => {


  return (
      <button className='navLinks'>
        <svg>{image}</svg>
        <p className='navLinks__title'>{title}</p>
      </button>
  )
}

export default NavLinks;
