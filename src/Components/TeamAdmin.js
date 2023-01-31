import React from "react";
import { ProfileIcon, ImageIcon, EmailIcon, LinkIcon } from "./IconSvg";
import "../styles/TeamAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setAdminName } from "../features/AdminSlice";

const TeamAdmin = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.admin.name);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ userName }));
  };

  return (
    <div className="admin">
      <div className="boxContent__rectangle-cont">
        <div className="boxContent__rectangle" />
        <ImageIcon id={"image"} />
      </div>
      <form onSubmit={handleSubmit} className="hours__input">
        <span>
          <ProfileIcon id={"clock"} />
        </span>
        <input
          id="hoursInput"
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(e) => dispatch(setAdminName(e.target.value))}
        />
      </form>
      <div className="hours__input">
        <span>
          <EmailIcon id={"clock"} />
        </span>
        <input id="hoursInput" type="text" placeholder="Email address" />
      </div>
      <div className="hours__input">
        <span>
          <LinkIcon id={"clock"} />
        </span>
        <input
          id="hoursInput"
          type="text"
          placeholder="LinkedIn URL (optional)"
        />
      </div>
    </div>
  );
};

export default TeamAdmin;
