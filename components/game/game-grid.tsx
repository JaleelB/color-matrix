import { colors } from "@/lib/color";
import GameTile from "../game/game-tile";
import { updateGameColorAndText, useGameState } from "@/state/game";
import { useEffect } from "react";

export const GameGrid: React.FC = () => {
  const gameColor = useGameState((state) => state.gameColor);
  const gameColorText = useGameState((state) => state.gameColorText);

  useEffect(() => {
    updateGameColorAndText();
  }, []);

  return (
    <div className="flex flex-col justify-center gap-8">
      <div
        className="text-4xl md:text-6xl font-bold uppercase text-center"
        style={{
          color: gameColor,
        }}
      >
        {gameColorText}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {colors.map((color, i) => (
          <GameTile key={i} color={color} />
        ))}
      </div>
    </div>
  );
};
