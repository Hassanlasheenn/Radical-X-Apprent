import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../styles/TeamRoles.css";
import {
  ApprenIcon,
  ClockIcon,
  DropDownArrow,
  DropUpArrow,
  LocationIcon,
  ProfileIcon,
  StarIcon,
} from "./IconSvg";

const TeamRoles = () => {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(["Select Roles"]);
  const [selectedSkill, setSelectedSkill] = useState(["Select Skills"]);
  const [selectedComp, setSelectedComp] = useState(["Select Skills"]);

  const roles = [
    "iOS Developer",
    "Android Developer",
    "Full Stack Developer",
    "Back-end Developer",
    "Front-end Developer",
  ];
  const skills = ["Swift", "iOS", "Objective-C", "ARM"];

  // to open different dropdowns using one function through id
  const handleClick = (id) => {
    setOpen(open === id ? false : id);
  };

  return (
    <div className="modalRoles">
      <Dropdown
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        className={"dropdown"}
      >
        <div onClick={() => handleClick(1)} className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <ProfileIcon id={"profile"} />
            </span>
            <div className="dropdown-btn">{selectedRole}</div>
          </div>
          <DropDownArrow id={"dropdownArr"} />
        </div>
        {open === 1 && (
          <div className="dropdown-content">
            {roles.map((role) => (
              <div
                onClick={() => {
                  setSelectedRole(role);
                  setOpen(false);
                }}
                className="dropdown-item"
              >
                {role}
              </div>
            ))}
          </div>
        )}
      </Dropdown>

      <div className="role__desc">
        <p className="role__desc-title">Role Description</p>
        <textarea id="descriptionModal" type="text" placeholder="Description" />
      </div>

      <Dropdown
        selectedSkill={selectedSkill}
        setSelectedSkill={setSelectedSkill}
        className={"dropdown"}
      >
        <p className="role__desc-title">Required Skills (Select any 3)</p>
        <div onClick={() => handleClick(2)} className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <ApprenIcon id={"Appren"} />
            </span>
            <div className="dropdown-btn">{selectedSkill}</div>
          </div>
          <DropDownArrow id={"dropdownArr"} />
        </div>
        {open === 2 && (
          <div className="dropdown-content">
            {skills.map((skill) => (
              <div
                onClick={() => {
                  setSelectedSkill(skill);
                  setOpen(false);
                }}
                className="dropdown-item"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </Dropdown>

      <Dropdown
        selectedSkill={selectedComp}
        setSelectedSkill={setSelectedComp}
        className={"dropdown"}
      >
        <p className="role__desc-title">Complimentary Skills (Select any 3)</p>
        <div onClick={() => handleClick(3)} className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <StarIcon id={"Appren"} />
            </span>
            <div className="dropdown-btn">{selectedComp}</div>
          </div>
          <DropDownArrow id={"dropdownArr"} />
        </div>
        {open === 3 && (
          <div className="dropdown-content">
            {skills.map((skill) => (
              <>
                <div
                  onClick={() => {
                    setSelectedComp(skill);
                    setOpen(false);
                  }}
                  className="dropdown-item"
                >
                  {skill}
                </div>
              </>
            ))}
          </div>
        )}
      </Dropdown>

      <div className="hours">
        <p className="role__desc-title">Minimum Hours Per Week</p>
        <div className="hours__input">
          <span>
            <ClockIcon id={"clock"} />
          </span>
          <input id="hoursInput" type="text" placeholder="No. of hours" />
        </div>
      </div>

      <div className="hours">
        <p className="role__desc-title">Location Preferences</p>
        <div className="hours__input">
          <span>
            <LocationIcon id={"location"} />
          </span>
          <div className="dropdown__location-btn">
            <input id="hoursInput" type="text" placeholder="Select location" />
            <DropDownArrow id={"locationDropdown"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRoles;
