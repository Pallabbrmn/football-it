import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import MatchCard from "../components/MatchCard";
import { API_KEY } from "../store/api";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_events&match_live=1&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
      setMatches(res.data);
    });
  }, []);

  if (!matches) {
    return <div>No matches Found!</div>;
  }

  return (
    <div className="w-[85%] mx-auto py-2">
      <p className="py-4">Matches</p>
      <div className="flex flex-col gap-3">
        {matches.map((match, idx) => {
          return (
            <MatchCard
              key={idx}
              leagueName={match.league_name}
              leagueLogo={match.league_logo}
              homeTeam={match.match_hometeam_name}
              awayTeam={match.match_awayteam_name}
              homeTeamLogo={match.team_home_badge}
              awayTeamLogo={match.team_away_badge}
              stadium={match.match_stadium}
              homeTeamScore={match.match_hometeam_score}
              awayTeamScore={match.match_awayteam_score}
              matchStatus={match.match_status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Matches;
