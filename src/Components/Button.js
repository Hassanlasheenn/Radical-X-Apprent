import React from 'react';

const Button = ({ btnName, onClick }) => {

  const handleRoute = () => {
    if(onClick) {
        onClick()
    }
}
  return (
    <div>
      <button onClick={handleRoute} className='home__right-button'>{btnName}</button>
    </div>
  )
}

export default Button;
