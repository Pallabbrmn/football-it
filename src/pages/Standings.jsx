import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { StandingsData, StandingsDataHeader } from "../components/components";
import { useSelector } from "react-redux";
import { API_KEY } from "../store/api";

const Standings = () => {
  const [standings, setStandings] = useState([]);

  const selectCurrentLeagueId = (state) => state.home.id;
  const selectCurrentLeagueName = (state) => state.home.name;

  const currentLeagueId = useSelector(selectCurrentLeagueId);
  const currentLeagueName = useSelector(selectCurrentLeagueName);

  // console.log(currentLeagueId);

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=${currentLeagueId}&APIkey=${API_KEY}`
    ).then((res) => {
      setStandings(res.data);
      console.log(res.data);
    });
  }, [currentLeagueId]);

  if (!standings) return "Loading...";

  return (
    <div className=" w-[95%] sm:w-[85%] mx-auto mt-4 ">
      <div className="  flex justify-between py-4 px-2">
        <div>
          <p className="text-4xl font-medium">{currentLeagueName}</p>
          <p className="text-[16px] font-medium">Table 2023-24</p>
        </div>
      </div>
      <div className="table w-full">
        <table className="w-full grid table-auto">
          <StandingsDataHeader />
          {standings.map((standing) => {
            return (
              <StandingsData
                key={standing.team_id}
                played={standing.overall_league_payed}
                draw={standing.overall_league_D}
                goalAgainst={standing.overall_league_GA}
                goalFor={standing.overall_league_GF}
                loss={standing.overall_league_L}
                points={standing.overall_league_PTS}
                wins={standing.overall_league_W}
                position={standing.overall_league_position}
                team={standing.team_name}
                logo={standing.team_badge}
              />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Standings;
