import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import * as css from "../styles/layout.module.css";

const about = () => {
  return (
    <div>
      <Header />
      <Layout>
        <h2 style={{ color: `rgb(98, 0, 255)` }}>About Me</h2>
        <p id={css.aboutMe}>
          I am from an Electrical and Electronics engineering background however
          I am now looking to develop a new career in cloud
          infrastructure/computing for which I am self-teaching. It has been a
          rewarding journey so far. I am very passionate about cloud computing
          and have gained basic understanding of CI/CD tools like Git/GitHub,
          CircleCI, Docker. I am still learning and developing my knowledge on a
          number of AWS services such as IAM, EC2, Cloud Formation, S3, Auto
          scaling, ELB and also advancing my knowledge on C programming
          language, HTML, CSS, JavaScript, Node Package Manager (NPM), Linux OS,
          bash/shell scripting on daily basis.
          <br />
          <br />I live in Birmingham with my wife and two daughters, and life
          wouldn't be the same without them
        </p>
      </Layout>
    </div>
  );
};

export default about;
