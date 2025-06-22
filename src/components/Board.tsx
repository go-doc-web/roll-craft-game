import type { FC } from "react";
import classNames from "classnames";

interface BoardProps {
  currentPos: number;
}

const cellTypes: string[] = [
  "Start",
  "Box",
  "Cash",
  "VIP30",
  "Pickaxe",
  "Star",
  "Truck",
  "Cash",
  "Dice",
  "Gold",
  "Start",
  "Box",
  "Cash",
  "VIP60",
  "Pickaxe",
  "Start",
  "Truck",
  "Cash",
  "Dice",
  "Gold",
];

const perimeterIndices = [
  // Top
  0, 1, 2, 3, 4, 5,
  // Rigth col
  11, 17, 23, 29,
  // Bottom row
  35, 34, 33, 32, 31, 30,
  // Left col
  24, 18, 12, 6,
];

const Board: FC<BoardProps> = ({ currentPos }) => {
  const cells = Array.from({ length: 36 }, (_, index) => {
    const perimeterIdx = perimeterIndices.indexOf(index);
    const isActive = perimeterIdx !== -1;

    if (!isActive) {
      return <div key={index} className="w-10 h-10"></div>;
    }

    const type = cellTypes[perimeterIdx];
    const isPlayerHere = perimeterIdx === currentPos;

    return (
      <div
        key={index}
        className={classNames(
          "w-10 h-10 sm:w-14 sm:h-14 border flex items-center justify-center text-[8px] sm:text-xs font-bold rounded",
          isPlayerHere
            ? //   TODO:Замініти на бордер и бекграунд із макету
              "bg-yellow-300 text-black animate-pulse"
            : "bg-purple-700"
        )}
      >
        {type}
      </div>
    );
  });

  return (
    <div className="grid grid-cols-6 gap-1 bg-purple-900 p-2 rounded">
      {cells}
    </div>
  );
};

export default Board;
