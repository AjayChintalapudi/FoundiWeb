import React from 'react';
import styles from './styles.module.css';

const Button = (props) => {
  return (
    <button className={props.btnStyles}>
      {props.btName}
      {props.image && (
        <div className={styles.imageWrapperStyle}>
          <img src={props.image} className={styles.imgStyles} />
        </div>
      )}
    </button>
  );
};

export default Button;
