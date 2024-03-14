import React from "react";

const TodayMatch = ({
  leagueLogo,
  leagueName,
  matchTime,
  homeTeam,
  awayTeam,
  homeBadge,
  awayBadge,
}) => {
  return (
    <div className="border p-2 rounded-md">
      <div className="grid  border-b grid-cols-[3fr,1fr,3fr]">
        <div className="flex items-center justify-end">
          <p className="text-md font-medium">{homeTeam}</p>
          <div className="size-[50px] p-2">
            <img src={homeBadge} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="border px-4 py-1 rounded-md bg-black text-white">
            {matchTime}
          </p>
        </div>
        <div className="flex items-center justify-start">
          <div className="size-[50px] p-2">
            <img src={awayBadge} />
          </div>
          <p className="text-md font-medium">{awayTeam}</p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-1">
        <div className="size-[20px]">
          <img src={leagueLogo} />
        </div>
        <p className="text-xs">{leagueName}</p>
      </div>
    </div>
  );
};

export default TodayMatch;
