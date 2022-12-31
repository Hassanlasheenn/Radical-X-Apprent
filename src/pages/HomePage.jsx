import React from 'react';
import '../styles/HomePage.css';
import RadicalX from '../imgs/RadicallX-Black-Logo 1.svg'
import NavLinks from '../Components/NavLinks';
import ApprenBox from '../Components/ApprenBox';

const HomePage = ({ boxTitle }) => {
  return (
    <div className='home'>
     <div className='home__left'>
        <img className='home__left-logo' src={RadicalX} alt='RadicalX' />
        <div className='home__navLinks'>
          <NavLinks title={"Dashboard"} />
          <NavLinks title={"Apprenticeships"} />
          <NavLinks title={"Internships"} />
          <NavLinks title={"Jobs"} />
          <NavLinks title={"Settings"} />
        </div>
        <div className='home__user'>
          <div className='home__user-rectangle' />
          <p className='home__user-name'>Hassan lasheen</p>
        </div>
     </div>
     <div className='home__right'>
      <div className='home__right-title-bar'>
          <p className='home__right-title'>apprenticeship</p>
          <button className='home__right-button'>create new apprenticeship</button>
      </div>
      <div className='home__boxes'>
        <ApprenBox boxTitle={"Mobile App Design"} />
        <ApprenBox boxTitle={"Web App Development"} />
      </div>
     </div>
    </div>
  )
}

export default HomePage;
