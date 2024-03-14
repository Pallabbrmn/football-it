import React from "react";

const StandingsDataHeader = () => {
  return (
    <tr className=" grid grid-cols-[2fr,3fr] border-none bg-slate-100 ">
      <div className="flex sm:grid sm:grid-cols-[1fr,4fr]">
        <th className="font-large text-sm text-gray-700  p-2">Position</th>
        <th className="font-large text-sm text-gray-700  p-2 pl-2 flex">
          Team
        </th>
      </div>
      <div className="grid grid-cols-8 gap-14 sm:gap-0 ml-14 sm:ml-0">
        <th className="font-large text-sm text-gray-700  p-2">Played</th>
        <th className="font-large text-sm text-gray-700  p-2 ml-[-2px] sm:ml-0">
          Won
        </th>
        <th className="font-large text-sm text-gray-700  p-2 ml-[-22px] sm:ml-0">
          Drawn
        </th>
        <th className="font-large text-sm text-gray-700  p-2 ml-[-26px] sm:ml-0">
          Lost
        </th>
        <th className="font-large text-sm text-gray-700  p-2 hidden sm:block">
          GF
        </th>
        <th className="font-large text-sm text-gray-700  p-2 hidden sm:block">
          GA
        </th>
        <th className="font-large text-sm text-gray-700  p-2 hidden sm:block">
          GD
        </th>
        <th className="font-large text-sm text-gray-700  p-2 ml-[-50px] sm:ml-0">
          Points
        </th>
      </div>
    </tr>
  );
};

export default StandingsDataHeader;
