import React from "react";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | React Helmet POC</title>
        <meta name="description" content="About React Helmet Proof of Concept" />
      </Helmet>
      <h1>About This Project</h1>
      <p>This project demonstrates React Helmet for dynamic SEO management.</p>
    </div>
  );
};

export default About;
