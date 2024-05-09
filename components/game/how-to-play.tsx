import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface HowToPlayProps {
  trigger: React.ReactNode;
  footerAction: React.ReactNode;
}

export const HowToPlay: React.FC<HowToPlayProps> = ({
  trigger,
  footerAction,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="space-y-4">
          <AlertDialogTitle className="text-accent-secondary">
            How to Play Color Matrix?
          </AlertDialogTitle>
          <div className="w-full min-h-[200px] border grid place-content-center">
            gameplay gif
          </div>
          <AlertDialogDescription>
            Welcome to Color Matrix! This game challenges your quick thinking
            and color recognition skills. Here&apos;s how you can master the
            game and beat the high scores!
            <div className="w-full mt-4">
              <h3 className="font-bold mb-2 text-accent-secondary">
                Objective:{" "}
              </h3>
              <p>
                Your goal is to correctly identify and select tiles that match
                the color name displayed within the time limit. Each correct
                answer scores a point, but be careful—selecting the wrong color
                ends the game!
              </p>
            </div>
            <div className="w-full mt-4">
              <h3 className="font-bold mb-2 text-accent-secondary">
                Tips for Success{" "}
              </h3>
              <ol className="w-full space-y-2 list-outside">
                <li>
                  Stay Focused: The colors and text can be misleading. Focus on
                  the name of the color, not the color of the word itself.
                </li>
                <li>
                  Practice: Speed and accuracy improve with practice. Keep
                  playing to beat your best score! time.
                </li>
              </ol>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">{footerAction}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
