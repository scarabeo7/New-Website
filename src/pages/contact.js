import React from "react";
import Layout from "../components/layout";

const contact = () => {
  return (
    <div>
      <Layout>
        <h2 style={{ color: `rgb(98, 0, 255)` }}>
          Feel free to get in touch, my E-mail address is just below
        </h2>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <p style={{ alignSelf: `center` }}>
          <a
            href="mailto:garrohat@yahoo.co.uk"
            target="_blank"
            rel="noopener noreferrer"
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
          >
            garrohat@yahoo.co.uk
          </a>
        </p>
      </Layout>
    </div>
  );
};

export default contact;
