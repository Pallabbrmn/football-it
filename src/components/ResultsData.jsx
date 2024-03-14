import React from "react";
import { MdOutlineStadium } from "react-icons/md";
import { Link } from "react-router-dom";

const ResultsData = ({
  awayTeam,
  homeTeam,
  awayTeamLogo,
  homeTeamLogo,
  matchDate,
  matchTime,
  matchStadium,
  matchRound,
  homeScore,
  awayScore,
  matchId,
}) => {
  return (
    <>
      <div className=" border-b sm:grid sm:grid-cols-[3fr,0.7fr,3fr] px-2 py-2 sm:py-6 rounded-lg hover: transform hover:scale-105 transition duration-300 ease-in-out shadow-md hover:shadow-lg cursor-pointer">
        <div className="teams sm:flex sm:items-center py-2 sm:py-0 grid grid-cols-[3fr,1fr,3fr] gap-1">
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
          <div className=" rounded-lg flex items-center px-2 h-[40px] w-[70px] bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50 font-semibold justify-center">
            <p className="text-black">{homeScore}</p>{" "}
            <p className="text-black">:</p>
            <p className="text-black">{awayScore}</p>
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
        <div className="flex items-center justify-center border-t sm:border-t-0">
          <p className="font-semibold text-gray-900">{matchDate}</p>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-6">
          <div className="flex items-center gap-1">
            <MdOutlineStadium />
            <p>{matchStadium}</p>
          </div>

          <Link
            className="bg-slate-100 py-1 px-4 border rounded-lg"
            to={`/CompetitionsLayout/results/${matchId}`}
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResultsData;
