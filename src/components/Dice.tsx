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
          className="w-20 h-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
        />
      ) : value ? (
        <img
          src={mapDiceImages[value]}
          alt={`Dice ${value}`}
          className="w-20 h-20"
        />
      ) : (
        <img
          src={mapDiceImages[3]}
          alt={`Dice ${value}`}
          className="w-20 h-20"
        />
      )}
    </div>
  );
};

export default Dice;
