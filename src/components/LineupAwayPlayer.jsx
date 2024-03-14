import React from "react";

const LineupAwayPlayer = ({ playerName, playerNumber }) => {
  return (
    <div className="flex gap-4 justify-start items-center">
      <div className="size-[35px] sm:h-[50px] sm:w-[50px] rounded-[50%] bg-gray-400  flex justify-center items-center">
        <p className="font-bold text-white text-sm  sm:text-[1rem]">
          {playerNumber}
        </p>
      </div>
      <p className="font-normal text-sm sm:text-[1.2rem]">{playerName}</p>
    </div>
  );
};

export default LineupAwayPlayer;
