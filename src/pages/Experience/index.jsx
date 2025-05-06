import React, { useRef } from "react";
import styles from "./index.module.css";
import { experience } from "../../const/constantData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const highlightKeywords = (text, keywords) => {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
  return parts.map((part, index) =>
    keywords.some((kw) => kw.toLowerCase() === part.toLowerCase()) ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    )
  );
};

export const Experience = () => {
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

  const keywords = [
    "HTML",
    "CSS",
    "JavaScript",
    "react.js",
    "MJML",
    "Webflow",
    "MERN stack",
    "MongoDB",
    "Restful API",
    "user authentication",
    "responsive user interfaces",
  ];

  return (
    <>
      <section id="experience">
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Experience</h3>
            <div className={`divider`}></div>
          </div>

          {experience.map((data, index) => {
            return (
              <div
                ref={(el) => (paraRefs.current[index] = el)}
                key={index}
                className={`${styles["experience-wrapper"]}`}
              >
                <h6 className={`${styles["experience-title"]} text-lg`}>
                  {data.title}
                </h6>
                <p className={`${styles["experience-designation"]}`}>
                  {data.designation} <span>{data.duration}</span>
                </p>
                <p className={`${styles["experience-desc"]}`}>
                  {highlightKeywords(data.desc1, keywords)}
                </p>
                <p className={`${styles["experience-desc"]}`}>
                  {highlightKeywords(data.desc2, keywords)}
                </p>
                <p className={`${styles["experience-desc"]}`}>{data.desc3}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
