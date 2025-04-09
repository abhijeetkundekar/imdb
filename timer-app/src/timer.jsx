import { useRef } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(100);
  let intervalId = useRef(null);

  function handleStart() {
    intervalId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 2000);
  }
  function handleStop() {
    clearInterval(intervalId.current);
  }
  function handleReset() {
    clearInterval(intervalId.current);
    setTime(0);
  }

  function displayTime() {
    const hh = Math.floor(time / 3600);
    const mm = Math.floor((time % 3600) / 60);
    const ss = time % 60;
    return `${String(hh).padStart(2, "0")}:${String(mm).padStart(
      2,
      "0"
    )}:${String(ss).padStart(2, "0")}`;
  }
  return (
    <>
      <h1>StopWatch</h1>
      <p>{displayTime()}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default StopWatch;
