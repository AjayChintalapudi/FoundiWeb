import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

const Input = ({ type, value, placeholder, onChange, className, image }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={classNames(styles.input, className)}
      />
      {image && (
        <div className={styles.inputIcon}>
          <img src={image} className={styles.imageWidth} />
        </div>
      )}
    </div>
  );
};

export default Input;
