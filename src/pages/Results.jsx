import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultsData from "../components/ResultsData";
import { API_KEY } from "../store/api";

const today = new Date();

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
const day = today.getDate().toString().padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

const Results = () => {
  const [results, setResults] = useState([]);

  const selectCurrentLeagueId = (state) => state.home.id;
  const currentLeagueId = useSelector(selectCurrentLeagueId);
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_events&from=2023-08-01&to=${formattedDate}&league_id=${currentLeagueId}&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
      setResults(res.data);
    });
  }, [currentLeagueId, formattedDate]);

  if (!results) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-4 w-[90%] sm:w-[85%] mx-auto">
      <h1 className="font-semibold pb-4">Results</h1>
      <div className="flex flex-col gap-2">
        {results
          .slice()
          .reverse()
          .map((result, idx) => {
            {
              /* dispatch(getResult(result)); */
            }
            return (
              <ResultsData
                key={idx}
                awayTeam={result.match_awayteam_name}
                homeTeam={result.match_hometeam_name}
                awayTeamLogo={result.team_away_badge}
                homeTeamLogo={result.team_home_badge}
                matchDate={result.match_date}
                matchRound={result.match_round}
                matchStadium={result.match_stadium}
                homeScore={result.match_hometeam_score}
                awayScore={result.match_awayteam_score}
                matchId={result.match_id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Results;
