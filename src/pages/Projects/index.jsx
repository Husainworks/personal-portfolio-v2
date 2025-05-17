import React, { useRef } from "react";
import styles from "./index.module.css";
import { projects } from "../../const/constantData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const paraRefs = useRef([]);

  useGSAP(() => {
    paraRefs.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });
  }, []);
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
                <div
                  ref={(el) => (paraRefs.current[index] = el)}
                  key={index}
                  className={`${styles["project-wrapper"]}`}
                >
                  {data.img ? (
                    <img
                      className={`${styles["project-image"]} fluid-img`}
                      src={data.img}
                      alt="project-img"
                    />
                  ) : (
                    <></>
                  )}
                  <div className={`${styles["project-title-wrapper"]}`}>
                    <Link target="_blank" to={`${data.link}`}>
                      <h6 className={`${styles["project-title"]} text-xl`}>
                        {data.title}
                      </h6>
                    </Link>
                  </div>
                  <p className={`${styles["project-desc"]}`}>{data.desc}</p>
                  <p className={`${styles["project-desc2"]}`}>{data.desc2}</p>
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
