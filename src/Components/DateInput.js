import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateIcon } from './IconSvg';

const DateInput = () => {
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

  return (
    <div className='dateCont'>
        <div className="dateCont__start">
            <DatePicker
                id='start'
                placeholderText="Start Date"
                selected={dateStart}
                onChange={date => setDateStart(date)}
            />
            <DateIcon id={"date-start"} />
        </div>
        <div className="dateCont__end">
            <DatePicker
                id='end'
                placeholderText="Estimated End Date"
                selected={dateEnd}
                onChange={date => setDateEnd(date)}
            />
            <DateIcon id={"date-end"}  />
        </div>
    </div>
  )
}

export default DateInput;
