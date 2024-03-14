import React, { useEffect, useState } from "react";
import axios from "axios";
import FixturesData from "../components/FixturesData";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "../store/api";
import {
  getLeagues,
  getLeagueName,
  getLeagueId,
  getFixtures,
  getDate,
} from "../store/features/homeSlice";

const today = new Date();

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
const day = today.getDate().toString().padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

console.log(formattedDate); // Output: "yyyy-mm-dd"

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  const selectCurrentLeagueId = (state) => state.home.id;
  const currentLeagueId = useSelector(selectCurrentLeagueId);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_events&from=${formattedDate}&to=2024-08-05&league_id=${currentLeagueId}&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
      setFixtures(res.data);
      dispatch(getFixtures(res.data));
    });
  }, [currentLeagueId, formattedDate]);

  // https://apiv3.apifootball.com/?action=get_events&from=2023-04-05&to=2023-04-05&league_id=152&APIkey=0134fcc36542d5259cb170b76d84c75e4e762cb2c4afb94f927aae5975a5e8a4
  return (
    <div className="w-[90%] sm:w-[85%] mx-auto">
      <div className="py-4">
        <h1 className="font-medium">Season schedule </h1>
        <h1 className="font-medium">2023-24 </h1>
      </div>

      <div className="flex flex-col gap-2">
        {fixtures.map((fixture, idx) => {
          return (
            <FixturesData
              key={idx}
              awayTeam={fixture.match_awayteam_name}
              homeTeam={fixture.match_hometeam_name}
              awayTeamLogo={fixture.team_away_badge}
              homeTeamLogo={fixture.team_home_badge}
              matchDate={fixture.match_date}
              matchRound={fixture.match_round}
              matchStadium={fixture.match_stadium}
              matchTime={fixture.match_time}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fixtures;
