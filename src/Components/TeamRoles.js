import React, { useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/TeamRoles.css';
import { DropDownArrow, ProfileIcon } from './IconSvg';

const TeamRoles = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='modalRoles'>
        <Dropdown className={"dropdown"}>
            <div 
                onClick={() => setOpen(!open)}
                className='dropdown__role-btn'
            >
                <div className="dropdown__profile-cont">
                    <span><ProfileIcon id={"profile"} /></span>
                    <div className="dropdown-btn">Choose One</div>
                </div>
                <span><DropDownArrow id={"dropdownArr"} /></span>
            </div>
            {
            open &&
                <div className="dropdown-content">
                    <input 
                        type="search"  
                        className='dropdown-content--search'
                        placeholder='Search'
                    />
                    <div className="dropdown-item">
                       Full-stack Developer 
                    </div>
                    <div className="dropdown-item">
                       Front-end Developer 
                    </div>
                    <div className="dropdown-item">
                       IOS Developer 
                    </div>
                    <div className="dropdown-item">
                       Back-end Developer 
                    </div>
                    <div className="dropdown-item">
                       Android Developer 
                    </div>
                </div>
            }
        </Dropdown>
    </div>
  )
}

export default TeamRoles;
