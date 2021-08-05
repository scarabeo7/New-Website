import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import * as css from "../styles/layout.module.css";
import profile from "../images/image.jpeg";

//import Avatar from 'avataaars'
/* eslint-disable */

const index = () => {
  return (
    <div className={css.pageContainer}>
      <Header />
      <Layout>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
        />
        <img src={profile} alt="my profile picture" className={css.image} />
        <div>
          <p className={css.intro}>Hi there, this is Chizim </p>
          <p className={css.industrySkills}>
            Self studying to be a SysOps/DevOps Engineer
          </p>
        </div>
        <div className={css.skillsContainer}>
          <i class="devicon-git-plain-wordmark colored" />
          <i class="devicon-github-original-wordmark colored" />
          <i class="devicon-nodejs-plain-wordmark colored" />
          <i class="devicon-amazonwebservices-plain-wordmark colored" />
          <i class="devicon-postgresql-plain colored" />
          <i class="devicon-react-original-wordmark colored" />
          <i class="devicon-javascript-plain" />
          <i class="devicon-html5-plain-wordmark colored" />
          <i class="devicon-css3-plain-wordmark colored" />
        </div>
      </Layout>
    </div>
  );
};

export default index;
