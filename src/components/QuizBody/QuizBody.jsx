import Question from "../Question/Question";
import styles from "./QuizBody.module.css";
export default function QuizBody() {
  return (
    <div className={styles["quiz-body"]}>
      <h1 className={styles["quiz-header"]}>Quiz</h1>

      <div className={styles["quiz-questions"]}>
        <Question />
        <Question />
        <Question />
      </div>
    </div>
  );
}
