import React from 'react';
import styles from './styles.module.css';

const QuestionAnswer = (props) => {
  const { question, answer, upArrow, downArrow, collapse,index, onClick } = props;
  return (
    <div className={styles.questionAnswerContainer}>
      <div className={styles.questionBlock} onClick={()=>onClick()}>
        <h5 className={styles.questionBlockHeading}>{question}</h5>
        <img alt ="" src={collapse === index ? upArrow : downArrow} className={styles.upArrow}/>
      </div>
      <div className={collapse === index ?  styles.answerBlock : styles.answerCollapseBlock}>
        <p className={styles.answerBlockDesc}>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionAnswer;
