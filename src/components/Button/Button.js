import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const {
    btName,
    btnStyles,
    image,
    imageWrapperStyle,
    onClick,
    type,
    onSuccess,
    onError,
  } = props;
  const handleClick = () => {
    // Perform necessary actions before calling onSuccess or onError
    // ...

    // Simulate success or error for demonstration purposes
    const isSuccess = true;

    if (isSuccess) {
      onSuccess();
    } else {
      onError();
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(btnStyles, styles.btnStyles)}
    >
      {btName}
      {image && (
        <div
          className={classNames(styles.imageWrapperStyle, imageWrapperStyle)}
        >
          <img src={image} className={styles.imgStyles} alt="" />
        </div>
      )}
    </button>
  );
};

export default Button;
