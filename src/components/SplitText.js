import React from "react";
import "./SplitText.css";

const SplitText = ({ children }) => {
  const words = children.split(" ");

  return (
    <h1 className="text-4xl font-bold title-grow split-text">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="split-word-wrapper">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="split-char"
              style={{
                animationDelay: `${wordIndex * 0.2 + charIndex * 0.05}s`,
              }}
            >
              {char}
            </span>
          ))}
          {
            wordIndex < words.length - 1 &&
              "\u00A0" /* Adiciona espaço entre as palavras */
          }
        </span>
      ))}
    </h1>
  );
};

export default SplitText;
