import React, { useCallback, useState } from "react";
import "../styles/BoxContent.css";
import CreateBox from "./CreateBox";
import {
  AddCircle,
  CustomIcon,
  DataIcon,
  GrowthIcon,
  ImageIcon,
  KeyboardIcon,
  MobileIcon,
  MonitorIcon,
  PrototypeIcon,
  UploadIcon,
} from "./IconSvg";
import TeamBox from "./TeamBox";
import Linkedin from "../imgs/LinkedIn logo.svg";
import DateInput from "./DateInput";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import TeamRoles from "./TeamRoles";
import TeamAdmin from "./TeamAdmin";
import { changeIcon, selectValue, setValue } from "../features/TickSlice";

const BoxContent = () => {
  const [showRoles, setShowRoles] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch(setValue(e.target.value));
      dispatch(changeIcon(e.target.value.trim().length !== 0));
    },
    [dispatch]
  );

  return (
    <div className="boxContent">
      <CreateBox boxTitle={"Company Logo & Apprenticeship Title"}>
        <div className="boxContent__form">
          <div className="boxContent__rectangle-cont">
            <div className="boxContent__rectangle" />
            <ImageIcon id={"image"} />
          </div>
          <input
            id="boxInput"
            type="text"
            value={value}
            placeholder="Enter Apprenticeship Title"
            onChange={handleChange}
          />
        </div>
      </CreateBox>

      <CreateBox boxTitle={"Company Description"}>
        <div className="boxContent__form">
          <input
            id="boxInput"
            type="text"
            placeholder="Enter Description"
            value={value}
            onChange={handleChange}
          />
        </div>
      </CreateBox>

      <CreateBox boxTitle={"Apprenticeship Description"}>
        <div className="boxContent__form">
          <input id="boxInput" type="text" placeholder="Enter Description" />
        </div>
      </CreateBox>

      <CreateBox
        boxTitle={"Introduce yourself, your company, and what you're building."}
      >
        <div className="boxContent__form">
          <div className="boxContent__input">
            <label className="boxContent__label">
              Drag n drop to upload your video
            </label>
            <UploadIcon />
          </div>
          <input type="file" placeholder="Enter Description" />
        </div>
      </CreateBox>

      <CreateBox boxTitle={"Team Type"}>
        <div className="boxContent__teamType">
          <TeamBox teamName={"Web Platform"} image={<MonitorIcon />} />
          <TeamBox teamName={"Mobile App"} image={<MobileIcon />} />
          <TeamBox teamName={"Growth"} image={<GrowthIcon />} />
          <TeamBox teamName={"Marketing Website"} image={<KeyboardIcon />} />
          <TeamBox teamName={"Prototyping"} image={<PrototypeIcon />} />
          <TeamBox teamName={"Data"} image={<DataIcon />} />
          <TeamBox teamName={"Custom Team"} image={<CustomIcon />} />
        </div>
      </CreateBox>

      <CreateBox boxTitle={"Team Roles"}>
        <button
          onClick={() => setShowRoles(true)}
          className="role__dashedCont--roles"
        >
          <AddCircle id={"circle"} />
          <p className="role__dashedCont-name">Add Team Member</p>
        </button>
      </CreateBox>

      <CreateBox boxTitle={"Team Admin"}>
        <button
          onClick={() => setShowAdmin(true)}
          className="role__dashedCont--admin"
        >
          <AddCircle id={"circle"} />
          <p className="role__dashedCont-name">Add Team Member</p>
        </button>

        <div className="user__linkedin">
          <div className="user__profile">
            <div className="user__profile-rectangle" />
            <p className="user__profile-name">John McKinsey</p>
          </div>
          <img src={Linkedin} alt="linkedin logo" />
        </div>
      </CreateBox>

      <CreateBox boxTitle={"Timeline"}>
        <div className="boxContent__timeline">
          <DateInput />
        </div>
      </CreateBox>

      {showRoles ? (
        <Modal
          title={"Add Role"}
          onClose={() => setShowRoles(false)}
          show={showRoles}
          btnName={"Save"}
        >
          <TeamRoles />
        </Modal>
      ) : (
        <Modal
          title={"Add Team Admin"}
          onClose={() => setShowAdmin(false)}
          show={showAdmin}
          btnName={"Save"}
        >
          <TeamAdmin />
        </Modal>
      )}
    </div>
  );
};

export default BoxContent;
