import React from "react";
import { Link } from "react-router-dom";

const noLogo =
  "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D185589142W9833H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/football-logo-ball-for-association-logo-on-clothing-sticker.jpg";

const StandingData = ({
  draw,
  loss,
  played,
  goalAgainst,
  goalFor,
  wins,
  points,
  position,
  team,
  logo,
}) => {
  const goalDifference = goalFor - goalAgainst;
  return (
    <tr className="grid grid-cols-[2fr,3fr] border-b-2 hover:bg-slate-50">
      <div className="grid grid-cols-[1fr,4fr]">
        <th className="text-md  font-normal p-2 flex justify-center items-center">
          {position}
        </th>
        <th className="text-md  font-normal p-2 flex sm:gap-4 gap-1 items-center">
          <div className="h-[40px] w-[40px] rounded-[50%] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={logo ? logo : noLogo}
            />
          </div>
          <Link>
            <p className="font-semibold">{team}</p>
          </Link>
        </th>
      </div>
      <div className="grid grid-cols-8 ml-[-24px] sm:ml-0">
        <th className="text-md font-normal  p-2  flex justify-center items-center">
          {played}
        </th>
        <th className="text-md font-normal  p-2 flex justify-center items-center ml-[-26px] sm:ml-0">
          {wins}
        </th>
        <th className="text-md font-normal p-2 flex justify-center items-center ml-[-28px] sm:ml-0">
          {draw}
        </th>
        <th className="text-md font-normal p-2 flex justify-center items-center ml-[-34px] sm:ml-0">
          {loss}
        </th>
        <th className="text-md font-normal p-2 sm:flex justify-center items-center hidden sm:block">
          {goalFor}
        </th>
        <th className="text-md font-normal p-2 sm:flex justify-center items-center hidden sm:block">
          {goalAgainst}
        </th>
        <th className="text-md font-normal p-2 sm:flex justify-center items-center hidden sm:block">
          {goalDifference}
        </th>
        <th className="text-md font-bold p-2 flex justify-center items-center ml-[-60px] sm:ml-0">
          {points}
        </th>
      </div>
    </tr>
  );
};

export default StandingData;
