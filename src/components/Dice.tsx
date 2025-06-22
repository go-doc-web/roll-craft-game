import type { FC } from "react";
import { motion } from "framer-motion";
import animationStartDice from "../assets/dice/Property_1_1.svg";

import dice1 from "../assets/dice/Value_1.svg";
import dice2 from "../assets/dice/Value_2.svg";
import dice3 from "../assets/dice/Value_3.svg";
import dice4 from "../assets/dice/Value_4.svg";
import dice5 from "../assets/dice/Value_5.svg";
import dice6 from "../assets/dice/Value_6.svg";

interface DiceProps {
  value: number | null;
  rolling: boolean;
}

const mapDiceImages: Record<number, string> = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const Dice: FC<DiceProps> = ({ value, rolling }) => {
  return (
    <div className="w-25 h-25 flex items-center justify-center rounded  ">
      {rolling ? (
        <motion.img
          src={animationStartDice}
          alt="animation"
          className="w-20 h-20 object-contain"
          animate={{ rotate: 360, scale: [1, 1.07, 1] }}
          transition={{
            rotate: { repeat: Infinity, duration: 0.6, ease: "linear" },
            scale: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
          }}
        />
      ) : value !== null ? (
        <motion.img
          src={mapDiceImages[value]}
          alt={`Dice ${value}`}
          className="w-20 h-20 object-contain"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [10, -5, 0] }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      ) : (
        <img
          src={mapDiceImages[3]}
          alt={`Dice ${value}`}
          className="w-20 h-20 object-contain"
        />
      )}
      {!rolling && value !== null && (
        <motion.div
          className="absolute inset-0 bg-yellow-300 opacity-20 blur-xl rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      )}
    </div>
  );
};

export default Dice;
