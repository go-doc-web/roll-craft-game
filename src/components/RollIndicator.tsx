import type { FC } from "react";

interface RollIndicatorProps {
  rolls: number;
  cooldown: number;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

const RollIndicator: FC<RollIndicatorProps> = ({ rolls, cooldown }) => {
  const total = 10;
  const bars = Array.from({ length: total }).map((_, i) => {
    const filled = i < rolls;

    // TODO use classname for refactoring className
    if (i === 0) {
      return (
        <div
          key={i}
          className={` h-4 rounded-l-full w-[26.7px] xs:w-[33.7px] mx-[1px] border border-yellow-400 ${
            filled ? "bg-yellow-400" : "bg-white/10 "
          }`}
        ></div>
      );
    } else if (i === total - 1) {
      return (
        <div
          key={i}
          className={` h-4 rounded-r-full w-[26.7px] xs:w-[33.7px] mx-[1px] border border-yellow-400 ${
            filled ? "bg-yellow-400" : "bg-white/10 "
          }`}
        ></div>
      );
    } else
      return (
        <div
          key={i}
          className={` h-4  w-[26.7px] xs:w-[33.7px] mx-[1px] border border-yellow-400 ${
            filled ? "bg-yellow-400" : "bg-white/10 "
          }`}
        ></div>
      );
  });

  return (
    <div className="w-full flex flex-col items-center mt-4 text-white">
      <div className="w-full flex justify-between items-center text-xs font-semibold mb-1">
        <span className="text-[12px] font-normal">Available rolls</span>
        <span className="text-[20px] font-bold">{rolls}/10</span>
      </div>
      <div className="flex items-center justify-center">{bars}</div>
      <div className="mt-2 px-2 py-1 bg-white/10 rounded text-sm font-mono">
        {formatTime(cooldown)}
      </div>
    </div>
  );
};

export default RollIndicator;
