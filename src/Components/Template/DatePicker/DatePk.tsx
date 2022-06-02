import React, { useState } from "react";
import DatePicker from "react-datepicker";
import range from 'lodash/range';
import { getMonth, getYear } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

const years = range(1990, getYear(new Date()) + 1, 1);

// const years = range
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DatePk = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ padding:'40px 200px' }}>
       <DatePicker 
       open={true}
       renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(parseInt(value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
       selected={startDate}
        onChange={(date:Date) => setStartDate(date)} />
    </div>
  )
}

export default DatePk