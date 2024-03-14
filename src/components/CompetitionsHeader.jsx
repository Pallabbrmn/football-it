import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "../store/api";
import {
  getLeagues,
  getLeagueName,
  getLeagueId,
} from "../store/features/homeSlice";

const CompetitionsHeader = () => {
  const { league } = useParams();
  const dispatch = useDispatch();

  const [leagues, setLeagues] = useState([]);
  const [currentLeagueId, setCurrentLeagueId] = useState("152");
  const [currentLeagueName, setCurrentLeagueName] = useState("PREMIER LEAGUE");
  const [currentLeagueLogo, setCurrentLeagueLogo] = useState(
    "https://apiv3.apifootball.com/badges/logo_leagues/152_premier-league.png"
  );
  console.log(currentLeagueId);
  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_leagues&country_id=6,44,4,17,8,5,3,58&APIkey=${API_KEY}`
    ).then((res) => {
      setLeagues(res.data);
      console.log(res.data);
      dispatch(getLeagues(res.data));
    });
  }, []);

  const handleChange = (e) => {
    const selectedLeague = leagues.find(
      (league) => league.league_name === e.target.value
    );
    setCurrentLeagueId(selectedLeague ? selectedLeague.league_id : "");
    dispatch(getLeagueId(selectedLeague.league_id));

    setCurrentLeagueName(selectedLeague ? selectedLeague.league_name : "");
    dispatch(getLeagueName(selectedLeague.league_name));
    setCurrentLeagueLogo(
      selectedLeague
        ? selectedLeague.league_logo
        : "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-sports-two-color-football-logo-image_1200420.jpg"
    );
  };
  return (
    <>
      <div className="sm:h-[180px] w-[95%] sm:w-[85%] mx-auto   bg-gradient-to-r from-white via-gray-400 to-white">
        <div className="py-2 px-1 flex flex-col gap-3 sm:flex-row justify-between h-full">
          <div className=" flex gap-3 items-center justify-start overflow-hidden">
            <div className="size-[50px] sm:h-[70px] sm:w-[70px] rounded-[50%] overflow-hidden">
              <img src={currentLeagueLogo} />
            </div>
            <p className=" text-4xl sm:text-[60px] font-bold uppercase tracking-tight text-nowrap">
              {currentLeagueName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <select
              className="py-0 px-4 outline-none rounded-3xl h-[45px] w-[70%] sm:w-[300px] border"
              onChange={handleChange}
            >
              <option>Premier League</option>
              {leagues.map((league, idx) => {
                return (
                  <option value={league.league_name} key={idx}>
                    {league.league_name}
                  </option>
                );
              })}
            </select>
            <Link
              to="/competitions"
              className=" flex items-center py-0 px-4 outline-none rounded-3xl h-[45px] bg-white border hover:bg-gray-100 whitespace-nowrap"
            >
              All Competitions
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[60px] w-[85%] mx-auto flex border-b items-center">
        <ul className="flex gap-2 sm:gap-6 items-center ">
          <NavLink>
            <li className="uppercase font-medium text-xs sm:text-lg">Home</li>
          </NavLink>
          <NavLink
            to="/CompetitionsLayout/fixtures"
            className={({ isActive }) => `${isActive ? "border-b" : ""} `}
          >
            <li className="uppercase font-medium text-xs sm:text-lg">
              Fixtures
            </li>
          </NavLink>
          <NavLink
            to="/CompetitionsLayout/results"
            className={({ isActive }) => `${isActive ? "border-b" : ""}`}
          >
            <li className="uppercase font-medium text-xs sm:text-lg">
              Results
            </li>
          </NavLink>
          <NavLink
            to="/CompetitionsLayout/standings"
            className={({ isActive }) => `${isActive ? "border-b" : ""}  `}
          >
            <li className="uppercase font-medium text-xs sm:text-lg">Table</li>
          </NavLink>
          <NavLink
            to="/CompetitionsLayout/topplayers"
            className={({ isActive }) => `${isActive ? " border-b" : ""}`}
          >
            <li className="uppercase font-medium whitespace-nowrap text-xs sm:text-lg">
              Top Players
            </li>
          </NavLink>
          <NavLink
            to="/CompetitionsLayout/teams"
            className={({ isActive }) => `${isActive ? "border-b" : ""}  `}
          >
            <li className="uppercase font-medium text-xs sm:text-lg">Teams</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default CompetitionsHeader;
