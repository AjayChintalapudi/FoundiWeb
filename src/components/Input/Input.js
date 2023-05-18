import React from 'react';
import classNames from 'classnames';

const Input = ({ type, value, placeholder, onChange, className }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={classNames('input', className)}
    />
  );
};

export default Input;
