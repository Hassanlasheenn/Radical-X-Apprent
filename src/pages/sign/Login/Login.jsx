import React, { useRef, useState } from 'react';
import './Login.css';
import RadicalX from '../../../imgs/RadicallX-Black-Logo 1.svg';
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {lock} from 'react-icons-kit/feather/lock';
import { Link } from 'react-router-dom';


const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
 
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const togglePassword = () => {
    if(type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className='login'>
      <div className='left'></div>
      <div className='right'>
        <img
          className='right__image' 
          src={RadicalX} alt='' />
        <form className='right__form'>
          <p className='right__header'>Login</p>
          <input
            className='right__input' 
            type="email"
            placeholder='Email'
            ref={emailRef}
          />
          <div className='right__pass-container'>
            <span id='lock'><Icon icon={lock} size={20}></Icon></span>
            <input
              className='right__input' 
              type={type}
              placeholder='Password'
              ref={passwordRef}
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

            <p id='forgot'>Forgot password?</p>
          </div>
          <button
            className='right__button'
          >
            Login
          </button>
          <button className='right__new-user'>
            New user? <Link to={'/signup'} id='create'>Create an account</Link>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;
