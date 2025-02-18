import React from "react";
import styles from "./Result.module.css";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className={styles.resultContainer}>
      <h2>Kết quả</h2>
      <p className={styles.score}>
        Bạn đã trả lời đúng {score} / {totalQuestions} câu hỏi.
      </p>
      <button className={styles.retryButton} onClick={() => window.location.reload()}>
        Chơi lại
      </button>
    </div>
  );
};

export default Result;
