import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Color, colorMap } from "@/lib/color";
import { useGameState } from "@/state/game";

export default function GameTile({ color }: { color: Color }) {
  const setColor = useGameState((state) => state.setSelectedColor);
  const increaseScore = useGameState((state) => state.increaseScore);
  const currentColorText = colorMap[color];

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
        setColor(currentColorText);
        increaseScore();
      }}
    />
  );
}
