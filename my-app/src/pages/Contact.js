import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | React Helmet POC</title>
        <meta name="description" content="Get in touch with us" />
      </Helmet>
      <h1>Contact Us</h1>
      <p>Email: team@opencourse.live</p>
    </div>
  );
};

export default Contact;
