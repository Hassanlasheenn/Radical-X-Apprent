import React, { useState } from 'react';
import '../styles/Dropdown.css';


const Dropdown = ({ children, className }) => {
    return (
    <div className={className}>
        {children}
    </div>
  )
}

export default Dropdown
