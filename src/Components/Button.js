import React from "react";

const Button = ({ onClick, children }) => {
  const handleRoute = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div>
      <button onClick={handleRoute} className={"home__right-button"}>
        {children}
      </button>
    </div>
  );
};

export default Button;
