import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

const Button = (props) => {
  const { btName, btnStyles, image, imageWrapperStyle } = props;
  console.log(btnStyles)
  return (
    <button className={[btnStyles,styles.btnStyles].join(" ")}> 
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
