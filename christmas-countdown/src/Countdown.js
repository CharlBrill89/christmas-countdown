import React, { useState, useEffect } from "react";

function Countdown() {
  const christmasDate = new Date("2023-12-20T20:57:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = christmasDate - now;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Countdown to Christmas</h1>
      <div className="countdown-timer">
        <div>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
