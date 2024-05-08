import { useGameState } from "@/state/game";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const Logo = () => {
  const endGame = useGameState((state) => state.endGame);
  const updateGameStatus = useGameState((state) => state.setGameStatus);

  return (
    <Button
      variant="link"
      onClick={() => {
        endGame();
        updateGameStatus("not started");
      }}
      className={cn("p-0 -ml-2")}
    >
      <svg width="90" height="40" xmlns="http://www.w3.org/2000/svg">
        <text
          x="10"
          y="20"
          font-family="Arial"
          font-size="20"
          className="uppercase"
          fill="#fbed2b"
        >
          Color
        </text>
        <text
          x="10"
          y="40"
          font-family="Arial"
          font-size="20"
          className="uppercase"
          fill="#ff65be"
        >
          Matrix
        </text>
      </svg>
    </Button>
  );
};
