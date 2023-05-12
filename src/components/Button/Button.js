import React from 'react';
import styles from './styles.module.css';

const Button = (props) => {
  return (
    <button className={[styles.btnStyles, props.btnStyles].join(' ')}>
      {props.btName}
      {props.image && (
        <div
          className={[styles.imageWrapperStyle, props.imageWrapperStyle].join(
            ' '
          )}
        >
          <img src={props.image} className={styles.imgStyles} />
        </div>
      )}
    </button>
  );
};

export default Button;
