import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Color, colorMap } from "@/lib/color";
import { updateGameColorAndText, useGameState } from "@/state/game";

export default function GameTile({ color }: { color: Color }) {
  const gameColorText = useGameState((state) => state.gameColorText);
  const correctColor = colorMap[gameColorText];

  const updatedSelectedColor = useGameState((state) => state.setSelectedColor);
  const increaseScore = useGameState((state) => state.increaseScore);
  const updateGameStatus = useGameState((state) => state.setGameStatus);

  return (
    <Button
      className={cn("rounded-lg hover:scale-105 transition-transform")}
      style={{
        width: "calc(96px + 2vw)",
        height: "calc(96px + 2vw)",
        backgroundColor: color,
        border: `2px solid ${color}`,
      }}
      variant="outline"
      onClick={() => {
        updatedSelectedColor(color);
        if (color === correctColor) {
          increaseScore();
          updateGameColorAndText();
        } else {
          updateGameStatus("ended");
        }
      }}
    />
  );
}
