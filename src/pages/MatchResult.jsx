import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_KEY } from "../store/api";
import GoalScorer from "../components/GoalScorer";
import LineupHomePlayer from "../components/LineupHomePlayer";
import LineupAwayPlayer from "../components/LineupAwayPlayer";

const today = new Date();

const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
const day = today.getDate().toString().padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

const MatchResult = () => {
  const { matchId } = useParams();
  // console.log(matchId);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_events&from=2023-08-05&to=${formattedDate}&match_id=${matchId}&APIkey=${API_KEY}`
    ).then((res) => {
      console.log(res.data[0]);
      setStatistics(res.data[0]);
    });
  }, [matchId, formattedDate]);

  // console.log(statistics);

  if (!statistics) {
    return <div>Loading...</div>;
  }

  const goals = statistics ? statistics.goalscorer : [];
  // console.log(goals);

  const lineups = statistics ? statistics.lineup : [];
  // console.log(lineups);

  const stats = statistics ? statistics.statistics : [];
  console.log(stats);

  const includedStats = [
    "Ball Possession",
    "Passes Total",
    "Shots Total",
    "On Target",
    "Saves",
    "Corners",
    "Offsides",
    "Fouls",
    "Yellow Cards",
    "Penalty",
    "Substitution",
  ];

  const finalStats = stats.filter((stat) => includedStats.includes(stat.type));
  console.log(finalStats);

  const className1 = "justify-start";
  const className2 = "text-start";

  return (
    <div className="w-[95%] sm:w-[85%] mx-auto">
      <div className="score-board flex justify-between sm:grid sm:grid-cols-[3fr,1fr,3fr] bg-gradient-to-r from-white via-gray-300 to-white">
        <div className="flex justify-start items-center">
          <div className="size-[60px] p-3 sm:h-[100px] sm:w-[100px] rounded-[50%] sm:p-4 overflow-hidden">
            <img src={statistics.team_home_badge} />
          </div>
          <h1 className="sm:text-[2rem] font-bold">
            {statistics.match_hometeam_name}
          </h1>
        </div>
        <div className="flex justify-center items-center p-2  text-2xl sm:text-[6rem] mt-[-7px] leading-none  font-extrabold sm:p-0">
          <p className="mr-2 ">{statistics.match_hometeam_score}</p>
          <p className="">:</p>
          <p className="ml-2">{statistics.match_awayteam_score}</p>
        </div>
        <div className="flex justify-end items-center">
          <h1 className="sm:text-[2rem] font-bold">
            {statistics.match_awayteam_name}
          </h1>
          <div className="size-[60px] p-3 sm:h-[100px] sm:w-[100px] rounded-[50%] sm:p-4 overflow-hidden">
            <img src={statistics.team_away_badge} />
          </div>
        </div>
      </div>
      <div className="scorers grid grid-cols-2 gap-[100px] sm:gap-[200px] mt-1">
        <div className="flex flex-col sm:flex-row sm:justify-end gap-2">
          {goals.map((goal, idx) => {
            if (goal.home_scorer && goal.away_scorer === "") {
              return (
                <GoalScorer
                  key={idx}
                  scorer={goal.home_scorer}
                  time={goal.time}
                />
              );
            } else {
              return null; // or any fallback value if needed
            }
          })}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-start gap-2">
          {goals.map((goal, idx) => {
            if (goal.away_scorer && goal.home_scorer === "") {
              return (
                <GoalScorer
                  key={idx}
                  scorer={goal.away_scorer}
                  time={goal.time}
                  justifyStart={className1}
                  textStart={className2}
                />
              );
            } else {
              return null; // or any fallback value if needed
            }
          })}
        </div>
      </div>
      <div className="lineups">
        <h1 className="text-center text-xl p-4 font-semibold border-b bg-gradient-to-r from-white via-gray-300 to-white">
          Line-Ups
        </h1>
        <div className="flex justify-evenly sm:grid sm:grid-cols-[2fr,2.5fr,2fr]">
          <div className="flex justify-center items-center">
            <p className="sm:text-[1.5rem] font-semibold">
              {statistics.match_hometeam_name}
            </p>
            <div className="h-[60px] w-[60px] p-2 rounded-[50%] overflow-hidden">
              <img src={statistics.team_home_badge} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-center">
              <div className="size-[40px] sm:h-[60px] sm:w-[60px] p-2 rounded-[50%] overflow-hidden ">
                <img
                  className="h-full w-full object-cover"
                  src={statistics.team_home_badge}
                />
              </div>
            </div>

            <div className="flex justify-center">
              <p className="font-semibold whitespace-nowrap">
                {statistics.match_hometeam_system}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-[60px] w-[60px] p-2 rounded-[50%] overflow-hidden">
              <img src={statistics.team_away_badge} />
            </div>
            <p className="sm:text-[1.5rem] font-semibold">
              {statistics.match_awayteam_name}
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-2 sm:grid sm:grid-cols-[2fr,2.5fr,2fr]">
          <div className="flex flex-col gap-2 py-2 sm:pr-8">
            {lineups.home.starting_lineups.map((homePlayers, idx) => {
              return (
                <LineupHomePlayer
                  key={idx}
                  playerName={homePlayers.lineup_player}
                  playerNumber={homePlayers.lineup_number}
                />
              );
            })}
          </div>
          <div className="hidden sm:block sm:w-full sm:h-[90vh] sm:overflow-hidden">
            <img
              className="w-full h-full object-contain"
              src="/images/pitch.png"
            />
          </div>
          <div className="flex flex-col gap-2 py-2 sm:pl-8">
            {lineups.away.starting_lineups.map((awayPlayers, idx) => {
              return (
                <LineupAwayPlayer
                  key={idx}
                  playerName={awayPlayers.lineup_player}
                  playerNumber={awayPlayers.lineup_number}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2fr,2.5fr,2fr]">
        <div className="flex justify-center items-center">
          <p className="text-[1rem] font-semibold">
            Manager: {lineups.home.coach[0].lineup_player}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-center">
            <p className="font-semibold">{statistics.match_awayteam_system}</p>
          </div>
          <div className="flex justify-center">
            <div className="size-[40px] sm:h-[60px] sm:w-[60px] p-2 rounded-[50%] overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={statistics.team_away_badge}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[1rem] font-semibold">
            Manager: {lineups.away.coach[0].lineup_player}
          </p>
        </div>
      </div>
      <div className="substitutes">
        <h1 className="text-center text-xl p-4 font-semibold border-b bg-gradient-to-r from-white via-gray-300 to-white">
          Substitutes
        </h1>
        <div className="flex justify-between sm:grid sm:grid-cols-[2fr,2.5fr,2fr]">
          <div className="flex flex-col gap-2 py-2 sm:pr-8">
            {lineups.home.substitutes.map((substitutePlayers, idx) => {
              return (
                <LineupHomePlayer
                  key={idx}
                  playerName={substitutePlayers.lineup_player}
                  playerNumber={substitutePlayers.lineup_number}
                />
              );
            })}
          </div>
          <div className="hidden sm:block"></div>
          <div className="flex flex-col gap-2 py-2 sm:pl-8">
            {lineups.away.substitutes.map((substitutePlayers, idx) => {
              return (
                <LineupAwayPlayer
                  key={idx}
                  playerName={substitutePlayers.lineup_player}
                  playerNumber={substitutePlayers.lineup_number}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="match-stats">
        <h1 className="text-xl p-4 font-semibold border-b text-center bg-gradient-to-r from-white via-gray-300 to-white">
          Match Stats
        </h1>

        <div className="grid grid-cols-[2fr,2.5fr,2fr] p-4">
          <div className="flex flex-col justify-center gap-2">
            {includedStats.map((type) => {
              const dataItem = finalStats.find((item) => item.type === type);

              if (dataItem) {
                return (
                  <p
                    className="text-center font-medium text-lg py-1 bg-gradient-to-r from-gray-300"
                    key={type}
                  >
                    {dataItem.home}
                  </p>
                );
              }
            })}
          </div>
          <div className="flex flex-col justify-center gap-1">
            <p className="text-center font-normal text-lg py-1">Possesion %</p>
            <p className="text-center font-normal text-lg py-1">Passes</p>
            <p className="text-center font-normal text-lg py-1">Shots</p>
            <p className="text-center font-normal text-lg py-1">
              Shots on Target
            </p>
            <p className="text-center font-normal text-lg py-1">Saves</p>
            <p className="text-center font-normal text-lg py-1">Corners</p>
            <p className="text-center font-normal text-lg py-1">Offsides</p>
            <p className="text-center font-normal text-lg py-1">Fouls</p>
            <p className="text-center font-normal text-lg py-1">Yellow Cards</p>
            <p className="text-center font-normal text-lg py-1">Penalties</p>
            <p className="text-center font-normal text-lg py-1 ">
              Substitutions
            </p>
          </div>
          <div className="flex flex-col justify-center gap-2">
            {includedStats.map((type) => {
              const dataItem = finalStats.find((item) => item.type === type);

              if (dataItem) {
                return (
                  <p
                    className="text-center font-medium text-lg py-1 bg-gradient-to-l from-gray-300"
                    key={type}
                  >
                    {dataItem.away}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchResult;
