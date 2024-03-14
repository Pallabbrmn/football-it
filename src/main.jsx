import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout";
import { store } from "/src/store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  HomePage,
  ErrorPage,
  Standings,
  Fixtures,
  CompetitionsHome,
  CompetitionsLayout,
  TopPlayers,
  Teams,
  Results,
  Matches,
  MatchResult,
} from "./pages/pages";
import { Competitions } from "./components/components";
import { getLeagueId } from "./store/features/homeSlice";

// const selectCurrentId = (state) => state.home.id;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/competitions", element: <Competitions /> },
      { path: "/standings", element: <Standings /> },
      { path: "/fixtures", element: <Fixtures /> },
      { path: "/matches", element: <Matches /> },
      {
        path: "/CompetitionsLayout/results/:matchId",
        element: <MatchResult />,
      },
      {
        path: "/CompetitionsLayout/",
        element: <CompetitionsLayout />,
        children: [
          { index: true, element: <CompetitionsHome /> },
          {
            path: "/CompetitionsLayout/standings",
            element: <Standings />,
          },
          {
            path: "/CompetitionsLayout/fixtures",
            element: <Fixtures />,
          },
          {
            path: "/CompetitionsLayout/results",
            element: <Results />,
          },
          {
            path: "/CompetitionsLayout/topplayers",
            element: <TopPlayers />,
          },
          {
            path: "/CompetitionsLayout/teams",
            element: <Teams />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
