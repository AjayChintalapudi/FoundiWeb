import React from 'react';
import styles from './styles.module.css';

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
