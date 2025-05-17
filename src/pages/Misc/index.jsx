import React, { useRef } from "react";
import styles from "./index.module.css";
import { PPbutton } from "../../components/PPButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Misc = () => {
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
      <section
        ref={(el) => (paraRefs.current[0] = el)}
        className={`${styles["misc-section"]}`}
      >
        {/* Skills Section */}
        <div
          ref={(el) => (paraRefs.current[1] = el)}
          className={`section-wrapper container`}
        >
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Skills</h3>
            <div className={`divider`}></div>
          </div>

          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Languages:</strong> HTML, CSS, JavaScript, C, Java
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Libraries/Frameworks:</strong> React.js, Next.js,
            TailwindCSS, Node.js, Express.js, MJML, ANT Design, Bootstrap
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Database:</strong> MongoDB
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>Version Control:</strong> Git, Gitlab, Github
          </p>
          <p className={`${styles["skills-wrapper"]}`}>
            <strong>No Code:</strong> Webflow
          </p>
        </div>

        {/* Education Section */}
        <div className={`section-wrapper container`}>
          <div className={`title-wrapper`}>
            <h3 className={`section-title text-xl`}>Education</h3>
            <div className={`divider`}></div>
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

        <div className={`section-wrapper container`}>
          <PPbutton />
        </div>
      </section>
    </>
  );
};
