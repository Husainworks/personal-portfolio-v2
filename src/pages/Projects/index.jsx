import React from "react";
import styles from "./index.module.css";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Projects</h3>
            <div className={`divider`}></div>
          </div>
          <p>
            Think and Put screenshot and desc about the projects.. two mern
            stack projects of my own and 2 live projects on which i have worked
            on
          </p>
        </div>
      </section>
    </>
  );
};
