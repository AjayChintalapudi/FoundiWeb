import React, { useState } from 'react';
import classNames from 'classnames';
import { passwordhideicon, passwordopenicon } from 'resources/Images/Images';
import styles from './styles.module.css';

const Input = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  className,
  image,
  error,
  errorMessage,
  customeInputStyle
}) => {
  // Toggle Password
  const [showPassWord, setShowPassWord] = useState(false);

  const togglePassWord = () => {
    setShowPassWord(!showPassWord);
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type={showPassWord ? 'text' : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={classNames(styles.input, className, error && errorMessage,customeInputStyle)}
      />
      {image && (
        <div className={styles.inputIcon} onClick={togglePassWord}>
          <img src={showPassWord ? passwordopenicon : passwordhideicon} className={styles.imageWidth} />
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
