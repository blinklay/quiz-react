import { useState } from "react";
import styles from "./Question.module.css";

export default function Question({
  id,
  questionText,
  answerOptions,
  currentQuestion,
  getAnswer,
}) {
  return (
    <div
      className={
        currentQuestion === id
          ? styles["question"]
          : styles[("question", "hide")]
      }
    >
      <div className={styles["question-header"]}>{questionText}</div>
      <div className={styles["question-variants"]}>
        {answerOptions.map((answer) => (
          <div
            onClick={() => getAnswer(answer.isCorrect)}
            key={id + answer.answerText}
            className={styles["question-row"]}
          >
            <span className={styles["question-variant"]}>{answer.letter}</span>
            <p className={styles["question-text"]}>{answer.answerText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
