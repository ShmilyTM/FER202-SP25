import React from "react";
import styles from "./Question.module.css";

const Question = ({ question, options, selectedOption, onSelect, onNext }) => {
  return (
    <div className={styles.questionContainer}>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={`${styles.option} ${
              selectedOption === option ? styles.selected : ""
            }`}
            onClick={() => onSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className={styles.nextButton} onClick={onNext} disabled={!selectedOption}>
        Tiếp tục
      </button>
    </div>
  );
};

export default Question;
