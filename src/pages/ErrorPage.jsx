import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>No Data Found</h1>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default ErrorPage;
