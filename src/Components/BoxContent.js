import React from 'react';
import '../styles/BoxContent.css';
import CreateBox from './CreateBox';
import { ImageIcon } from './IconSvg';

const BoxContent = () => {
    // const [file, setFile] = useState(null);
    // const inputRef = useRef(null);

    // const handleFileChange = e => {
    //     const fileObj = setFile(URL.createObjectURL(e.target.files[0]));
    //     if(!fileObj) {
    //         return null;
    //     }
    // }

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
    </div>
  )
}

export default BoxContent;
