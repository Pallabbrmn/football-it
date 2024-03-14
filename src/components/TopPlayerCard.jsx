import React from "react";

const TopPlayerCard = ({ position, name, team, goals }) => {
  return (
    <div className="h-[50px] border items-center justify-between flex px-2 rounded-lg hover:transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer overflow-hidden">
      <div className="flex gap-2">
        <p className="w-[70px] text-center">{position}.</p>
        <p className="font-semibold whitespace-nowrap">{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="">{team}</p>
        <p className="bg-slate-100 px-2 sm:w-[80px] py-[0.3rem] rounded-lg text-center">
          {goals}
        </p>
      </div>
    </div>
  );
};

export default TopPlayerCard;
