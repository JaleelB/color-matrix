import React from "react";
import { motion } from "framer-motion";
import { useGameState } from "@/state/game";

const style = {
  width: "calc(20px + 2vw)",
  height: "calc(20px + 2vw)",
  opacity: 1,
  margin: 8,
  borderRadius: 0,
  display: "inline-block",
};

const variants = {
  start: {
    scale: 0.2,
    rotate: 0,
  },
  end: {
    scale: 1,
    rotate: 360,
  },
};

export const Loader: React.FC = () => {
  const level = useGameState((state) => state.gameLevel);
  const startGame = useGameState((state) => state.startGame);

  React.useEffect(() => {
    const timer = setTimeout(() => startGame(level), 4000);
    return () => clearTimeout(timer);
  }, [level, startGame]);

  return (
    <div className="w-full h-full grid place-items-center">
      <div className="flex gap-4">
        <motion.div
          style={style}
          variants={variants}
          initial={"start"}
          animate={"end"}
          className="bg-accent-secondary"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "anticipate",
            duration: 1,
            delay: 0,
          }}
        />
        <motion.div
          style={style}
          variants={variants}
          initial={"start"}
          animate={"end"}
          className="bg-accent-secondary"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "anticipate",
            duration: 1,
            delay: 0.2,
          }}
        />
        <motion.div
          style={style}
          variants={variants}
          initial={"start"}
          animate={"end"}
          className="bg-accent-secondary"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "anticipate",
            duration: 1,
            delay: 0.4,
          }}
        />
        <motion.div
          style={style}
          variants={variants}
          initial={"start"}
          animate={"end"}
          className="bg-accent-secondary"
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            ease: "anticipate",
            duration: 1,
            delay: 0.6,
          }}
        />
      </div>
    </div>
  );
};
