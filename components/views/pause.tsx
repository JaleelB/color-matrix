import React, { useEffect } from "react";
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
import { MarkerLine } from "../ui/marker-line";

export const Pause: React.FC = () => {
  const updateGameStatus = useGameState((state) => state.setGameStatus);
  const endGame = useGameState((state) => state.endGame);
  const [open, setOpen] = React.useState(false);

  const options = [
    {
      label: "Resume Game",
      func: () => {
        updateGameStatus("running");
        setOpen(false);
      },
    },
    { label: "Change Levels", func: () => updateGameStatus("level select") },
    { label: "End Game", func: () => endGame() },
  ];

  useEffect(() => {
    if (!open) {
      updateGameStatus("running");
    }
  }, [open, updateGameStatus]);

  return (
    <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
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
        side="right"
        // className="w-screen h-screen bg-accent-secondary border-accent-secondary"
        className="w-screen bg-background px-8"
      >
        <div className="relative w-full h-full">
          <SheetHeader className="-ml-2">
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
                className="uppercase fill-accent-secondary"
              >
                Color
              </text>
              <text
                x="10"
                y="40"
                font-family="Arial"
                font-size="20"
                className="uppercase fill-accent-secondary"
              >
                Matrix
              </text>
            </svg>
          </SheetHeader>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full flex flex-col gap-6">
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
                            "w-full px-0 text-[calc(20px+1.5vh)] justify-start bg-transparent text-white hover:text-accent-secondary hover:bg-transparent focus:outline-none rounded-none font-bold py-3"
                          )}
                        >
                          {option.label}
                        </Button>
                      </SheetClose>
                    ) : (
                      <Button
                        onClick={option.func}
                        className={cn(
                          "w-full px-0 text-[calc(20px+1.5vh)] justify-start bg-transparent text-white hover:text-accent-secondary hover:bg-transparent focus:outline-none rounded-none font-bold py-3"
                        )}
                      >
                        {option.label}
                      </Button>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {/* <MarkerLine
            className="absolute -top-4 -left-2 w-[12rem]"
            fill="#fbed2d"
          /> */}
          <MarkerLine
            className="absolute -bottom-[2%] -right-[15%] w-[20rem]"
            fill="#ff66bf"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
