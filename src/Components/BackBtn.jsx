import React from 'react';
import { LeftArrow } from './IconSvg';

const BackBtn = ({ onClick }) => {
  const handleRoute = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div onClick={handleRoute}>
      <LeftArrow id="left-arrow" />
      <button className="navbar__back">Back</button>
    </div>
  );
};

export default BackBtn;
