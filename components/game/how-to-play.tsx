import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { useGameState } from "@/state/game";

export const HowToPlay: React.FC = () => {
  const updateGameStatus = useGameState((state) => state.setGameStatus);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="link"
          size="icon"
          className="text-white"
          onClick={() => updateGameStatus("paused")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-circle-help"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-4">
          <AlertDialogTitle>How to Play Color Matrix?</AlertDialogTitle>
          <div className="w-full min-h-[200px] border grid place-content-center">
            gameplay gif
          </div>
          <AlertDialogDescription>
            Welcome to Color Matrix! This game challenges your quick thinking
            and color recognition skills. Here&apos;s how you can master the
            game and beat the high scores!
            <div className="w-full mt-4">
              <h3 className="font-bold mb-2 text-white">Objective: </h3>
              <p>
                Your goal is to correctly identify and select tiles that match
                the color name displayed within the time limit. Each correct
                answer scores a point, but be careful—selecting the wrong color
                ends the game!
              </p>
            </div>
            <div className="w-full mt-4">
              <h3 className="font-bold mb-2 text-white">Tips for Success </h3>
              <ol className="w-full space-y-2 list-outside">
                <li>
                  Stay Focused: The colors and text can be misleading. Focus on
                  the color of the text, not the word itself.
                </li>
                <li>
                  Practice: Speed and accuracy improve with practice. Keep
                  playing to beat your best score! time.
                </li>
              </ol>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogAction onClick={() => updateGameStatus("running")}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
