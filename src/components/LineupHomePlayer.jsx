import React from "react";

const LineupHomePlayer = ({ playerName, playerNumber }) => {
  return (
    <div className="flex gap-4 justify-end items-center">
      <p className="font-normal text-sm sm:text-[1.2rem]">{playerName}</p>
      <div className="size-[35px] sm:h-[50px] sm:w-[50px] rounded-[50%] bg-gray-400 flex justify-center items-center">
        <p className="font-bold sm:text-[1rem] text-white">{playerNumber}</p>
      </div>
    </div>
  );
};

export default LineupHomePlayer;
