import React from "react";
import styles from "./index.module.css";

export const Header = () => {
  return (
    <>
      <header>
        <div className={`${styles["header-wrapper"]} d-align`}>
          <a className={`${styles["header-logo"]} text-2xl`} href="#">
            Husain.
          </a>

          <nav>
            <ul className={`${styles["nav-link-wrapper"]} d-align`}>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  About
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Experience
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Skills
                </a>
              </li>
              <li>
                <a className={`${styles["nav-link"]} text-lg`} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
