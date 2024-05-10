import React from "react";
import { GameLevel, useGameState } from "@/state/game";
import { Icons } from "../ui/icons";
import { Logo } from "../game/logo";

export const Levels: React.FC = () => {
  const setLevel = useGameState((state) => state.setGameLevel);
  const setGameStatus = useGameState((state) => state.setGameStatus);
  const levels = useGameState((state) => state.levels);

  return (
    <div className="w-full h-full text-white grid place-items-center">
      <div className="fixed top-4 left-4">
        <Logo />
      </div>

      <div className="w-full h-full max-h-[600px]">
        <h1 className="text-center flex flex-col uppercase text-[5.7vw] md:text-[4.2vh] xl:text-[3.7vh] mb-16 font-medium">
          Choose a level
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 container w-full max-w-5xl h-full max-h-[500px]">
          {levels.map((level, index) => (
            <div
              key={index}
              className={`level-card p-2 grid place-content-center border border-accent md:w-full md:max-w-[400px] cursor-pointer group uppercase relative bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500`}
              onClick={() => {
                setLevel(level);
                setGameStatus("loading");
              }}
            >
              <Icons.plus className="absolute h-6 w-6 -top-3 -left-3 text-white" />
              <Icons.plus className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
              <Icons.plus className="absolute h-6 w-6 -top-3 -right-3 text-white" />
              <Icons.plus className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />

              <p
                style={{
                  gridArea: "1/1",
                }}
                className="text-white text-center w-full text-[5.7vw] md:text-[4.2vh] xl:text-[3.7vh] opacity-100 group-hover:-translate-y-4 group-hover:opacity-0 transition duration-200"
              >
                {index + 1}
              </p>
              <p
                style={{
                  gridArea: "1/1",
                }}
                className="text-background mt-4 text-center w-full text-[5.7vw] md:text-[4.2vh] xl:text-[3.7vh] opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:-translate-y-2 transition duration-200"
              >
                {level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
