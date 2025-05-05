import React from "react";
import styles from "./index.module.css";
import { projects } from "../../const/constantData";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Projects</h3>
            <div className={`divider`}></div>
          </div>
          <div className={`${styles["main-projects-wrapper"]}`}>
            {projects.map((data, index) => {
              return (
                <div key={index} className={`${styles["project-wrapper"]}`}>
                  {data.img ? (
                    <img
                      className={`${styles["project-image"]} fluid-img`}
                      src={data.img}
                      alt="project-img"
                    />
                  ) : (
                    <></>
                  )}
                  <h6 className={`${styles["project-title"]} text-xl`}>
                    {data.title}
                  </h6>
                  <p className={`${styles["project-desc"]}`}>{data.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// Use swipers to showcase more photos of the project
