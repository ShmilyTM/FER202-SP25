import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import styles from "./QuizApp.module.css";

const quizData = [
  {
    question: "ReactJS là gì?",
    options: ["Thư viện JavaScript", "Ngôn ngữ lập trình", "Framework"],
    answer: "Thư viện JavaScript"
  },
  {
    question: "useState trong React dùng để làm gì?",
    options: ["Quản lý trạng thái", "Gọi API", "Tạo component"],
    answer: "Quản lý trạng thái"
  }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz App</h1>
      <div className={styles.card}>
        {!showResult ? (
          <Question
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            selectedOption={selectedOption}
            onSelect={handleAnswerSelect}
            onNext={handleNextQuestion}
          />
        ) : (
          <Result score={score} totalQuestions={quizData.length} />
        )}
      </div>
    </div>
  );
};

export default QuizApp;
