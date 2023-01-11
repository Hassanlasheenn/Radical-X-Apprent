import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/DescNavbar.css';
import DescNavTitles from './DescNavTitles';
import { TickCircle, UnTickCircle } from './IconSvg';

const DescNavbar = () => {
  const icon = useSelector(store => store.icon)
  
  return (
    <div className='desc'>
        <DescNavTitles title={"Company Title & Desc."} icon={<UnTickCircle />} />
        <DescNavTitles title={"Team Type"} icon={<UnTickCircle />}  />
        <DescNavTitles title={"Team Role"} icon={<UnTickCircle />}  />
        <DescNavTitles title={"Team Admin"} icon={<UnTickCircle />}  />
        <DescNavTitles title={"Timeline"} icon={<UnTickCircle />}  />
    </div>
  )
}

export default DescNavbar;
