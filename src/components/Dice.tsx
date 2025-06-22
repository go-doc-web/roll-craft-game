import type { FC } from "react";
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

// type ValueDice = {
//     [number]:
// }

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
    <div className="w-16 h-16 flex items-center justify-center bg-white rounded shadow-md">
      {rolling ? (
        <img src={animationStartDice} alt="animation" className="w-12 h-12" />
      ) : value ? (
        <img
          src={mapDiceImages[value]}
          alt={`Dice ${value}`}
          className="w-12 h-12"
        />
      ) : (
        <span className="text-lg text-gray-400">-</span>
      )}
    </div>
  );
};

export default Dice;
