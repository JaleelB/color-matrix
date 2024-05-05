import { create } from "zustand";

export type Time = 7 | 5 | 3; // time to countdown for each tile click decreases with increasing game level. 7s for easy, 5s for medium, 3s for hard
type GameLevel = "easy" | "medium" | "hard";
type GameStatus = "not started" | "running" | "paused" | "ended";

interface GameState {
  currentScore: number;
  highScore: number;
  gameLevel: GameLevel;
  timer: number;
  gameStatus: GameStatus;
  startTime: Record<GameLevel, Time>;
}

type GameActions = {
  increaseScore: () => void;
  setHighScore: (score: number) => void;
  setGameLevel: (level: GameLevel) => void;
  setTimer: (time: number) => void;
  setGameStatus: (status: GameStatus) => void;
};

export const useGameState = create<GameState & GameActions>((set) => ({
  currentScore: 0,
  highScore: 0,
  gameLevel: "easy",
  timer: 7,
  startTime: {
    easy: 7,
    medium: 5,
    hard: 3,
  },
  gameStatus: "not started",
  increaseScore: () =>
    set((state) => ({ currentScore: state.currentScore + 1 })),
  setHighScore: (score) => set({ highScore: score }),
  setGameLevel: (level) => set({ gameLevel: level }),
  setTimer: (time) => set({ timer: time }),
  setGameStatus: (status) => set({ gameStatus: status }),
}));
