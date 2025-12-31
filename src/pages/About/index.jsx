import React, { useRef } from "react";
import styles from "./index.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
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
    <section id="about">
      <div className="section-wrapper container">
        <div className="title-wrapper">
          <h3 className="section-title text-xl">about</h3>
          <div className="divider"></div>
        </div>

        <p
          ref={(el) => (paraRefs.current[0] = el)}
          className={styles["about-me"]}
        >
          I’m a Full Stack Developer currently working as a Frontend Developer
          at White Orange Software, where I’ve contributed to several live
          projects, gaining practical experience in building responsive and
          production ready web applications. I’m well versed in several modern
          frontend libraries, which help me create efficient and dynamic user
          interfaces.
        </p>

        <p
          ref={(el) => (paraRefs.current[1] = el)}
          className={styles["about-me"]}
        >
          Outside of work, I actively build multiple personal projects to
          sharpen my skills, most recently I developed a full-fledged Expense
          Tracker App using the MERN stack. I'm passionate about turning ideas
          into functional, user-friendly digital solutions and continuously
          learning to stay up-to-date with the latest in web development.
        </p>

        <p
          ref={(el) => (paraRefs.current[2] = el)}
          className={styles["about-me"]}
        >
          Right now, my current focus is learning how AI can help generate
          applications such as a novel writing website that can produce several
          pages of content from a single prompt, or a blog app that can generate
          an extensive blog based on a chosen writing style.
        </p>
      </div>
    </section>
  );
};
