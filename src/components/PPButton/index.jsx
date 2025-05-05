import React from "react";
import styles from "./index.module.css";

export const PPbutton = () => {
  return (
    <>
      <a className={`${styles["resume-download-btn"]}`} href="../../assets/Husain-Zaveri-FullStack.pdf" download="resume.pdf">
        Download PDF Resume
      </a>
    </>
  );
};
