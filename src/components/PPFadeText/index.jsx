import { animate, stagger } from "animejs";
import React, { useEffect, useRef } from "react";

export const PPFadeText = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textWrapper = textRef.current;
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    animate(".ml3 .letter", {
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 500,
      delay: stagger(75),
    });
  }, []);

  return (
    <>
      <span className="ml3" ref={textRef}>
        {text}
      </span>
    </>
  );
};
