import { useRef, useState } from "react";

const StopWatch = () => {
  console.log("re-rendering");
  const [time, setTime] = useState(100);
  let intervalId = useRef(null);
  const handleStart = () => {
    console.log("start", time);
    clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };
  const handleStop = () => {
    console.log("stop");
    clearInterval(intervalId.current);
  };
  const handleReset = () => {
    console.log("reset");
    clearInterval(intervalId.current);
    setTime(0);
  };

  const displayTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div>
      <h1>StopWatch</h1>
      <p>{displayTime()}</p>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
