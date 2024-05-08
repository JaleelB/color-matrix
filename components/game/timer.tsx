import { useGameState } from "@/state/game";
import React, { useEffect, useState } from "react";

export const Timer = () => {
  const {
    timer: timerFromStore,
    updateTimer,
    gameStatus,
    updateGameStatus,
    gameLevel,
    startTime,
  } = useGameState((state) => ({
    timer: state.timer,
    updateTimer: state.setTimer,
    gameStatus: state.gameStatus,
    updateGameStatus: state.setGameStatus,
    gameLevel: state.gameLevel,
    startTime: state.startTime,
  }));

  // const [localTimer, setLocalTimer] = useState(timerFromStore * 1000); // Store time in milliseconds
  const [displayTime, setDisplayTime] = useState(() =>
    formatTime(timerFromStore * 1000)
  ); // Initialize display time

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const runTimer = () => {
      const elapsed = performance.now() - start;
      const newTimer = Math.max(0, timerFromStore * 1000 - elapsed);
      // setLocalTimer(newTimer);
      setDisplayTime(formatTime(newTimer));
      updateTimer(Math.ceil(newTimer / 1000)); //

      if (newTimer <= 0) {
        updateGameStatus("ended");
      } else {
        frameId = requestAnimationFrame(runTimer);
      }
    };

    if (gameStatus === "running") {
      frameId = requestAnimationFrame(runTimer);
    }

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [gameStatus, timerFromStore, updateGameStatus, updateTimer]);

  // Function to format the timer into seconds:milliseconds
  function formatTime(totalMilliseconds: number) {
    const seconds = Math.floor(totalMilliseconds / 1000);
    const milliseconds = Math.floor((totalMilliseconds % 1000) / 10); // Simulated two digits
    const microseconds = Math.floor((totalMilliseconds % 10) * 10); // Simulated two digits
    return `${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(2, "0")}:${microseconds.toString().padStart(2, "0")}`;
  }

  useEffect(() => {
    // Reset the local timer when the game level changes or game restarts
    if (gameStatus === "not started" || gameStatus === "running") {
      // setLocalTimer(startTime[gameLevel] * 1000);
      setDisplayTime(formatTime(startTime[gameLevel] * 1000));
    }
  }, [gameLevel, gameStatus, startTime]);

  return <span className="min-w-[150px] text-2xl">{displayTime}</span>;
};
