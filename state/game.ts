import { randomColorPair } from "@/lib/color";
import { create } from "zustand";

export type Time = 7 | 5 | 3; // time to countdown for each tile click decreases with increasing game level. 7s for easy, 5s for medium, 3s for hard
export type GameLevel = "easy" | "medium" | "hard";
type GameStatus =
  | "not started"
  | "level select"
  | "loading"
  | "running"
  | "paused"
  | "ended";

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
  levels: GameLevel[];
}

type GameActions = {
  increaseScore: () => void;
  setHighScore: (score: number) => void;
  setGameLevel: (level: GameLevel) => void;
  setTimer: (time: number) => void;
  setGameStatus: (status: GameStatus) => void;
  endGame: () => void;
  setGameColor: (color: string, text: string) => void;
  startGame: (level: GameLevel) => void;
  restartGame: () => void;
};

export const useGameState = create<GameState & GameActions>((set) => {
  // Check if code is running on client or server
  const isClient = typeof window !== "undefined";

  const getFromLocalStorage = (key: string) => {
    if (isClient) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : 0;
    }
    return 0;
  };

  return {
    currentScore: 0,
    highScore: getFromLocalStorage("high-score"),
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
    levels: ["easy", "medium", "hard"],
    gameStatus: "not started",
    increaseScore: () => {
      set((state) => {
        const newScore = state.currentScore + 1;
        const newHighScore =
          newScore > state.highScore ? newScore : state.highScore;

        // Update high score in local storage if necessary
        if (newScore > state.highScore && isClient) {
          localStorage.setItem("high-score", JSON.stringify(newScore));
        }

        return {
          ...state,
          currentScore: newScore,
          highScore: newHighScore,
          timer: state.startTime[state.gameLevel], // Reset the timer
        };
      });
    },
    setHighScore: (score) => {
      set({ highScore: score });
      if (isClient) {
        localStorage.setItem("high-score", JSON.stringify(score));
      }
    },
    setGameLevel: (level) => set({ gameLevel: level }),
    setTimer: (time) => set({ timer: time }),
    setGameStatus: (status) => set({ gameStatus: status }),
    startGame: (level: GameLevel) => {
      set((state) => ({
        ...state,
        gameStatus: "running",
        gameLevel: level,
        currentScore: 0,
        timer: state.startTime[level],
      }));
      console.log("state", useGameState.getState());
    },
    endGame: () => {
      set((state) => {
        // Only update high score if the current score is greater
        if (state.currentScore > state.highScore) {
          if (isClient) {
            localStorage.setItem(
              "high-score",
              JSON.stringify(state.currentScore)
            );
          }
          return {
            ...state,
            gameStatus: "ended",
            highScore: state.currentScore,
            currentScore: 0,
          };
        }

        return {
          ...state,
          gameStatus: "ended",
          currentScore: 0,
        };
      });
    },
    restartGame: () => {
      set((state) => {
        return {
          ...state,
          currentScore: 0,
          gameStatus: "running",
          timer: state.startTime[state.gameLevel],
        };
      });
    },
    setGameColor: (color, text) =>
      set({ gameColor: color, gameColorText: text }),
  };
});

export const updateGameColorAndText = () => {
  const state = useGameState.getState();
  const maxColors = state.cardCount[state.gameLevel];
  const [color, text] = randomColorPair(maxColors);
  state.setGameColor(color, text);
};
