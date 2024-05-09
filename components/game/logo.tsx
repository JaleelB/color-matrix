import { useGameState } from "@/state/game";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";

export const Logo = () => {
  const endGame = useGameState((state) => state.endGame);
  const updateGameStatus = useGameState((state) => state.setGameStatus);
  const updateGameLevel = useGameState((state) => state.setGameLevel);

  return (
    <Button
      variant="link"
      onClick={() => {
        endGame();
        updateGameLevel("easy");
        updateGameStatus("not started");
      }}
      className={cn("p-0 -ml-2")}
    >
      <Icons.logo />
    </Button>
  );
};
