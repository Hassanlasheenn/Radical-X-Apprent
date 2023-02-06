import React, { useEffect, useRef, useState } from "react";
import { ProfileIcon, ImageIcon, EmailIcon, LinkIcon } from "./IconSvg";
import "../styles/TeamAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser, setAdminImg, setAdminName } from "../features/AdminSlice";

const TeamAdmin = ({ title }) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.admin.name);
  const userImg = useSelector((state) => state.admin.image);
  const inputUserRef = useRef(null);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ userName }));
    dispatch(setAdminImg({ userImg }));
  };

  const handleClick = (e) => {
    inputUserRef.current.click();
  };

  const handleUserImg = (e) => {
    const fileObj = dispatch(
      setAdminImg(URL.createObjectURL(e.target.files[0]))
    );
    if (!fileObj) {
      return null;
    }
  };
  return (
    <div className="admin">
      <div className="boxContent__rectangle-cont">
        <img src={userImg} className="boxContent__rectangle" />
        <ImageIcon onClick={handleClick} id={"image"} />
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleUserImg}
          ref={inputUserRef}
        />
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
          required
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
