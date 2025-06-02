import React, { useState, useEffect } from "react";
import "./clock.css";
// WE USE useContext TO MANAGE THE STATE OF THE CLOCK
// useState is used to create a state variable for the current time
// This is a React component for displaying a digital clock
// Digitalclock component displays the current time in a digital format
// It updates every second using setInterval and formats the time in HH:MM:SS AM/PM format


function Digitalclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalid);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridian = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const pad = (num) => num.toString().padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridian}`;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Digitalclock;
