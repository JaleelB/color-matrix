import React from "react";
import { useGameState } from "@/state/game";
import { Timer } from "../game/timer";
import { Logo } from "../game/logo";
import Link from "next/link";
import { Pause } from ".";
import { HowToPlay } from "../game/how-to-play";
import { GameGrid } from "../game/game-grid";
import { Button } from "../ui/button";
import { AlertDialogAction } from "../ui/alert-dialog";

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
  const gameLevel = useGameState((state) => state.gameLevel);
  const highScore = useGameState((state) => state.highScore);
  const updateGameStatus = useGameState((state) => state.setGameStatus);

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
          <HowToPlay
            trigger={
              <Button
                variant="link"
                size="icon"
                className="text-white"
                onClick={() => updateGameStatus("paused")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-circle-help"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <path d="M12 17h.01"></path>
                </svg>
              </Button>
            }
            footerAction={
              <AlertDialogAction
                className="bg-accent-secondary border-accent-secondary hover:bg-accent-secondary"
                onClick={() => updateGameStatus("running")}
              >
                Continue
              </AlertDialogAction>
            }
          />
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
