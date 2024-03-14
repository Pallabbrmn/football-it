import React from "react";

const MatchCard = ({
  leagueName,
  leagueLogo,
  homeTeam,
  awayTeam,
  homeTeamLogo,
  awayTeamLogo,
  homeTeamScore,
  awayTeamScore,
  stadium,
  matchStatus,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden p-2 flex flex-col gap-2  bg-gradient-to-r from-white via-gray-300 to-white">
      <div className="flex justify-center border-b pb-2">
        <div className="flex gap-2 border p-2 w-fit rounded-[25px]">
          <div className="h-[30px] w-[30px] rounded-[50%] overflow-hidden">
            <img src={leagueLogo} />
          </div>
          <p className="font-semibold min-w-[250px] pr-4">{leagueName}</p>
        </div>
      </div>
      <div className="flex justify-center py-2 ">
        <div className="grid grid-cols-[3fr,1fr,3fr]">
          <div className="flex items-center justify-end gap-2">
            <h1 className="text-3xl font-semibold">{homeTeam}</h1>
            <div className="h-[60px] w-[60px] rounded-[50%] overflow-hidden">
              <img src={homeTeamLogo} />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 gap-1">
            <p className="text-4xl font-semibold">{homeTeamScore}</p>
            <p className="text-4xl font-semibold">:</p>
            <p className="text-4xl font-semibold">{awayTeamScore}</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[60px] w-[60px] rounded-[50%] overflow-hidden">
              <img src={awayTeamLogo} />
            </div>
            <h1 className="text-3xl font-semibold">{awayTeam}</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center border-b pb-4">
        <p className="font-semibold">
          <span className="px-4 py-1 border rounded-lg bg-red-500 text-white">
            Live
          </span>{" "}
          {matchStatus}
          <sup>"</sup>
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-fit">
          <p className="font-semibold">{stadium}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-fit border py-2 px-6 rounded-[25px]">
          <p>Statistics</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
