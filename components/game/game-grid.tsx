import { colors } from "@/lib/color";
import GameTile from "../game/game-tile";
import { updateGameColorAndText, useGameState } from "@/state/game";
import { useEffect } from "react";

export const GameGrid: React.FC = () => {
  const gameColor = useGameState((state) => state.gameColor);
  const gameLevel = useGameState((state) => state.gameLevel);
  const gameColorText = useGameState((state) => state.gameColorText);

  const colorCount = useGameState((state) => state.cardCount);
  const numberOfColorsToDisplay = colorCount[gameLevel];
  const colorsGrid = colors.slice(0, numberOfColorsToDisplay);

  const gridCols =
    numberOfColorsToDisplay / 4 > 1 ? numberOfColorsToDisplay / 4 : 2;

  useEffect(() => {
    updateGameColorAndText();
  }, [gameLevel]);

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
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        }}
      >
        {colorsGrid.map((color, i) => (
          <GameTile key={i} color={color} />
        ))}
      </div>
    </div>
  );
};
