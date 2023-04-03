import React, { useState, useRef } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setTimerOn(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
  };

  const stopTimer = () => {
    setTimerOn(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    setTimerOn(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (time) => {
    const padTime = (time) => time.toString().padStart(2, "0");
    const minutes = padTime(Math.floor(time / 60000));
    const seconds = padTime(((time % 60000) / 1000).toFixed(0));
    const milliseconds = padTime(((time % 1000) / 10).toFixed(0));
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#141414",
          color: "#fff",
          fontSize: "4rem",
        }}
      >
        <div>{formatTime(time)}</div>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {!timerOn ? (
            <button
              onClick={startTimer}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#26de81",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "1.5rem",
              }}
            >
              Start
            </button>
          ) : (
            <button
              onClick={stopTimer}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#fc5c65",
                color: "#fff",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                fontSize: "1.5rem",
              }}
            >
              Stop
            </button>
          )}
          <button
            onClick={resetTimer}
            style={{
              padding: "1rem 2rem",
              backgroundColor: "#ff9f43",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1.5rem",
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Timer;

