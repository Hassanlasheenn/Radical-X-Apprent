import React from "react";
import { useSelector } from "react-redux";
import { selectCompanyTick, selectTeamTick } from "../features/TickSlice";
import "../styles/DescNavbar.css";
import DescNavTitles from "./DescNavTitles";
import { TickCircle, UnTickCircle } from "./IconSvg";

const DescNavbar = () => {
  const companyTick = useSelector(selectCompanyTick);
  const teamTypeTick = useSelector(selectTeamTick);
  return (
    <div className="desc">
      <DescNavTitles
        title={"Company Title & Desc."}
        icon={companyTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={companyTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles
        title={"Team Type"}
        icon={teamTypeTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={teamTypeTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles title={"Team Role"} icon={<UnTickCircle />} />
      <DescNavTitles title={"Team Admin"} icon={<UnTickCircle />} />
      <DescNavTitles title={"Timeline"} icon={<UnTickCircle />} />
    </div>
  );
};

export default DescNavbar;
