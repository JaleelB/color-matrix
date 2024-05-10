import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGameState } from "@/state/game";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

export const Pause: React.FC = () => {
  const updateGameStatus = useGameState((state) => state.setGameStatus);
  const endGame = useGameState((state) => state.endGame);

  const options = [
    { label: "Play Game", func: () => updateGameStatus("running") },
    { label: "Levels", func: () => updateGameStatus("level select") },
    { label: "How to Play", func: () => updateGameStatus("paused") },
    { label: "Exit", func: () => endGame() },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Button
          variant="link"
          size="icon"
          className="text-white"
          onClick={() => updateGameStatus("paused")}
        >
          <Icons.pause className="w-7 h-7" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-screen h-screen bg-accent-secondary border-accent-secondary"
      >
        <SheetHeader>
          <svg
            width="90"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
            className="fixed -mt-2 -ml-3"
          >
            <text
              x="10"
              y="20"
              font-family="Arial"
              font-size="20"
              className="uppercase"
              fill="#000"
            >
              Color
            </text>
            <text
              x="10"
              y="40"
              font-family="Arial"
              font-size="20"
              className="uppercase"
              fill="#000"
            >
              Matrix
            </text>
          </svg>
        </SheetHeader>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-col gap-2">
            {options.map((option) => {
              const shouldClose =
                option.label === "Play Game" || option.label === "Exit";
              return (
                <>
                  {shouldClose ? (
                    <SheetClose asChild key={option.label}>
                      <Button
                        onClick={option.func}
                        className={cn(
                          "w-full h-12 text-center bg-background border-2 border-background text-accent-secondary hover:bg-accent-secondary hover:text-background focus:outline-none rounded-none font-bold text-lg py-7"
                        )}
                        style={{
                          width: `calc(200px + 15vw)`,
                        }}
                      >
                        {option.label}
                      </Button>
                    </SheetClose>
                  ) : (
                    <Button
                      onClick={option.func}
                      className={cn(
                        "w-full h-12 text-center bg-background border-2 border-background text-accent-secondary hover:bg-accent-secondary hover:text-background focus:outline-none rounded-none font-bold text-lg py-7"
                      )}
                      style={{
                        width: `calc(200px + 15vw)`,
                      }}
                    >
                      {option.label}
                    </Button>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
