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

  const [localTimer, setLocalTimer] = useState(timerFromStore);

  useEffect(() => {
    if (gameStatus === "running") {
      const intervalId = setInterval(() => {
        setLocalTimer((currentTimer) => {
          const newTimer = currentTimer - 1;
          return newTimer;
        });
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameStatus]);

  useEffect(() => {
    if (localTimer === 0) {
      updateGameStatus("ended");
    }
  }, [localTimer, updateGameStatus]);

  useEffect(() => {
    updateTimer(localTimer); // Sync the local timer back to the store
  }, [localTimer, updateTimer]);

  useEffect(() => {
    // Reset the local timer when the game level changes or game restarts
    if (gameStatus === "not started" || gameStatus === "running") {
      setLocalTimer(startTime[gameLevel]);
    }
  }, [gameLevel, gameStatus, startTime]);

  return <span>{localTimer}</span>;
};
