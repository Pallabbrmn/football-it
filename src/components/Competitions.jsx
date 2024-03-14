import React, { useEffect, useState } from "react";
import axios from "axios";
import CompetitionCard from "./CompetitionCard";
import { API_KEY } from "../store/api";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_leagues&country_id=6,44,3,5,4&APIkey=${API_KEY}`
    ).then((res) => {
      setCompetitions(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="w-[85%] mx-auto pt-4">
      <h3>Competitions</h3>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {competitions.map((competition) => {
          return (
            <CompetitionCard
              key={competition.league_id}
              league={competition.league_name}
              country={competition.country_name}
              logo={
                competition.league_logo
                  ? competition.league_logo
                  : competition.country_logo
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Competitions;
