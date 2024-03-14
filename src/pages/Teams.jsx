import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import TeamCard from "../components/TeamCard";
import { API_KEY } from "../store/api";
import { getTeams } from "../store/features/homeSlice";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const selectCurrentLeagueId = (state) => state.home.id;
  const currentLeagueId = useSelector(selectCurrentLeagueId);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_teams&league_id=${currentLeagueId}&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
      setTeams(res.data);
      dispatch(getTeams(res.data));
    });
  }, [currentLeagueId]);
  return (
    <>
      <div className="py-2 text-lg font-semibold w-[90%] sm:w-[85%] mx-auto">
        Teams
      </div>
      <div className=" py-6 w-[90%] sm:w-[85%] mx-auto flex flex-col sm:grid sm:grid-cols-4 gap-6">
        {teams.map((team, idx) => {
          return (
            <TeamCard
              key={idx}
              team={team.team_name}
              teamLogo={team.team_badge}
              manager={team.coaches[0].coach_name}
            />
          );
        })}
      </div>
    </>
  );
};

export default Teams;
