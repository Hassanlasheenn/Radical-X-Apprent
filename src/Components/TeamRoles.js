import React, { useState } from 'react';
import Dropdown from './Dropdown';
import '../styles/TeamRoles.css';
import { DropDownArrow, DropUpArrow, ProfileIcon } from './IconSvg';


const roles = [
    {
        id: 1,
        role: "iOS Developer"
    },
    {
        id: 2,
        role: "Andriod Developer"
    },
    {
        id: 3,
        role: "Full Stack Developer"
    },
    {
        id: 4,
        role: "Back-end Developer"
    },
    {
        id: 5,
        role: "Front-end Developer"
    }
]

const TeamRoles = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const roles = ['iOS Developer', 'Android Developer', 'Full Stack Developer', 'Back-end Developer', 'Front-end Developer']

    const handleClick = () => {
        setOpen(!open);
    }

  return (
    <div className='modalRoles'>
        <Dropdown 
            selected={selected}
            setSelected={setSelected}
            className={"dropdown"}
        >
            <div 
                onClick={handleClick}
                className='dropdown__role-btn'
            >
                <div className="dropdown__profile-cont">
                    <span><ProfileIcon id={"profile"} /></span>
                    <div className="dropdown-btn">{selected ? selected : "Select Role"}</div>
                </div>
                { !open ?
                    <DropDownArrow id={"dropdownArr"}/>
                    :
                    <DropUpArrow id={"dropupArr"}/>
                }
            </div>
            {
            open &&
                <div className="dropdown-content">
                    {roles.map((role) => (
                        <div onClick={e => {
                            setSelected(role)
                            setOpen(false)
                        }} 
                        className="dropdown-item">
                        {role}
                        </div>

                    ))}
                </div>
            }
        </Dropdown>

        <div className="role__desc">
            <p className="role__desc-title">Role Description</p>
            <input
                id='boxInput'
                type="text" 
                placeholder='Description' 
            />
        </div>
    </div>
  )
}

export default TeamRoles;
