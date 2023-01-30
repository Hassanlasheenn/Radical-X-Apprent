import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIcon } from "../features/TickSlice";
import { TickCircle, UnTickCircle } from "./IconSvg";

const DescNavTitles = ({ title }) => {
  const icon = useSelector(selectIcon);

  return (
    <div className="navTitle">
      <svg>{icon ? <TickCircle id={"clock"} /> : <UnTickCircle />}</svg>
      <p className={icon ? "navTitle__active" : "navTitle__name"}>{title}</p>
    </div>
  );
};

export default DescNavTitles;
