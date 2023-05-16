import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const { btName, btnStyles, imageWrapperStyle, image } = props;
  return (
    <button className={classNames(styles.btnStyles, btnStyles)}>
      {btName}
      {image && (
        <div
          className={classNames(styles.imageWrapperStyle, imageWrapperStyle)}
        >
          <img src={image} className={styles.imgStyles} />
        </div>
      )}
    </button>
  );
};

export default Button;
