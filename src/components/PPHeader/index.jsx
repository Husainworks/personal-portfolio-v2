import React, { useState } from "react";
import styles from "./index.module.css";
import { navlinks } from "../../const/constantData";

export const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <header>
        <div className={`${styles["header-wrapper"]} d-align`}>
          <a className={`${styles["header-logo"]} text-2xl`} href="#">
            Husain
          </a>
          <nav>
            <ul
              className={`${styles["nav-link-wrapper"]} d-align ${
                hamburgerOpen ? styles["menu-open"] : ""
              }`}
            >
              {/* <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#about">
                  About
                </a>
              </li>
              <li>
                <a
                  className={`${styles["nav-link"]} text-lg`}
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#footer">
                  Contact
                </a>
              </li> */}
              {navlinks.map((data, index) => {
                return (
                  <li key={index}>
                    <a
                      onClick={() => setHamburgerOpen(false)}
                      className={`${styles["nav-link"]} text-lg`}
                      href={data.href}
                    >
                      {data.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className={`${styles.hamburger}`}
              id="hamburger"
            >
              <div className={styles["hamburger-line"]}></div>
              <div className={styles["hamburger-line"]}></div>
              <div className={styles["hamburger-line"]}></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
