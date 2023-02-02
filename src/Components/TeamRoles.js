import React, { useEffect, useState } from "react";
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
import countriesList from "../data/countries";
import { useDispatch, useSelector } from "react-redux";
import {
  setComplimentarySkill,
  setDescription,
  setRequiredSkill,
  setRole,
} from "../features/RolesSlice";

const TeamRoles = ({ title }) => {
  const [selectedComp, setSelectedComp] = useState(["Select Skills"]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const roleName = useSelector((state) => state.role.role);
  const roleDescription = useSelector((state) => state.role.description);
  const roleRequiredSkills = useSelector((state) => state.role.requiredSkills);

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

  // const handleInputChange = (e) => {
  //   const searchTerm = e.target.value;
  //   setSearch(searchTerm);

  //   const newSuggestions = countriesList.filter((country) =>
  //     country.toLowerCase().startsWith(search.toLowerCase())
  //   );
  //   setSuggestions(newSuggestions);
  // };

  const handleSelect = (suggestion) => {
    console.log(suggestion);
  };

  return (
    <div className="modalRoles">
      <Dropdown className={"dropdown"}>
        <div className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <ProfileIcon id={"profile"} />
            </span>
            <select
              onChange={(e) => dispatch(setRole(e.target.value))}
              className="dropdown-btn"
              value={roleName}
              required
            >
              {roles.map((role) => (
                <option key={role} value={role} className="dropdown-item">
                  {role}
                </option>
              ))}
            </select>
          </div>
          <DropDownArrow id={"dropdownArr"} />
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
            <select
              onChange={(e) => dispatch(setRequiredSkill(e.target.value))}
              className="dropdown-btn"
              value={roleRequiredSkills}
              required
            >
              {skills.map((skill) => (
                <option key={skill} value={skill} className="dropdown-item">
                  {skill}
                </option>
              ))}
            </select>
          </div>
          <DropDownArrow id={"dropdownArr"} />
        </div>
      </Dropdown>

      <Dropdown className={"dropdown"}>
        <p className="role__desc-title">Complimentary Skills (Select any 3)</p>
        <div className="dropdown__role-btn">
          <div className="dropdown__profile-cont">
            <span>
              <StarIcon id={"Appren"} />
            </span>
            <select
              onChange={(e) => dispatch(setComplimentarySkill(e.target.value))}
              className="dropdown-btn"
              value={roleName}
              required
            >
              {skills.map((skillComp) => (
                <option
                  key={skillComp}
                  value={skillComp}
                  className="dropdown-item"
                >
                  {skillComp}
                </option>
              ))}
            </select>
          </div>
          <DropDownArrow id={"dropdownArr"} />
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
            <input
              value={suggestions}
              id="hoursInput"
              type="text"
              placeholder="Select location"
            />
            <DropDownArrow id={"locationDropdown"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamRoles;
