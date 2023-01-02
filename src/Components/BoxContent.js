import React from 'react';
import '../styles/BoxContent.css';
import CreateBox from './CreateBox';
import { ImageIcon } from './IconSvg';

const BoxContent = () => {
  return (
    <div className='boxContent'>
        <CreateBox boxTitle={"Company Logo & Apprenticeship Title"}>
            <div className='boxContent__form'>
                <div className='boxContent__rectangle-cont'>
                    <div className='boxContent__rectangle' />
                    <ImageIcon id={"image"} />
                </div>
                <input
                    type="text" 
                    placeholder='Enter Apprenticeship Title' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Company Description"}>
            <div className='boxContent__form'>
                <input
                    type="text" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Apprenticeship Description"}>
            <div className='boxContent__form'>
                <input
                    type="text" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Introduce yourself, your company, and what you're building"}>
            <div className='boxContent__form'>
                <input
                    type="file" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Team Type"}>
            <div className='boxContent__form'>
                <input
                    type="file" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>
        <CreateBox boxTitle={"Team Roles"}>
            <div className='boxContent__form'>
                <input
                    type="file" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Team Admin"}>
            <div className='boxContent__form'>
                <input
                    type="file" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

        <CreateBox boxTitle={"Timeline"}>
            <div className='boxContent__form'>
                <input
                    type="file" 
                    placeholder='Enter Description' 
                />
            </div>
        </CreateBox>

    </div>
  )
}

export default BoxContent;
