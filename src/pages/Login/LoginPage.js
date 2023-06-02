import React, { useState, useEffect } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import {
  passwordhideicon,
  closeicon,
  googleicon,
  passwordopenicon,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  EmailValidationSchema,
  PassWordValidationSchema,
} from 'validators/Validators';

const LoginPage = () => {
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // scroll to top of the page onloading
  /*****LOGIN PAGE STRINGS*****/
  const { loginPageStrings } = englishStrings;

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

  /*****FORM VALIDATION USING YUP AND FORMIK*****/
  const handleLogin = async (values, { resetForm }) => {
    // try {
    //   const response = await userLogin(values);
    //   console.log(response);
    // } catch {
    //   console.log('error');
    // }
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: EmailValidationSchema.concat(PassWordValidationSchema),
    onSubmit: handleLogin,
  });

  // console.log(formik.validationSchema)

  // Toggle Password
  const [showPassWord, setShowPassWord] = useState(false);

  const togglePassWord = () => {
    setShowPassWord(!showPassWord);
  };
  
  const closeBlock = () => {
    return (
      <div className={styles.loginPageCloseAndTitleInfo}>
        {loginPageCloseBlock()}
        {loginPageTitleInfo()}
      </div>
    );
  };

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
        <div className={styles.loginPageAccounsSignUpBlock}>
          <span className={styles.loginPageAccountDesc}>
            {loginPageStrings.loginPageAccountDesc}
          </span>
          &nbsp;
          <span
            className={styles.loginPageSignUpText}
            onClick={() => navigate('/signup')}
          >
            {loginPageStrings.loginPageSignUpText}
          </span>
        </div>
      </div>
    );
  };

  const loginPageFormFields = () => {
    return (
      <div className={styles.loginPageFormsContainer}>
        <form
          onSubmit={formik.handleSubmit}
          className={styles.loginPageFormFields}
        >
          {loginPageInputs()}
          {loginPageButtons()}
        </form>
      </div>
    );
  };

  const loginPageInputs = () => {
    return (
      <div className={styles.inputContainerStyle}>
        {emailInputSection()}
        {passWordInputSection()}
      </div>
    );
  };

  const emailInputSection = () => {
    return (
      <div className={styles.emailContainer}>
        <span className={StyleSheet.emailHeading}>
          {loginPageStrings.emailHeading}
        </span>
        <div>
          <Input
            type={loginPageStrings.inputTypeEmail}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={loginPageStrings.emailPlaceHolderText}
            className={styles.loginPageInputFields}
            errorMessage={styles.errorMessage}
            error={
              formik.touched.email && formik.errors.email ? (
                <div className={styles.emailErrorMessage}>
                  <span className={styles.inValidEmailText}>
                    {loginPageStrings.inValidEmail}
                  </span>
                  &nbsp;&nbsp;
                  <span className={styles.enterValidEmailText}>
                    {loginPageStrings.enterValidEmail}
                  </span>
                </div>
              ) : (
                ''
              )
            }
          />
        </div>
      </div>
    );
  };

  const passWordInputSection = () => {
    return (
      <div className={styles.passWordContainer}>
        <span className={styles.passWordHeading}>
          {loginPageStrings.passWordHeading}
        </span>
        <Input
          type={showPassWord ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={loginPageStrings.passwordPlaceHolderText}
          className={styles.loginPageInputFields}
          image={showPassWord ? passwordopenicon : passwordhideicon}
          onClick={togglePassWord}
          error={
            formik.touched.password && formik.errors.password ? (
              <div className={styles.passWordErrorMessage}>
                <span className={styles.inValidPassWord}>
                  {loginPageStrings.inValidPassWord}
                </span>
                &nbsp; &nbsp;
                <span>{loginPageStrings.tryAgain}</span>&nbsp;&nbsp;
                <span className={styles.reset}>{loginPageStrings.reset}</span>
              </div>
            ) : (
              ''
            )
          }
          errorMessage={styles.errorMessage}
        />
        <span className={styles.forgotPassWordText}>
          {loginPageStrings.forgotPassWordText}
        </span>
      </div>
    );
  };

  const loginPageButtons = () => {
    return (
      <div className={styles.loginPageButtons}>
        <Button
          btName={loginPageStrings.logIn}
          btnStyles={styles.loginPageButtonStyles}
          type="submit"
        />
        <Button
          btName={loginPageStrings.continueGoogleText}
          btnStyles={styles.continueGoogleButton}
          image={googleicon}
          type="button"
        />
      </div>
    );
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginPageInsideContainer}>
        {closeBlock()}
        {loginPageFormFields()}
      </div>
    </div>
  );
};

export default LoginPage;
