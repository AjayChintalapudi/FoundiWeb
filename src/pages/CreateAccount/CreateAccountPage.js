import React, { useState, useEffect } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import {
  passwordhideicon,
  closeicon,
  googleicon,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const CreateAccountPage = () => {
  /***********STRING VALUES************/
  const { createAccountPageStrings } = englishStrings;
  /***********ONCHANGE EVENT FOR FORM************/
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setName(value);
  };
  /***********AFTER  CLOSING THE ICON REDIRECT TO HOME PAGE************/
  const navigate = useNavigate();
  const [isPageClosed, setIsPageClosed] = useState(false);
  useEffect(() => {
    if (isPageClosed) {
      navigate('/');
    }
  }, [isPageClosed, navigate]);

  const handleClosePage = () => {
    setIsPageClosed(true);
  };
  /***********AFTER  CLOSING THE ICON REDIRECT TO HOME PAGE************/
  const createAccountPageCloseBlock = () => {
    return (
      <div className={styles.createAccountPageCloseBlock}>
        <p className={styles.createAccountPageBackText}>
          {createAccountPageStrings.back}
        </p>
        <img
          src={closeicon}
          alt={createAccountPageStrings.closeIconAlt}
          onClick={handleClosePage}
        />
      </div>
    );
  };

  const createAccountPageTitleInfo = () => {
    return (
      <div className={styles.createAccountPageTitleInfo}>
        <h3 className={styles.createAccountPageTitle}>
          {createAccountPageStrings.createAccountTitle}
        </h3>
        <span className={styles.createAccountPageAccountDesc}>
          {createAccountPageStrings.createAccountAccountDesc}
        </span>
        <span className={styles.createAccountPageSignUpText}>
          {createAccountPageStrings.createAccountLogin}
        </span>
      </div>
    );
  };

  const createAccountPageFormFields = () => {
    return (
      <div className={styles.createAccountPageFormFields}>
        <div className={styles.emailContainer}>
          <span className={StyleSheet.emailHeading}>
            {createAccountPageStrings.fullNameHeading}
          </span>
          <div>
            <Input
              type={createAccountPageStrings.inputTypetext}
              value={name}
              placeholder={createAccountPageStrings.fullNamePlaceHolderText}
              onChange={handleInputChange}
              className={styles.createAccountPageInputFields}
            />
          </div>
        </div>
        <div className={styles.passWordContainer}>
          <span className={styles.passWordHeading}>
            {createAccountPageStrings.lastNameHeading}
          </span>
          <Input
            type={createAccountPageStrings.lastNameText}
            value={name}
            placeholder={createAccountPageStrings.lastNamePlaceHolderText}
            onChange={handleInputChange}
            className={styles.createAccountPageInputFields}
            image={passwordhideicon}
          />
          <span className={styles.forgotPassWordText}>
            {createAccountPageStrings.forgotPassWordText}
          </span>
        </div>
      </div>
    );
  };

  const createAccountPageButton = () => {
    return (
      <div className={styles.createAccountPageButtons}>
        <Button
          btName={createAccountPageStrings.createAccountLogin}
          btnStyles={styles.createAccountPageButtonStyles}
        />
        <Button
          btName={createAccountPageStrings.continueGoogleText}
          btnStyles={styles.continueGoogleButton}
          image={googleicon}
        />
      </div>
    );
  };

  return (
    <div className={styles.createAccountPageContainer}>
      <div className={styles.createAccountPageInsideContainer}>
        {createAccountPageCloseBlock()}
        {createAccountPageTitleInfo()}
        {createAccountPageFormFields()}
        {createAccountPageButton()}
      </div>
    </div>
  );
};

export default CreateAccountPage;
