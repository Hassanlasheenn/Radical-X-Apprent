import React from "react";
import { InfoCircle } from "./IconSvg";

const CreateBox = ({ boxTitle, children }) => {
  return (
    <div className="boxContainer">
      <div className="boxContainer__first-row">
        <p className="boxContainer__first-row--title">{boxTitle}</p>
        <InfoCircle id={"info"} />
      </div>

      <div className="boxContainer__content">{children}</div>
    </div>
  );
};

export default CreateBox;
