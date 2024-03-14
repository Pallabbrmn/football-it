import React from "react";
import { MdOutlineStadium } from "react-icons/md";

const FixturesData = ({
  awayTeam,
  homeTeam,
  awayTeamLogo,
  homeTeamLogo,
  matchDate,
  matchTime,
  matchStadium,
  matchRound,
}) => {
  return (
    <>
      {/* hover:bg-gradient-to-r from-purple-500 to-pink-500  transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg */}
      <div className="border sm:border-0 sm:border-b  sm:grid sm:grid-cols-[2fr,1fr,3fr] px-2 py-2 sm:py-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
        <div className="teams py-2 sm:py-0 sm:flex items-center grid grid-cols-[3fr,1fr,3fr] gap-1 ">
          <div className="flex gap-2 items-center sm:px-4 sm:w-[250px] justify-end">
            <p className="sm:text-xl font-medium">{homeTeam}</p>
            <div className="h-[30px] w-[30px] rounded-[50%]">
              <img
                className="h-full w-full object-cover"
                src={
                  homeTeamLogo
                    ? homeTeamLogo
                    : "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D185589142W9833H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/football-logo-ball-for-association-logo-on-clothing-sticker.jpg"
                }
              />
            </div>
          </div>
          <div className="sm:py-2 py-1 px-2 sm:px-6  bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50 font-semibold rounded-lg">
            {matchTime}
          </div>
          <div className="flex gap-2 items-center sm:px-4 sm:w-[250px]">
            <div className="h-[30px] w-[30px] rounded-[50%]">
              <img
                className="h-full w-full object-cover"
                src={
                  awayTeamLogo
                    ? awayTeamLogo
                    : "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839PA4459PT28D185589142W9833H10000/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/football-logo-ball-for-association-logo-on-clothing-sticker.jpg"
                }
              />
            </div>
            <p className="sm:text-xl font-medium">{awayTeam}</p>
          </div>
        </div>
        <div className="font-semibold flex justify-center items-center border-t sm:border-t-0">
          {matchDate}
        </div>
        <div className="flex items-center justify-center sm:justify-end gap-6">
          <div className="flex items-center gap-1">
            <MdOutlineStadium />
            <p>{matchStadium}</p>
          </div>
          {/* <div className="bg-slate-100 py-1 px-4 border rounded-lg">View</div> */}
        </div>
      </div>
    </>
  );
};

export default FixturesData;
