import Question from "../Question/Question";
import styles from "./QuizBody.module.css";
import picture from "../../assets/brain.png";
export default function QuizBody({
  questions,
  currentQuestion,
  getAnswer,
  isEnd,
  countSuccess,
  resetGame,
}) {
  return (
    <div className={styles["quiz-body"]}>
      <h1 className={styles["quiz-header"]}>Quiz</h1>
      {isEnd ? (
        <div className={styles["quiz-end"]}>
          <img src={picture} alt="brain picture " />
          <p>Это конец квиза! Правильных ответов: {countSuccess}</p>
          <button onClick={resetGame} className={styles["quiz-reset"]}>
            Заново
          </button>
        </div>
      ) : (
        <div className={styles["quiz-questions"]}>
          {questions.map((question) => (
            <Question
              getAnswer={getAnswer}
              currentQuestion={currentQuestion}
              key={question.id}
              {...question}
            />
          ))}
        </div>
      )}
      <div className={styles["quiz-trackline"]}>
        <div
          style={{
            width: ((currentQuestion - 1) / questions.length) * 100 + "%",
          }}
        ></div>
      </div>
    </div>
  );
}
