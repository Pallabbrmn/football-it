import React from "react";

const TeamCard = ({ team, teamLogo, manager }) => {
  return (
    <div className="h-[80px] border flex items-center gap-2 p-2 rounded-lg hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer shadow-lg">
      <div className="w-[50px] h-[50px] rounded-[50%]">
        <img
          src={
            teamLogo
              ? teamLogo
              : "https://img.lovepik.com/png/20231013/Football-logo-elements-cute-football-advertising-sign-hand-drawn-world_195873_wh1200.png"
          }
        />
      </div>
      <div>
        <p className="font-semibold text-xl text-nowrap">{team}</p>
        <p>Manager: {manager}</p>
      </div>
    </div>
  );
};

export default TeamCard;
