import { useState } from 'react';
import './App.css';
import RadicalX from './imgs/RadicallX-Black-Logo 1.svg';
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {lock} from 'react-icons-kit/feather/lock'

function App() {

  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eye);

  const togglePassword = () => {
    if(type === "password") {
      setIcon(eyeOff);
      setType("text");
    } else {
      setIcon(eye);
      setType("password");
    }
  };

  return (
    <div className="app">
      <div className='left'></div>
      <div className='right'>
        <img
          className='right__image' 
          src={RadicalX} alt='' 
         />
        <form className='right__form'>
          <p className='right__header'>Login</p>
          <input
            className='right__input' 
            type="email"
            placeholder='Email'
          />
          <div className='right__pass-container'>
            <span id='lock'><Icon icon={lock} size={20}></Icon></span>
            <input
              className='right__input' 
              type={type}
              placeholder='Password'
            />
            <span id='eye' onClick={togglePassword}><Icon icon={icon} size={20} /></span>
          </div>
          <div className='right__remember-container'>
            <div className='right__remember'>
              <input 
                type="checkbox"
              />
              <label>Remember me</label>
            </div>

            <p>Forgot password?</p>
          </div>
          <button
            className='right__button'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
