import React, { useRef } from "react";
import styles from "./index.module.css";
import { projects } from "../../const/constantData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { PPSwiper } from "../../components/PPSwiper";
import {
  expenseTrackerExpense,
  expenseTrackerHome1,
  expenseTrackerHome2,
  expenseTrackerHome3,
  expenseTrackerIncome,
  expenseTrackerLogin,
  expenseTrackerProfile,
  expenseTrackerSignup,
  bookStoreCart,
  bookStoreHome1,
  bookStoreHome2,
  bookStoreLogin,
  bookStorePaymentDetails,
  bookStoreSignup,
} from "../../const/imageData";

gsap.registerPlugin(ScrollTrigger);

const projectImages = {
  "Expense Tracker": [
    { src: expenseTrackerLogin, alt: "Expense Tracker Login" },
    { src: expenseTrackerSignup, alt: "Expense Tracker Signup" },
    { src: expenseTrackerHome1, alt: "Expense Tracker Home1" },
    { src: expenseTrackerHome2, alt: "Expense Tracker Home2" },
    { src: expenseTrackerHome3, alt: "Expense Tracker Home3" },
    { src: expenseTrackerIncome, alt: "Expense Tracker Income" },
    { src: expenseTrackerExpense, alt: "Expense Tracker Expense" },
    { src: expenseTrackerProfile, alt: "Expense Tracker Profile" },
  ],
  "Book Store App": [
    { src: bookStoreLogin, alt: "Book Store Login" },
    { src: bookStoreSignup, alt: "Book Store Signup" },
    { src: bookStoreHome1, alt: "Book Store Home1" },
    { src: bookStoreHome2, alt: "Book Store Home2" },
    { src: bookStoreCart, alt: "Book Store Cart" },
    { src: bookStorePaymentDetails, alt: "Book Store Payment" },
  ],
};

export const Projects = () => {
  const paraRefs = useRef([]);
  const swiperRefs = useRef([]);

  useGSAP(() => {
    paraRefs.current.forEach((el, index) => {
      if (el) {
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
      }
    });

    swiperRefs.current.forEach((el) => {
      if (el) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });
  }, []);

  return (
    <section id="projects">
      <div className={`section-wrapper container`}>
        <div className={`title-wrapper`}>
          <h3 className={`section-title text-xl`}>Projects</h3>
          <div className={`divider`}></div>
        </div>

        <div className={styles["main-projects-wrapper"]}>
          {projects.map((data, index) => (
            <div key={index}>
              {projectImages[data.title] && (
                <div ref={(el) => (swiperRefs.current[index] = el)}>
                  <PPSwiper images={projectImages[data.title]} />
                </div>
              )}

              <div
                ref={(el) => (paraRefs.current[index] = el)}
                className={styles["project-wrapper"]}
              >
                <div className={styles["project-title-wrapper"]}>
                  <Link target="_blank" to={data.link}>
                    <h6 className={`${styles["project-title"]} text-xl`}>
                      {data.title}
                    </h6>
                  </Link>
                </div>
                <p className={styles["project-desc"]}>{data.desc}</p>
                {data.desc2 && (
                  <p className={styles["project-desc2"]}>{data.desc2}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
