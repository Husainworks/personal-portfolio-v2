import React from "react";
import styles from "./index.module.css";
import { PPbutton } from "../../components/PPButton";

export const Misc = () => {
  return (
    <>
      <section className={`${styles["misc-section"]}`}>
        {/* Education Section */}
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Education</h3>
            <div className={`divider`}></div>
          </div>

          <div className={`${styles["education-wrapper"]}`}>
            <div className={`${styles["education-title"]} text-lg`}>
              12<sup>th</sup> Standard
            </div>
            <div className={`${styles["education-desc"]}`}>
              Shardayatan English Medium School <br />
              Graduated: May 2021
            </div>
          </div>
          <div className={`${styles["education-wrapper"]}`}>
            <div className={`${styles["education-title"]} text-lg`}>
              Bachelor of Engineering in Computer Science
            </div>
            <div className={`${styles["education-desc"]}`}>
              C.K. Pithawala College Of Engineering & Technology <br />
              Graduated: April 2025
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Skills</h3>
            <div className={`divider`}></div>
          </div>

          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Languages:</strong> C, HTML, CSS, JavaScript, Python
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Libraries/Frameworks:</strong> React.js, Node.js, MondoDB,
            TailwindCSS
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Version Control:</strong> Git, Gitlab, Github
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>No Code:</strong> Webflow, Framer
          </p>
        </div>

        <div className={`section-wrapper container`}>
          <PPbutton />
        </div>
      </section>
    </>
  );
};
