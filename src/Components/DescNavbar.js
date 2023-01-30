import React from "react";
import { useSelector } from "react-redux";
import { selectCompanyDTick, selectCompanyTick } from "../features/TickSlice";
import "../styles/DescNavbar.css";
import DescNavTitles from "./DescNavTitles";
import { TickCircle, UnTickCircle } from "./IconSvg";

const DescNavbar = () => {
  const companyTick = useSelector(selectCompanyTick);
  const companyDescTick = useSelector(selectCompanyDTick);
  return (
    <div className="desc">
      <DescNavTitles
        title={"Company Title & Desc."}
        icon={companyTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={companyTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles
        title={"Team Type"}
        icon={companyDescTick ? <TickCircle id={"clock"} /> : <UnTickCircle />}
        className={companyDescTick ? "navTitle__active" : "navTitle__name"}
      />
      <DescNavTitles title={"Team Role"} icon={<UnTickCircle />} />
      <DescNavTitles title={"Team Admin"} icon={<UnTickCircle />} />
      <DescNavTitles title={"Timeline"} icon={<UnTickCircle />} />
    </div>
  );
};

export default DescNavbar;
