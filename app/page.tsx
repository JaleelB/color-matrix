"use client";
import { End, Game, Welcome, Levels, Loader } from "@/components/views";
import { useGameState } from "@/state/game";

export default function GameView() {
  const { gameStatus } = useGameState();

  const currentGameView = {
    "not started": <Welcome />,
    "level select": <Levels />,
    loading: <Loader />,
    running: <Game />,
    paused: <Game />,
    ended: <End />,
  }[gameStatus];

  return <main className="w-screen h-screen">{currentGameView}</main>;
}
