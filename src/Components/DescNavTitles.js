import React from 'react';

const DescNavTitles = ({ title, icon }) => {
  return (
    <div className='navTitle'>
        <svg>{icon}</svg>
        <p className='navTitle__name'>{title}</p>
    </div>
  )
}

export default DescNavTitles;
