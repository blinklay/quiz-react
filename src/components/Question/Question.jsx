import styles from "./Question.module.css";

export default function Question() {
  return (
    <div className={styles["question"]}>
      <div className={styles["question-header"]}>1) something quest...</div>
      <div className={styles["question-variants"]}>
        <div className={styles["question-row"]}>
          <span className={styles["question-variant"]}>a</span>
          <p className={styles["question-text"]}>Something variant answer...</p>
        </div>
        <div className={styles["question-row"]}>
          <span className={styles["question-variant"]}>b</span>
          <p className={styles["question-text"]}>Something variant answer...</p>
        </div>
        <div className={styles["question-row"]}>
          <span className={styles["question-variant"]}>c</span>
          <p className={styles["question-text"]}>Something variant answer...</p>
        </div>
      </div>
    </div>
  );
}
