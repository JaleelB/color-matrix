import React from "react";
import { Button } from "../ui/button";
import { useGameState } from "@/state/game";
import { HowToPlay } from "../game/how-to-play";
import { AlertDialogAction } from "../ui/alert-dialog";
import { Icons } from "../ui/icons";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BackgroundBeams } from "../ui/background-beams";
import { MarkerLine } from "../ui/marker-line";

interface WelcomeProps {}

export const Welcome: React.FC<WelcomeProps> = () => {
  const updateGameStatus = useGameState((state) => state.setGameStatus);

  return (
    <div className="w-full h-full text-white grid place-items-center relative">
      <div className="z-[100]">
        <h1 className="text-center flex flex-col uppercase font-bold leading-tight">
          <span className="text-[max(60px,1.5vw)] md:text-[max(100px,1.5vw)] lg:text-[150px]">
            Color
          </span>
          <span className="md:-mt-10 text-[max(80px,2vw)] md:text-[max(140px,2vw)] lg:text-[200px]">
            Matrix
          </span>
          <div
            className="font-friends px-8 py-2.5 bg-accent-tertiary rounded-md absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-3/4 text-[calc(16/16*1rem)] lg:text-[calc(26/16*1rem)] whitespace-nowrap rotate-[-3deg]"
            style={{
              clipPath: "inset(0%)",
              transform:
                "translate(-50%, 0%) translate(-0.242px, -31.4766px) rotate(-3.00023deg)",
            }}
          >
            A color matching game
          </div>
        </h1>
      </div>
      <div className="w-screen fixed bottom-12 md:bottom-8 left-0 right-0 flex justify-center items-center z-[100]">
        <div className="p-2 h-14 md:h-16 lg:h-[75px] flex items-center border border-accent-secondary rounded-full md:w-full md:max-w-[380px] bg-background">
          <Button
            size="lg"
            className="rounded-full h-full md:text-lg bg-accent-secondary border-accent-secondary border uppercase font-medium hover:bg-background hover:text-accent-secondary transition duration-200"
            onClick={() => updateGameStatus("level select")}
          >
            Start Game
          </Button>
          <div className="ml-4 md:ml-6 w-full hidden md:flex justify-between pr-4 md:pr-6 h-full items-center max-w-xs gap-4 ">
            <HowToPlay
              trigger={
                <Button
                  variant="link"
                  size="icon"
                  className="text-accent-secondary hover:text-accent-secondary"
                >
                  <Icons.help className="w-[33px] h-[33px]" />
                </Button>
              }
              footerAction={
                <AlertDialogAction className="bg-accent-secondary border-accent-secondary hover:bg-accent-secondary">
                  Close
                </AlertDialogAction>
              }
            />
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.twitter className="w-[28px] h-[28px] text-accent-secondary hover:text-accent-secondary" />{" "}
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="w-[28px] h-[28px] text-accent-secondary hover:text-accent-secondary" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <BackgroundBeams />
      <MarkerLine className="-top-2 -right-2 w-[12rem]" fill="#fbed2d" />
      <MarkerLine
        className="bottom-[7%] -left-[5%] 2xl:left-[0%] w-[20rem]"
        fill="#ff66bf"
      />
    </div>
  );
};
