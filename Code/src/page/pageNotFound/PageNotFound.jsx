import React, { useEffect } from "react";
import "./pageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "404 Page • Okv Music";
  }, []);

  return (
    <div className="page-not-found-container">
      <div className="page-not-found-wrapper">
        <div className="page-not-found-wrapper-text-wrapper">
          <h1>404</h1>
          <p>Opps... This page could not be found!</p>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
