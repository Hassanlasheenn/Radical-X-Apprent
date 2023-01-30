import React from "react";

const DescNavTitles = ({ title, icon, className }) => {
  return (
    <div className="navTitle">
      <svg>{icon}</svg>
      <p className={className}>{title}</p>
    </div>
  );
};

export default DescNavTitles;
