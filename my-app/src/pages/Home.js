import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | React Helmet POC</title>
        <meta name="description" content="Home page showcasing React Helmet features" />
      </Helmet>
      <h1>Welcome to React Helmet POC</h1>
      <p>This page dynamically updates metadata using React Helmet.</p>
    </div>
  );
};

export default Home;
