import { create } from "zustand";

type Time = 7 | 5 | 3;
type GameLevel = "easy" | "medium" | "hard";
type GameStatus = "not started" | "running" | "paused" | "ended";

interface GameState {
  currentScore: number;
  highScore: number;
  gameLevel: GameLevel;
  timer: Time; // time to countdown for each tile click decreases with increasing game level. 7s for easy, 5s for medium, 3s for hard
  gameStatus: GameStatus;
  setScore: (score: number) => void;
  setHighScore: (score: number) => void;
  setGameLevel: (level: GameLevel) => void;
  setTimer: (time: Time) => void;
  setGameStatus: (status: GameStatus) => void;
}

export const useGameState = create<GameState>((set) => ({
  currentScore: 0,
  highScore: 0,
  gameLevel: "easy",
  timer: 7,
  gameStatus: "not started",
  setScore: (score) => set({ currentScore: score }),
  setHighScore: (score) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("highScore", score.toString());
    }
    set({ highScore: score });
  },
  setGameLevel: (level) => set({ gameLevel: level }),
  setTimer: (time) => set({ timer: time }),
  setGameStatus: (status) => set({ gameStatus: status }),
  initializeHighScore: () => {
    if (typeof window !== "undefined") {
      const storedHighScore = parseInt(
        localStorage.getItem("highScore") || "0",
        10
      );
      set({ highScore: storedHighScore });
    }
  },
}));
