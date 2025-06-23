import type { FC } from "react";
import classNames from "classnames";
import Dice from "./Dice";
import CellIcon from "./CellIcon";
import bgActiveImage from "../assets/bg-active.svg";
import bgStartImage from "../assets/bg-start.svg";
import bgSpecialCellImage from "../assets/bg-6-36-31.png";

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
      return <div key={index} className="w-11 h-11 xs:w-14 xs:h-14  "></div>;
    }

    const type = (
      <CellIcon
        className="w-full h-auto"
        type={cellTypes[perimeterIdx]}
        isStart={index === 0}
      />
    );
    const isPlayerHere = perimeterIdx === currentPos;
    const specialCellIndices = [5, 30, 35];

    let dynamicStyles = {};

    if (isPlayerHere) {
      dynamicStyles = {
        backgroundImage: `url(${bgActiveImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        border: "2px solid #82E024",
      };
    } else if (index === 0) {
      dynamicStyles = {
        backgroundImage: `url(${bgStartImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // border: "1px solid blue",
      };
    } else if (specialCellIndices.includes(index)) {
      dynamicStyles = {
        backgroundImage: `url(${bgSpecialCellImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    } else {
      dynamicStyles = {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      };
    }

    return (
      <>
        <div
          key={index}
          className={classNames(
            "w-11 h-11 xs:w-14 xs:h-14   flex items-center justify-center font-bold rounded-[8px]",
            isPlayerHere ? "text-black animate-pulse" : ""
          )}
          style={dynamicStyles}
        >
          {type}
        </div>
      </>
    );
  });

  return (
    <div className="grid grid-cols-6 gap-0.5 xs:gap-1  rounded relative mt-[29px]  ">
      {cells}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Dice value={value} rolling={rolling} />
      </div>
    </div>
  );
};

export default Board;
