import React from "react";
import { useDispatch } from "react-redux";
import { changeTeamIcon, setTeamType } from "../features/TickSlice";

const TeamBox = ({ teamName, image }) => {
  const dispatch = useDispatch();

  const handleChangeRadio = (e) => {
    dispatch(setTeamType(e.target.checked));
    dispatch(changeTeamIcon(e.target.checked));
  };
  return (
    <div className="team">
      <div className="team__first-row">
        <svg>{image}</svg>
        <input
          type="radio"
          name="Monitor"
          id="Monitor"
          onChange={handleChangeRadio}
        />
      </div>
      <p className="team__name">{teamName}</p>
    </div>
  );
};

export default TeamBox;
