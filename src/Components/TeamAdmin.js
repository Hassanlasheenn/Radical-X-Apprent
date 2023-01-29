import React from "react";
import { ProfileIcon, ImageIcon, EmailIcon, LinkIcon } from "./IconSvg";
import "../styles/TeamAdmin.css";

const TeamAdmin = () => {
  return (
    <div className="admin">
      <div className="boxContent__rectangle-cont">
        <div className="boxContent__rectangle" />
        <ImageIcon id={"image"} />
      </div>
      <div className="hours__input">
        <span>
          <ProfileIcon id={"clock"} />
        </span>
        <input id="hoursInput" type="text" placeholder="Name" />
      </div>
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
