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
  const companyTick = useSelector(selectCompanyTick);
  const teamTypeTick = useSelector(selectTeamTick);
  const dateTick = useSelector(selectTimeLineTick);
  const adminTick = useSelector(selectAdminTick);
  const roleTick = useSelector(selectRoleTick);

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
