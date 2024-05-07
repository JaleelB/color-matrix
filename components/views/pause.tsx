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

export const Pause: React.FC = () => {
  const updateGameStatus = useGameState((state) => state.setGameStatus);
  const updateGameLevel = useGameState((state) => state.setGameLevel);
  const endGame = useGameState((state) => state.endGame);

  const options = [
    { label: "Play Game", func: () => updateGameStatus("running") },
    { label: "Levels", func: () => updateGameLevel("easy") },
    { label: "How to Play", func: () => updateGameStatus("paused") },
    { label: "Exit", func: () => endGame() },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer">
        <Button variant="link" size="icon" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-circle-pause"
            onClick={() => updateGameStatus("paused")}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="10" x2="10" y1="15" y2="9"></line>
            <line x1="14" x2="14" y1="15" y2="9"></line>
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="w-screen h-screen bg-[#56B254] border-[#56B254]"
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
                          "w-full h-12 text-center bg-black border-2 border-black text-[#56B254] hover:bg-[#56B254] hover:text-black focus:outline-none rounded-none font-bold text-lg py-7"
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
                        "w-full h-12 text-center bg-black border-2 border-black text-[#56B254] hover:bg-[#56B254] hover:text-black focus:outline-none rounded-none font-bold text-lg py-7"
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
