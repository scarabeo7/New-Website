import React from "react";

const footer = () => {
  return (
    <footer>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <a
        href="https://twitter.com/garrovolla?s=09"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-twitter"
        style={{
          background: `white`,
          color: `#55ACEE`,
          margin: `10px`,
          padding: `10px`,
          fontSize: `20px`,
          textDecoration: "none",
        }}
      />
      <a
        href="https://www.linkedin.com/in/chizim-chinuru-66b40818/"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-linkedin"
        style={{
          background: `white`,
          color: `#007bb5`,
          margin: `10px`,
          padding: `10px`,
          fontSize: `20px`,
          textDecoration: "none",
        }}
      />
      <a
        href="https://github.com/scarabeo7"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-github"
        style={{
          background: `black`,
          color: `white`,
          margin: `20px`,
          fontSize: `20px`,
          textDecoration: "none",
        }}
      />
      <a
        href="mailto:garrohat@yahoo.co.uk"
        class="fa fa-envelope"
        aria-hidden="true"
        style={{
          background: `white`,
          color: `purple`,
          margin: `10px`,
          padding: `10px`,
          fontSize: `20px`,
          textDecoration: "none",
        }}
      />
      <div
        style={{ backgroundColor: `black`, height: `30px`, marginBottom: `0` }}
      />
    </footer>
  );
};

export default footer;
