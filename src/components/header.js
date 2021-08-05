import React from "react";
import { Helmet } from "react-helmet";
import favicon32 from "../images/favicon.ico";

const header = () => {
  return (
    <Helmet>
      <title>Chizim - Cloud DevOps Engineer</title>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${favicon32}`}
      ></link>
    </Helmet>
  );
};

export default header;
