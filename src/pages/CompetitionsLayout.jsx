import React from "react";
import { Outlet, Route, Router } from "react-router-dom";
import CompetitionsHeader from "../components/CompetitionsHeader";

const CompetitionsLayout = () => {
  return (
    <div className="min-h-[70vh]">
      <CompetitionsHeader />
      <Outlet />
    </div>
  );
};

export default CompetitionsLayout;
