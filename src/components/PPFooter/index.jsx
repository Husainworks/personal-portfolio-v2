import React from "react";
import styles from "./index.module.css";

export const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className={`container`}>
          <div className={`${styles["contact-wrapper"]} d-align`}>
            <p className={`${styles["contact-title"]} text-xl`}>
              Contact Details
            </p>
            <a
              className={`${styles["contact-mail"]} text-xl`}
              href="mailto:husain53zaveri30@gmail.com"
            >
              husain53zaveri30@gmail.com
            </a>
            <a
              className={`${styles["contact-phone"]} text-xl`}
              href="tel:+916359243653"
            >
              +91 63592 43653
            </a>
          </div>
        </div>

        <div className={`${styles["social-container"]} d-align`}>
          <p className={`${styles["copyright"]}`}>© 2025 Husain Zaveri</p>
        </div>
      </footer>
    </>
  );
};
