import { useEffect, useState } from "react";
import "./TimerCard.css";

function TimerCard() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [percentage, setPercentage] = useState(100);
  const [deg, setDeg] = useState("");

  const startTimer = () => {
    if (hours == 0 && minutes == 0 && seconds == 0) {
      return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    let remainingSeconds = totalSeconds;

    const timer = setInterval(() => {
      remainingSeconds--;

      const updatedHours = Math.floor(remainingSeconds / 3600);
      const updatedMinutes = Math.floor((remainingSeconds % 3600) / 60);
      const updatedSeconds = remainingSeconds % 60;

      const progress = (remainingSeconds % 60) * (100 / 60);
      const degrees = (progress / 100) * 360;
      setDeg(degrees);

      setHours(updatedHours);
      setMinutes(updatedMinutes);
      setSeconds(updatedSeconds);

      if (remainingSeconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const incrementHours = () => {
    setHours(hours + 1);
  };

  const decrementHours = () => {
    setHours(hours - 1);
  };

  const incrementMinutes = () => {
    setMinutes(minutes + 1);
  };

  const decrementMinutes = () => {
    setMinutes(minutes - 1);
  };

  const incrementSeconds = () => {
    setSeconds(seconds + 1);
  };

  const decrementSeconds = () => {
    setSeconds(seconds - 1);
  };

  return (
    <div className="timerCard">
      <div className="timer">
        <div
          style={{ background: `conic-gradient(#FF6A6A ${deg}deg, #0f1022 0)` }}
          className="cir1"
        >
          <p className="timerBox1">
            {hours.toString().padStart(2, 0)} :{" "}
            {minutes.toString().padStart(2, 0)} :{" "}
            {seconds.toString().padStart(2, 0)}
          </p>
        </div>
      </div>

      <div className="timerBox2">
        <div className="time">
          <div className="hours">
            <p>Hours</p>
            <button onClick={incrementHours} className="btn1 , hUP"></button>
            <p className="val , hVal">{hours.toString().padStart(2, "0")}</p>
            <button onClick={decrementHours} className="btn2 , hD"></button>
          </div>
          <p className="col">:</p>
          <div className="minutes">
            <p>Minutes</p>
            <button onClick={incrementMinutes} className="btn1 , mUp"></button>
            <p className="val , mVal">{minutes.toString().padStart(2, "0")}</p>
            <button onClick={decrementMinutes} className="btn2 , mD"></button>
          </div>
          <p className="col">:</p>
          <div className="seconds">
            <p>Seconds</p>
            <button onClick={incrementSeconds} className="btn1 , sUp"></button>
            <p className="val , sVal">{seconds.toString().padStart(2, "0")}</p>
            <button onClick={decrementSeconds} className="btn2 , sD"></button>
          </div>
        </div>
        <div className="strt">
          <button onClick={startTimer} className="startBtn">
            start
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimerCard;
