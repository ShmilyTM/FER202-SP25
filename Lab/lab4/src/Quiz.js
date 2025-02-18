import React, { useState } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Dữ liệu câu hỏi
export const quizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Xử lý khi người dùng chọn câu trả lời
  const handleAnswerSelect = (answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [quizData[currentQuestion].question]: answer,
    }));
  };

  // Chuyển sang câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      checkAnswers();
      setQuizCompleted(true);
    }
  };

  // Kiểm tra kết quả
  const checkAnswers = () => {
    let newScore = 0;
    quizData.forEach((item) => {
      if (userAnswers[item.question] === item.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  return (
    <Container className="mt-4">
      {/* Logo */}
      <div className="text-center mb-4">
        <img
          src="Logo_Trường_Đại_học_FPT.svg.png"
          alt="FPT University Logo"
          width="150"
        />
        <h4 className="text-danger fw-bold">Quiz Test
        </h4>
      </div>

      {!quizCompleted ? (
        <Card className="p-4 shadow-lg">
          <Card.Body>
            <h2 className="text-danger fw-bold">
              Question {currentQuestion + 1}
            </h2>
            <h5>{quizData[currentQuestion].question}</h5>

            {quizData[currentQuestion].answers.map((answer, i) => (
              <Form.Check
                key={i}
                type="radio"
                name="quiz"
                label={answer}
                value={answer}
                checked={
                  userAnswers[quizData[currentQuestion].question] === answer
                }
                onChange={() => handleAnswerSelect(answer)}
                className="mb-2"
              />
            ))}

            <div className="text-center mt-3">
              <Button variant="danger" onClick={handleNextQuestion}>
                {currentQuestion < quizData.length - 1 ? "Next" : "Submit"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <div className="text-center mt-5">
          <h1 className="text-danger fw-bold">Quiz Completed!</h1>
          <h3>Your score: {score}</h3>
        </div>
      )}
    </Container>
  );
};

export default Quiz;
