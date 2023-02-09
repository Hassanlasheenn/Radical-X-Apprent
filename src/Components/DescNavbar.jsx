import React from "react";
import { useSelector } from "react-redux";
import {
  selectAdminTick,
  selectCompanyTick,
  selectRoleTick,
  selectTeamTick,
  selectTimeLineTick,
} from "../features/TickSlice";
import "../styles/DescNavbar.css";
import DescNavTitles from "./DescNavTitles";
import { TickCircle, UnTickCircle } from "./IconSvg";

const DescNavbar = () => {
  // main ticks
  const companyTick = useSelector(selectCompanyTick);
  const teamTypeTick = useSelector(selectTeamTick);
  const roleTick = useSelector(selectRoleTick);
  const adminTick = useSelector(selectAdminTick);
  const dateTick = useSelector(selectTimeLineTick);

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
      <DescNavTitles
        title={"Team Role"}
        icon={roleTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={roleTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles
        title={"Team Admin"}
        icon={adminTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={adminTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles
        title={"Timeline"}
        icon={dateTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={dateTick ? "navTitle__active" : "navTitle__name"}
      />
    </div>
  );
};

export default DescNavbar;
