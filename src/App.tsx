import { useState, useEffect } from "react";
import Board from "./components/Board";
// import Dice from "./components/Dice";
// import RollIndicator from "./components/RollIndicator";

const TOTAL_CELLS = 36;
const COOLDOWN_START = 30 * 60;

export default function App() {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [availableRolls, setAvailableRolls] = useState<number>(7);
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

    setTimeout(() => {
      const value = Math.floor(Math.random() * 6) + 1;
      setDiceValue(value);
      animateMove(value);
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
        // TODO: тут можна додати ефект клітинки
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-purple-900 text-white flex flex-col items-center p-4">
      <Board currentPos={currentPosition} />
      <div className="flex items-center space-x-4 mt-6">
        {/* <Dice value={diceValue} rolling={isRolling} /> */}
        <button
          className="bg-green-500 px-6 py-3 rounded disabled:opacity-50"
          onClick={handleRoll}
          disabled={isRolling || availableRolls <= 0}
        >
          Roll
        </button>
      </div>
      {/* <RollIndicator rolls={availableRolls} cooldown={cooldown} /> */}
    </div>
  );
}
