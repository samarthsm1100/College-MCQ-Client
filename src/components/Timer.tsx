"use client";
import React, { useState, useEffect } from "react";

const Timer = ({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) => {
    const [time, setTime] = useState({ hours, minutes, seconds });

  useEffect(() => {
    const countdown = setInterval(() => {
      if (time.seconds > 0) {
        setTime({ ...time, seconds: time.seconds - 1 });
      } else if (time.minutes > 0) {
        setTime({ hours: time.hours, minutes: time.minutes - 1, seconds: 59 });
      } else if (time.hours > 0) {
        setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 });
      } else {
        clearInterval(countdown);
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [time]);

  return (
    <>
      <h1>{`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</h1>
    </>
  );
};

export default Timer;
