import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    leagues: {},
    id: "152",
    name: "Premier League",
    logo: "https://seeklogo.com/images/P/premier-league-new-logo-D22A0CE87E-seeklogo.com.png",
    fixtures: {},
    teams: {},
    date: "",
  },
  reducers: {
    getLeagues: (state, action) => {
      state.leagues = action.payload;
    },
    getLeagueId: (state, action) => {
      state.id = action.payload;
    },
    getLeagueName: (state, action) => {
      state.name = action.payload;
    },
    getFixtures: (state, action) => {
      state.fixtures = action.payload;
    },
    getTeams: (state, action) => {
      state.teams = action.payload;
    },
    getDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {
  getLeagues,
  getLeagueName,
  getLeagueId,
  getFixtures,
  getTeams,
  getDate,
} = homeSlice.actions;

export default homeSlice.reducer;
