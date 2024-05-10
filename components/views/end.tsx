import React from "react";
import "../../app/glitch.css";
import { useGameState } from "@/state/game";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../game/logo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "../ui/icons";

export const End: React.FC = () => {
  const {
    finalScore,
    highScore,
    setGameStatus: updateGameStatus,
    restartGame,
  } = useGameState((state) => ({
    finalScore: state.currentScore,
    highScore: state.highScore,
    setGameStatus: state.setGameStatus,
    restartGame: state.restartGame,
  }));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between w-screen items-center h-20 px-4 py-8">
        <Logo />
        <div className="text-[3.7vh] lg:text-[2.5vh] uppercase text-center">
          <p className="text-sm">high score</p>
          <p className="text-3xl font-bold">{highScore}</p>
        </div>
      </div>
      <div className="space-y-4 flex flex-1 flex-col items-center justify-center">
        <h1 className="glitch uppercase">
          <span aria-hidden="true">Game over</span>
          Game over
          <span aria-hidden="true">Game over</span>
        </h1>
        <div className="uppercase font-bold my-[5vh] text-center">
          <p className="text-[3.7vw] lg:text-[1.5vw]">Score</p>
          <p className="text-[80px] md:text-[5.5vw] lg:text-[6vw]">
            {finalScore}
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-center gap-[2vw] p-[3vh]">
          <Button
            size="lg"
            variant="outline"
            onClick={() => updateGameStatus("not started")}
            className={cn(
              "text-[2vh] border-white border-2 uppercase w-full md:w-[51vh] p-[4vh] hover:bg-accent-tertiary hover:rounded-full hover:text-background hover:border-accent-tertiary transition duration-200 ease"
            )}
          >
            No, lets go to main menu
          </Button>
          <Button
            size="lg"
            onClick={() => restartGame()}
            className={cn(
              "bg-accent-secondary border-accent-secondary text-[2vh] uppercase w-full md:w-[51vh] p-[4vh] hover:bg-accent-tertiary hover:rounded-full  hover:border-accent-tertiary border-2 transition duration-200 ease"
            )}
          >
            Let&apos;s play again
          </Button>
        </div>
      </div>
      <div className="w-screen h-20 px-4 py-8 hidden sm:flex justify-end items-center gap-3">
        <Link
          href={siteConfig.links.twitter}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-white rounded-xl w-[48px] h-[48px] hover:rounded-full hover:bg-white hover:text-background group"
          )}
        >
          <Icons.twitter className="fill-current text-white group-hover:text-background cursor-pointer transition duration-200 ease-in-out w-[23px] h-[23px]" />
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "border-white rounded-xl w-[48px] h-[48px] hover:rounded-full hover:bg-white hover:text-background group"
          )}
        >
          <Icons.gitHub className="fill-current text-white group-hover:text-background cursor-pointer transition duration-200 ease-in-out w-[19px] h-[19px]" />
        </Link>
      </div>
    </div>
  );
};
