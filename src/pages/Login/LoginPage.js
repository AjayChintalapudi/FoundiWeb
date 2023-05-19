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

const LoginPage = () => {
  /*****LOGIN PAGE STRINGS*****/
  const { loginPageStrings } = englishStrings;

  /*****ONCHANGE EVENT FOR FORM*****/
  const [name, setName] = useState('');
  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setName(value);
  };

  /*****AFTER CLOSING THE ICON REDIRECT TO HOME PAGE*****/
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
  /*****AFTER CLOSING THE ICON REDIRECT TO HOME PAGE*****/

  const loginPageCloseBlock = () => {
    return (
      <div className={styles.loginPageCloseBlock}>
        <p className={styles.loginPageBackText}>{loginPageStrings.back}</p>
        <img
          src={closeicon}
          alt={loginPageStrings.closeIconAlt}
          onClick={handleClosePage}
        />
      </div>
    );
  };

  const loginPageTitleInfo = () => {
    return (
      <div className={styles.loginPageTitleInfo}>
        <h3 className={styles.loginPageTitle}>
          {loginPageStrings.loginPageTitle}
        </h3>
        <span className={styles.loginPageAccountDesc}>
          {loginPageStrings.loginPageAccountDesc}
        </span>
        <span className={styles.loginPageSignUpText}>
          {loginPageStrings.loginPageSignUpText}
        </span>
      </div>
    );
  };

  const loginPageFormFields = () => {
    return (
      <div className={styles.loginPageFormFields}>
        <div className={styles.emailContainer}>
          <span className={StyleSheet.emailHeading}>
            {loginPageStrings.emailHeading}
          </span>
          <div>
            <Input
              type={loginPageStrings.inputTypeEmail}
              value={name}
              placeholder={loginPageStrings.emailPlaceHolderText}
              onChange={handleInputChange}
              className={styles.loginPageInputFields}
            />
          </div>
        </div>
        <div className={styles.passWordContainer}>
          <span className={styles.passWordHeading}>
            {loginPageStrings.passWordHeading}
          </span>
          <Input
            type={loginPageStrings.inputTypePassword}
            value={name}
            placeholder={loginPageStrings.passwordPlaceHolderText}
            onChange={handleInputChange}
            className={styles.loginPageInputFields}
            image={passwordhideicon}
          />
          <span className={styles.forgotPassWordText}>
            {loginPageStrings.forgotPassWordText}
          </span>
        </div>
      </div>
    );
  };

  const loginPageButton = () => {
    return (
      <div className={styles.loginPageButtons}>
        <Button
          btName={loginPageStrings.logIn}
          btnStyles={styles.loginPageButtonStyles}
        />
        <Button
          btName={loginPageStrings.continueGoogleText}
          btnStyles={styles.continueGoogleButton}
          image={googleicon}
        />
      </div>
    );
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginPageInsideContainer}>
        {loginPageCloseBlock()}
        {loginPageTitleInfo()}
        {loginPageFormFields()}
        {loginPageButton()}
      </div>
    </div>
  );
};

export default LoginPage;
