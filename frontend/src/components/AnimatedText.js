"use client";

import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  staggerChildren = 0.03,
  as: Component = "h1",
  ...props
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  };

  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default AnimatedText;
