import type { FC } from "react";
import classNames from "classnames";
import Dice from "./Dice";
import CellIcon from "./CellIcon";

interface BoardProps {
  currentPos: number;
  rolling: boolean;
  value: number | null;
}

const cellTypes = [
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
] as const;

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

const Board: FC<BoardProps> = ({ currentPos, rolling, value }) => {
  const cells = Array.from({ length: 36 }, (_, index) => {
    const perimeterIdx = perimeterIndices.indexOf(index);
    const isActive = perimeterIdx !== -1;

    if (!isActive) {
      return <div key={index} className="w-14 h-14 "></div>;
    }

    const type = (
      <CellIcon
        className="w-full h-auto"
        type={cellTypes[perimeterIdx]}
        isStart={index === 0}
      />
    );
    const isPlayerHere = perimeterIdx === currentPos;

    return (
      <div
        key={index}
        className={classNames(
          "w-14 h-14  border flex items-center justify-center   font-bold rounded",
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
    <div className="grid grid-cols-6 gap-1 bg-purple-900 p-2 rounded relative ">
      {cells}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Dice value={value} rolling={rolling} />
      </div>
    </div>
  );
};

export default Board;
