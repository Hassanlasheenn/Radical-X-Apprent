import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import "../styles/TeamRoles.css";
import {
  ApprenIcon,
  ClockIcon,
  DropDownArrow,
  LocationIcon,
  ProfileIcon,
  StarIcon,
} from "./IconSvg";
import { useDispatch, useSelector } from "react-redux";
import {
  setComplimentarySkill,
  setDescription,
  setRequiredSkill,
  setRole,
} from "../features/RolesSlice";

const TeamRoles = ({ title }) => {
  const roleName = useSelector((state) => state.role.role);
  const roleDescription = useSelector((state) => state.role.description);
  const roleRequiredSkills = useSelector((state) => state.role.requiredSkills);
  const roleComplimentarySkills = useSelector(
    (state) => state.role.complimentarySkills
  );

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = title;
  }, [title]);

  const roles = [
    "iOS Developer",
    "Android Developer",
    "Full Stack Developer",
    "Back-end Developer",
    "Front-end Developer",
  ];

  const skills = ["Swift", "iOS", "Objective-C", "ARM"];

  return (
    <div className="modalRoles">
      <Dropdown className={"dropdown"}>
        <div className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <ProfileIcon id={"profile"} />
            </span>

            <div className="dropdown__custom-select">
              <select
                onChange={(e) => dispatch(setRole(e.target.value))}
                className="dropdown-btn"
                value={roleName}
                required
                placeholder="Select Roles"
              >
                <option disabled value="">
                  Select Roles
                </option>
                {roles.map((role) => (
                  <>
                    <option key={role} value={role} className="dropdown-item">
                      {role}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Dropdown>

      <div className="role__desc">
        <p className="role__desc-title">Role Description</p>
        <textarea
          value={roleDescription}
          id="descriptionModal"
          type="text"
          placeholder="Description"
          onChange={(e) => dispatch(setDescription(e.target.value))}
          required
        />
      </div>

      <Dropdown className={"dropdown"}>
        <p className="role__desc-title">Required Skills (Select any 3)</p>
        <div className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <ApprenIcon id={"Appren"} />
            </span>
            <div className="dropdown__custom-select">
              <select
                onChange={(e) => dispatch(setRequiredSkill(e.target.value))}
                className="dropdown-btn"
                value={roleRequiredSkills}
                required
              >
                <option disabled value="">
                  Select Skills
                </option>
                {skills.map((skill) => (
                  <>
                    <option key={skill} value={skill} className="dropdown-item">
                      {skill}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Dropdown>

      <Dropdown className={"dropdown"}>
        <p className="role__desc-title">Complimentary Skills (Select any 3)</p>
        <div className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <StarIcon id={"Appren"} />
            </span>
            <div className="dropdown__custom-select">
              <select
                onChange={(e) =>
                  dispatch(setComplimentarySkill(e.target.value))
                }
                className="dropdown-btn"
                value={roleComplimentarySkills}
                required
              >
                <option disabled value="">
                  Select Skills
                </option>
                {skills.map((skillComp) => (
                  <>
                    <option
                      key={skillComp}
                      value={skillComp}
                      className="dropdown-item"
                    >
                      {skillComp}
                    </option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </div>
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
