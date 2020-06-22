import React, { useState } from "react";
import { MdDateRange } from "react-icons/md";

function Today() {
  const date = new Date();
  
  const [month, setMonth] = useState("");
  function getMonth() {
    let options = {month: 'long'};
    const month = date.toLocaleString('en-US', options); 
    setMonth(month);
  }

  const [year, setYear] = useState(0);
  function getYear() {
    let options = {year: 'numeric'};
    const year = date.toLocaleString('en-US', options); 
    setYear(year);
  }

  const [weekDay, setWeekDay] = useState("");
  function getWeekDay() {
    let options = {weekday: 'long'};
    const weekDay = date.toLocaleString('en-US', options);
    setWeekDay(weekDay);
  }

  const [day, setDay] = useState(0);
  function getDay() {
    let options = {day: 'numeric'};
    const day = date.toLocaleString('en-US', options);
    setDay(day);
  }

  const [time, setTime] = useState(0);
  function getTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  
  setInterval(getMonth, 1000);
  setInterval(getYear, 1000);
  setInterval(getWeekDay, 1000);
  setInterval(getDay, 1000);
  setInterval(getTime, 1000);

  return (
    <div className="widget">
      <h1><MdDateRange className="react-icons"/> Today</h1>
      <p>{month}, {year}</p>
      <p className="large">{weekDay}</p>
      <p className="large">{day}</p>
      <p className="bold">{time}</p>
    </div>
  );
}

export default Today;