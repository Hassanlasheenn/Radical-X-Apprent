import React from 'react';
import '../styles/DescNavbar.css';
import DescNavTitles from './DescNavTitles';

const DescNavbar = () => {
  return (
    <div className='desc'>
        <DescNavTitles title={"Company Title & Desc."} />
        <DescNavTitles title={"Team Type"} />
        <DescNavTitles title={"Team Role"} />
        <DescNavTitles title={"Team Admin"} />
        <DescNavTitles title={"Timeline"} />
    </div>
  )
}

export default DescNavbar;
