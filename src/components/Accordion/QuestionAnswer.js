import React from 'react';
import styles from "./styles.module.css";

const QuestionAnswer = (props) => {
    const {question, answer}=props;
  return (
    <div className={styles.QuestionAnswerContainer}>
        <div className={styles.questionBlock}>
            <h5 className={styles.questionBlockHeading}>{question}</h5>
        </div>
        <div className={styles.answerBlock}>
            <p className={styles.answerBlockDesc}>{answer}</p>
        </div>
    </div>
  )
}

export default QuestionAnswer;