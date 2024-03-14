import React, { useState, useEffect } from "react";
import axios from "axios";
import TopPlayerCard from "../components/TopPlayerCard";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "../store/api";

const TopPlayers = () => {
  const [players, setPlayers] = useState([]);

  const selectCurrentLeagueId = (state) => state.home.id;
  const currentLeagueId = useSelector(selectCurrentLeagueId);

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_topscorers&league_id=${currentLeagueId}&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
      setPlayers(res.data);
    });
  }, [currentLeagueId]);

  return (
    <div className="w-[90%] sm:w-[85%] mx-auto">
      <p className="pt-2 px-2 font-semibold">Top Players</p>
      <p className="pb-2 px-2 font-regular">Season 2023-24</p>
      <div className="h-[50px] items-center justify-between flex px-2 rounded-lg bg-gradient-to-r from-white via-gray-300 to-white">
        <div className="flex sm:gap-2">
          <p className="w-[70px] font-semibold">Position</p>
          <p className="font-semibold">Player</p>
        </div>
        <div className="flex items-center sm:gap-2">
          <p className="font-semibold">Team</p>
          <p className="bg-slate-100 w-[80px] py-[0.3rem] rounded-lg text-center font-semibold">
            Goals
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {players.map((player, idx) => {
          return (
            <TopPlayerCard
              key={idx}
              position={player.player_place}
              name={player.player_name}
              team={player.team_name}
              goals={player.goals}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopPlayers;
