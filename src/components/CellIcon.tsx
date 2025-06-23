import type { FC } from "react";
import { cellIconMap } from "../constants/cellIconMap";

interface CellIconProps {
  type: keyof typeof cellIconMap;
  className?: string;
  isStart: boolean;
}

const CellIcon: FC<CellIconProps> = ({ type, isStart, className }) => {
  const IconComponent = cellIconMap[type];
  if (!IconComponent) return null;

  let vipText;

  if (type === "VIP30") {
    vipText = "30 min";
  }

  if (type === "VIP60") {
    vipText = "60 min";
  }

  const classesVip = type === "VIP30" || type === "VIP60" ? "w-[50%]" : "";
  return (
    <div className="flex items-center justify-center relative ">
      <div className="flex flex-col justify-center items-center ">
        {isStart && (
          <span className="absolute top-0  left:2.5 xs:left-3.5  text-[8px] xs:text-[12px] font-bold text-white block">
            Start
          </span>
        )}
        <img className={classesVip} src={IconComponent} alt={type} />
        <span className="text-[8px] xs:text-[12px] font-bold text-white block">
          {vipText}
        </span>
      </div>
    </div>
  );
};

export default CellIcon;
