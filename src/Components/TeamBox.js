import React from 'react';

const TeamBox = ({ teamName, image }) => {
  return (
    <div className='team'>
      <div className="team__first-row">
        <svg>{image}</svg>
        <input type="radio" name="Monitor" id="Monitor" />
      </div>
      <p className="team__name">{teamName}</p>
    </div>
  )
}

export default TeamBox;
