import React, { useRef, useState } from 'react';
import '../SignUp/Signup';
import RadicalX from '../../../imgs/RadicallX-Black-Logo 1.svg';
import { Icon } from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';
import {lock} from 'react-icons-kit/feather/lock';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/Auth';


const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value)
  }
 
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
          <p className='right__header'>Create an Account</p>
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
            <p>Already a user? 
              <Link to={'/login'} id='signin'>Sign in</Link>
            </p>
          </div>
          <button
            onClick={handleSubmit}
            className='right__button'
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup;
