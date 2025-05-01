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
              White Orange Software
            </h6>
            <p className={`${styles["experience-designation"]}`}>
              Frontend Developer Intern | Dec 2024 - Present
            </p>
            <p className={`${styles["experience-desc"]}`}>
              At White Orange Software, I work as a Frontend Developer,
              contributing to the design and development of responsive web
              interfaces for various client projects.
            </p>
            <p className={`${styles["experience-desc"]}`}>
              My work involves building interfaces with <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
              <strong>React.js</strong>, creating responsive email templates
              using <strong>MJML</strong>, and developing{" "}
              <strong>Webflow</strong> websites. I’ve also gained experience in
              client-focused design and team collaboration.
            </p>
            <p className={`${styles["experience-desc"]}`}>
              I’ve completed multiple live projects. Additionally, I’ve designed
              custom email templates and built fully functional websites in
              Webflow based on specific client requirements.
            </p>
          </div>

          <div className={`${styles["experience-wrapper"]}`}>
            <h6 className={`${styles["experience-title"]} text-lg`}>
              Zidio Development
            </h6>
            <p className={`${styles["experience-designation"]}`}>
              FullStack Developer Intern | July 2024 - August 2024
            </p>
            <p className={`${styles["experience-desc"]}`}>
              During my internship at Zidio Development, I worked as a Full
              Stack Developer, primarily using the <strong>MERN stack</strong>.
              I contributed to the full development lifecycle of web
              applications, gaining experience in both frontend and backend
              tasks.
            </p>
            <p className={`${styles["experience-desc"]}`}>
              This role enhanced my skills in <strong>RESTful API</strong>{" "}
              development, <strong>MongoDB</strong> database management,{" "}
              <strong>user authentication</strong>, and building{" "}
              <strong>responsive user interfaces</strong>. I also improved my
              ability to collaborate within a development team and deliver
              scalable solutions.
            </p>
            <p className={`${styles["experience-desc"]}`}>
              I developed a Car Rental Web Application where users could browse,
              rent, and book vehicles. Vehicle owners had access to a dashboard
              to view booking dates, renter details, and manage availability
              efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
