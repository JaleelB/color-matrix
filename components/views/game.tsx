import React from "react";
import { useGameState } from "@/state/game";
import { Timer } from "../game/timer";
import { Logo } from "../game/logo";
import Link from "next/link";
import { Pause } from ".";
import { HowToPlay } from "../game/how-to-play";
import { GameGrid } from "../game/game-grid";

const GameHeader: React.FC = () => {
  const score = useGameState((state) => state.currentScore);

  return (
    <header className="fixed top-0 left-0 w-full h-20 text-white flex justify-between items-center px-4 lg:px-8">
      <Logo />
      <div className="text-right flex flex-col">
        <span className="uppercase text-xl">{score}</span>
      </div>
    </header>
  );
};

const GameFooter: React.FC = () => {
  const { gameLevel, highScore } = useGameState((state) => ({
    gameLevel: state.gameLevel,
    highScore: state.highScore,
  }));
  return (
    <footer className="fixed bottom-0 left-0 w-full h-20 text-white flex justify-between items-center px-4 lg:px-8">
      {/* <Timer /> */}
      {/* <div className="text-xl">00:00:00</div> */}
      <Link
        href="https://github.com/JaleelB/color-matrix"
        target="_blank"
        rel="noreferrer"
        className="text-xs hover:underline hidden md:block"
      >
        Designed & developed by Jaleel
      </Link>
      <div className="flex gap-4 items-end">
        <div className="flex">
          <HowToPlay />
          <Pause />
        </div>
        <div className="text-right flex flex-col">
          <span className="uppercase text-accent-secondary">{gameLevel}</span>
          <span className="uppercase -mt-1">BEST: {highScore}</span>
        </div>
      </div>
    </footer>
  );
};

export const Game: React.FC = () => {
  return (
    <section className="w-full h-full text-white grid place-items-center">
      <GameHeader />
      <GameGrid />
      <GameFooter />
    </section>
  );
};
