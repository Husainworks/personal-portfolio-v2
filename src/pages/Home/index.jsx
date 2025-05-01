import React from "react";
import styles from "./index.module.css";
import { profilpicture } from "../../const/imageData";
import { PPFadeText } from "../../components/PPFadeText";

export const Home = () => {
  return (
    <>
      <section id="home" className={`${styles["home-section"]}`}>
        <div className={`container ${styles["home-section-wrapper"]} d-align`}>
          <h1 className={`${styles["home-name"]} text-3xl`}>
            <PPFadeText text="Husain Zaveri" />
          </h1>

          <img
            className={`${styles["profilepic"]} fluid-img`}
            src={profilpicture}
            alt="Profile Picture"
          />

          <h3 className="text-2xl">
            <PPFadeText text="FullStack Developer" />
          </h3>
        </div>
        <div className={`${styles["social-wrapper"]} d-align`}>
          <a
            target="_blank"
            href="https://github.com/Husainworks"
            className={`${styles["social-link"]} text-sm`}
          >
            github
          </a>
          <a
            target="_blank"
            href="www.linkedin.com/in/husain-zaveri-84059b216"
            className={`${styles["social-link"]} text-sm`}
          >
            linkedin
          </a>
        </div>
      </section>
    </>
  );
};
