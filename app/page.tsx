"use client";
import { End, Game, Pause, Welcome } from "@/components/views";
import { useGameState } from "@/state/game";

export default function GameView() {
  const { gameStatus } = useGameState();

  const currentGameView = {
    "not started": <Welcome />,
    running: <Game />,
    paused: <Game />,
    ended: <End />,
  }[gameStatus];

  return <main className="w-screen h-screen">{currentGameView}</main>;
}
