import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIcon } from "../features/TickSlice";
import { TickCircle, UnTickCircle } from "./IconSvg";

const DescNavTitles = ({ title }) => {
  const icon = useSelector(selectIcon);
  const dispatch = useDispatch();

  return (
    <div className="navTitle">
      <svg>{icon === "tick" ? <TickCircle /> : <UnTickCircle />}</svg>
      <p className="navTitle__name">{title}</p>
    </div>
  );
};

export default DescNavTitles;
