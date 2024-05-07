import { randomColorPair } from "@/lib/color";
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
  cardCount: Record<GameLevel, number>;
  gameColor: string;
  gameColorText: string;
}

type GameActions = {
  increaseScore: () => void;
  setHighScore: (score: number) => void;
  setGameLevel: (level: GameLevel) => void;
  setTimer: (time: number) => void;
  setGameStatus: (status: GameStatus) => void;
  endGame: () => void;
  setGameColor: (color: string, text: string) => void;
};

export const useGameState = create<GameState & GameActions>((set) => ({
  currentScore: 0,
  highScore: 0,
  gameLevel: "easy",
  gameColor: "",
  gameColorText: "",
  timer: 7,
  startTime: {
    easy: 7,
    medium: 5,
    hard: 3,
  },
  cardCount: {
    easy: 4,
    medium: 8,
    hard: 12,
  },
  gameStatus: "not started",
  increaseScore: () => {
    set((state) => ({
      currentScore: state.currentScore + 1,
      timer: state.startTime[state.gameLevel], // Reset the timer to the start time of the current level
    }));
  },
  setHighScore: (score) => set({ highScore: score }),
  setGameLevel: (level) => set({ gameLevel: level }),
  setTimer: (time) => set({ timer: time }),
  setGameStatus: (status) => set({ gameStatus: status }),
  endGame: () =>
    set({
      gameStatus: "not started",
      currentScore: 0,
      timer: 7,
      gameLevel: "easy",
    }),
  setGameColor: (color, text) => set({ gameColor: color, gameColorText: text }),
}));

export const updateGameColorAndText = () => {
  const state = useGameState.getState();
  const maxColors = state.cardCount[state.gameLevel];
  const [color, text] = randomColorPair(maxColors);
  state.setGameColor(color, text);
};
