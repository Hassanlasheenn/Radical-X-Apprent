import React from 'react';
import '../styles/HomePage.css';
import RadicalX from '../imgs/RadicallX-Black-Logo 1.svg'
import NavLinks from '../Components/NavLinks';
import ApprenBox from '../Components/ApprenBox';
import { useAuth } from '../Context/Auth';
import { ApprenIcon, DashboardIcon, InternshipIcon, JobsIcon, SettingsIcon } from '../Components/IconSvg';
import Button from '../Components/Button';

const HomePage = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className='home'>
     <div className='home__left'>
        <img className='home__left-logo' src={RadicalX} alt='RadicalX' />
        <div className='home__navLinks'>
          <NavLinks title={"Dashboard"} image={<DashboardIcon />} />
          <NavLinks title={"Apprenticeships"} image={<ApprenIcon />} />
          <NavLinks title={"Internships"} image={<InternshipIcon />} />
          <NavLinks title={"Jobs"} image={<JobsIcon />} />
          <NavLinks title={"Settings"} image={<SettingsIcon />} />
        </div>
        <div className="home__user-container">
            <div className='home__user-rectangle' />
            <p className='home__user-name'>{currentUser.email}</p>
          <button onClick={logout} className='home__user-logout'>Logout</button>
        </div>
     </div>
     <div className='home__right'>
      <div className='home__right-title-bar'>
          <p className='home__right-title'>apprenticeship</p>
          <Button btnName={"create new apprenticeship "} />
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
