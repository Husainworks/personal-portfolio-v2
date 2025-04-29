import React from "react";
import styles from "./index.module.css";

export const Experience = () => {
  return (
    <>
      <section id="experience">
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Experience</h3>
            <div className={`divider`}></div>
          </div>

          <div className={`${styles["experience-wrapper"]}`}>
            <h6 className={`${styles["experience-title"]} text-lg`}>
              Zidio Development
            </h6>
            <p className={`${styles["experience-designation"]}`}>
              FullStack Developer Intern | July 2024 - August 2024
            </p>
            <p className={`${styles["experience-desc"]}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              animi unde vel suscipit, perferendis fugiat cupiditate. Iusto fuga
              laborum neque totam libero ad ab, ducimus dignissimos nulla,
              exercitationem earum animi.
            </p>
          </div>
          <div className={`${styles["experience-wrapper"]}`}>
            <h6 className={`${styles["experience-title"]} text-lg`}>
              White Orange Software
            </h6>
            <p className={`${styles["experience-designation"]}`}>
              Frontend Developer Intern | Dec 2024 - Present
            </p>
            <p className={`${styles["experience-desc"]}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              animi unde vel suscipit, perferendis fugiat cupiditate. Iusto fuga
              laborum neque totam libero ad ab, ducimus dignissimos nulla,
              exercitationem earum animi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
