import React from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const { btName, btnStyles, image, imageWrapperStyle, onClick, type } = props;
  const navigate = useNavigate();
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(btnStyles, styles.btnStyles)}
    >
      {btName}
      {type}
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
