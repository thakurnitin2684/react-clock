import React, { useState } from "react";

function Time() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);
  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    //  console.log(time);
  }
  return <h1 className="time">{time}</h1>;
}
export default Time;
