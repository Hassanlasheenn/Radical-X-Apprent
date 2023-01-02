import React from 'react';
import { UnTickCircle } from './IconSvg';

const DescNavTitles = ({ title }) => {
  return (
    <div className='navTitle'>
        <UnTickCircle />
        <p className='navTitle__name'>{title}</p>
    </div>
  )
}

export default DescNavTitles;
