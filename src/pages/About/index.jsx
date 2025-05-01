import React from "react";
import styles from "./index.module.css";

export const About = () => {
  return (
    <>
      <section id="about">
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>about</h3>
            <div className={`divider`}></div>
          </div>
          <p className={`${styles["about-me"]}`}>
            I’m a Full Stack Developer currently working as a Frontend Developer
            at White Orange Software, where I’ve contributed to several live
            projects, gaining practical experience in building responsive and
            production-ready web applications. I’m well-versed in several modern
            frontend libraries, which help me create efficient and dynamic user
            interfaces.
          </p>
          <p className={`${styles["about-me"]}`}>
            Outside of work, I actively build personal projects to sharpen my
            skills—most recently, I developed a full-fledged Book Store App
            using the MERN stack. I'm passionate about turning ideas into
            functional, user-friendly digital solutions and continuously
            learning to stay up-to-date with the latest in web development.
          </p>
        </div>
      </section>
    </>
  );
};
