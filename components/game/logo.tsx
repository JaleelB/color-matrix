import { useGameState } from "@/state/game";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const Logo = () => {
  const endGame = useGameState((state) => state.endGame);

  const colors = ["#EF4444", "#3B82F6", "#22C55E", "#EAB308", "#A855F7"];

  return (
    <Button
      variant="link"
      onClick={() => endGame()}
      className={cn("p-0 -ml-2")}
    >
      <svg width="90" height="40" xmlns="http://www.w3.org/2000/svg">
        {["C", "o", "l", "o", "r"].map((letter, index) => (
          <text
            key={index}
            x={10 + index * 15}
            y="20"
            font-family="Arial"
            className="uppercase"
            font-size="20"
            fill={colors[index]}
          >
            {letter}
          </text>
        ))}
        <text
          x="10"
          y="40"
          font-family="Arial"
          font-size="20"
          className="uppercase"
          fill="#fff"
        >
          Matrix
        </text>
      </svg>
    </Button>
  );
};
