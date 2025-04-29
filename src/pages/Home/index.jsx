import React from "react";
import styles from "./index.module.css";
import { profilpicture } from "../../const/imageData";

export const Home = () => {
  return (
    <>
      <section id="home" className={`${styles["home-section"]}`}>
        <div className={`container ${styles["home-section-wrapper"]} d-align`}>
          <h1 className={`${styles["home-name"]} text-3xl`}>Husain Zaveri</h1>

          <img
            className={`${styles["profilpic"]} fluid-img`}
            src={profilpicture}
            alt="Profile Picture"
          />

          <h3 className={`${styles["designation"]} text-2xl`}>
            Frontend Developer
          </h3>
        </div>
      </section>
    </>
  );
};
