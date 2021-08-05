import React from "react";
import { Link } from "gatsby";
import * as css from "../styles/layout.module.css";
import Footer from "./footer";
const ListLink = (props) => (
  <li className={css.navItems}>
    <Link to={props.to} className={css.links}>
      {props.children}
    </Link>
  </li>
);

const layout = ({ children }) => {
  return (
    <div className={css.container}>
      <div className={css.menubar}>
        <header>
          <ul className={css.menuList}>
            <ListLink to="/">HOME</ListLink>
            <ListLink to="/about/">ABOUT</ListLink>
            <ListLink to="/projects/">PROJECTS</ListLink>
            <ListLink to="/contact/">CONTACT</ListLink>
          </ul>
        </header>
      </div>
      <div className={css.introLine}>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
