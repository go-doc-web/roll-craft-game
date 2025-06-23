import { useState, useEffect } from "react";
import Board from "./components/Board";
import RollIndicator from "./components/RollIndicator";

import { TOTAL_CELLS, COOLDOWN_START } from "./constants/index";

export default function App() {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [availableRolls, setAvailableRolls] = useState<number>(10);
  const [cooldown, setCooldown] = useState<number>(0);

  useEffect(() => {
    if (availableRolls < 10) {
      const timer = setInterval(() => {
        setCooldown((prev: number) => {
          if (prev <= 1) {
            setAvailableRolls((r) => Math.min(r + 1, 10));
            return COOLDOWN_START;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [availableRolls]);

  const handleRoll = () => {
    if (isRolling || availableRolls <= 0) return;
    setIsRolling(true);
    setDiceValue(null);

    setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1;
      setDiceValue(value);
      setIsRolling(false);
      setTimeout(() => {
        animateMove(value);
      }, 300);
    }, 700);
  };

  const animateMove = (steps: number) => {
    let step = 0;
    const interval = setInterval(() => {
      setCurrentPosition((pos) => (pos + 1) % TOTAL_CELLS);
      step++;
      if (step >= steps) {
        clearInterval(interval);
        setIsRolling(false);
        setAvailableRolls((r) => r - 1);
        setCooldown(COOLDOWN_START);
      }
    }, 200);
  };

  return (
    <>
      <div className="background-container">
        <div className="stars-top"></div>
        <div className="stars-bottom"></div>
      </div>
      <div className=" w-full xs:w-[389px] mx-auto text-white flex flex-col items-center px-4">
        <div className="heading flex items-center justify-center gap-4  mt-[64px] sm:mt-[84px] ">
          <h1 className="relative text-2xl font-extrabold leading-none text-white  sm:text-3xl ">
            Roll Craft
          </h1>
        </div>
        <div className="mt-[24px] w-full">
          <RollIndicator rolls={availableRolls} cooldown={cooldown} />
        </div>
        <Board
          currentPos={currentPosition}
          value={diceValue}
          rolling={isRolling}
        />

        <div className="flex items-center  mt-6 w-full ">
          <button
            className="bg-green-500 px-6 py-3 rounded disabled:opacity-50 w-full "
            onClick={handleRoll}
            disabled={isRolling || availableRolls <= 0}
          >
            Roll
          </button>
        </div>
      </div>
    </>
  );
}
