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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur vero laudantium commodi laborum, iure esse! Natus velit
            optio sed laborum officia aut eos iure tempora dolorum, earum
            aliquid beatae. Et! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Eveniet aperiam ipsam unde eos ipsum voluptatem
            quae voluptas nemo iste, possimus laboriosam dolor! Quae obcaecati,
            doloremque pariatur in natus odio officiis!
          </p>
        </div>
      </section>
    </>
  );
};
