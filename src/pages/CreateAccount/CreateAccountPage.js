import React, { useState, useEffect } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import {
  closeicon,
  googleicon,
  passwordhideicon,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useFormik } from 'formik';
import {
  EmailValidationSchema,
  FirstNameValidationSchema,
  LastNameValidationSchema,
  PassWordValidationSchema,
} from 'validators/Validators';

const CreateAccountPage = () => {
  /***********STRING VALUES************/
  const { createAccountPageStrings } = englishStrings;
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

  /***********Form HANDLING************/
  const handleSignUp = async (values) => {
    // try{
    //   console.log(response)
    // }
    // catch{
    //   console.log('error')
    // }

    setCurrentStep((previous) => previous + 1);
    if (currentStep === 3) {
      console.log(values);
    }
  };

  // SignUp Page Steps[1-2-3]
  const [currentStep, setCurrentStep] = useState(1);
  const [schema, setSchema] = useState(
    FirstNameValidationSchema.concat(LastNameValidationSchema)
  );
  useEffect(() => {
    if (currentStep === 1) {
      setSchema(FirstNameValidationSchema.concat(LastNameValidationSchema));
    }
    if (currentStep === 2) {
      setSchema(EmailValidationSchema.concat(PassWordValidationSchema));
    }
  }, [currentStep]);

  // progress bar

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: handleSignUp,
  });

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
    if (currentStep === 1 || currentStep === 2) {
      return (
        <div className={styles.createAccountPageTitleInfo}>
          <h3 className={styles.createAccountPageTitle}>
            {createAccountPageStrings.createAccountTitle}
          </h3>
          <span className={styles.createAccountPageAccountDesc}>
            {createAccountPageStrings.createAccountAccountDesc}
          </span>
          <span className={styles.createAccountPageSignUpText}>
            {createAccountPageStrings.createAccountLogIn}
          </span>
        </div>
      );
    }
  };

  const createAccountPageFormFields = () => {
    return (
        <form onSubmit={formik.handleSubmit}>
          {renderStepOne()}
          {renderStepTwo()}
          {renderStepThree()}
        </form>
    );
  };

  const renderStepOne = () => {
    if (currentStep !== 1) return null;
    return (
      <div className={styles.createAccountPageFormFields}>
        <div className={styles.fullNameContainer}>
          <span className={StyleSheet.fullNameHeading}>
            {createAccountPageStrings.fullNameHeading}
          </span>
          <div>
            <Input
              name="firstname"
              type={createAccountPageStrings.inputTypetext}
              value={formik.values.firstname}
              placeholder={createAccountPageStrings.fullNamePlaceHolderText}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={styles.createAccountPageInputFields}
              error={
                formik.touched.firstname && formik.errors.firstname ? (
                  <div className={styles.firstNameInfo}>
                    <span className={styles.firstNameText}>
                      {createAccountPageStrings.firstName}
                    </span>
                    <span>{createAccountPageStrings.required}</span>
                  </div>
                ) : (
                  ''
                )
              }
            />
          </div>
        </div>
        <div className={styles.lastNameContainer}>
          <span className={styles.lastNameHeading}>
            {createAccountPageStrings.lastNameHeading}
          </span>
          <Input
            name="lastname"
            type={createAccountPageStrings.inputTypetext}
            value={formik.values.lastname}
            placeholder={createAccountPageStrings.lastNamePlaceHolderText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={styles.createAccountPageInputFields}
            error={
              formik.touched.lastname && formik.errors.lastname ? (
                <div className={styles.lastNameInfo}>
                  <span className={styles.lastNameText}>
                    {createAccountPageStrings.lastName}
                  </span>
                  <span>{createAccountPageStrings.required}</span>
                </div>
              ) : (
                ''
              )
            }
          />
        </div>
        <div className={styles.createAccountPageButtons}>
          <Button
            btName={createAccountPageStrings.createAccountNext}
            btnStyles={styles.createAccountPageButtonStyles}
            type="submit"
          />
          <Button
            btName={createAccountPageStrings.continueGoogleText}
            btnStyles={styles.continueGoogleButton}
            image={googleicon}
            type="button"
          />
        </div>
      </div>
    );
  };

  const renderStepTwo = () => {
    if (currentStep !== 2) return null;
    return (
      <div className={styles.createAccountPageFormFields}>
        <div className={styles.emailContainer}>
          <span className={styles.emailHeading}>
            {createAccountPageStrings.emailHeading}
          </span>
          <div>
            <Input
              type={createAccountPageStrings.inputTypeEmail}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={createAccountPageStrings.emailPlaceHolderText}
              className={styles.createAccountPageInputFields}
              errorMessage={styles.errorMessage}
              error={
                formik.touched.email && formik.errors.email ? (
                  <div className={styles.emailErrorMessage}>
                    <span className={styles.inValidEmailText}>
                      {createAccountPageStrings.inValidEmail}
                    </span>
                    <span className={styles.enterValidEmailText}>
                      {createAccountPageStrings.enterValidEmail}
                    </span>
                  </div>
                ) : (
                  ''
                )
              }
            />
          </div>
        </div>
        <div className={styles.passWordContainer}>
          <span className={styles.passWordHeading}>
            {createAccountPageStrings.passWordHeading}
          </span>
          <Input
            type={createAccountPageStrings.inputTypePassword}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder={createAccountPageStrings.passwordPlaceHolderText}
            className={styles.createAccountPageInputFields}
            image={passwordhideicon}
            error={
              formik.touched.password && formik.errors.password ? (
                <div className={styles.passWordErrorMessage}>
                  <span className={styles.inValidPassWord}>
                    {createAccountPageStrings.strength}
                  </span>
                  <span>{createAccountPageStrings.poor}</span>
                </div>
              ) : (
                ''
              )
            }
            errorMessage={styles.errorMessage}
          />
          <span className={styles.forgotPassWordText}>
            {createAccountPageStrings.forgotPassWordText}
          </span>
        </div>
        <div className={styles.createAccountPageButtons}>
          <Button
            btName={createAccountPageStrings.logIn}
            btnStyles={styles.createAccountPageButtonStyles}
            type="submit"
          />
          <Button
            btName={createAccountPageStrings.continueGoogleText}
            btnStyles={styles.continueGoogleButton}
            image={googleicon}
            type="button"
          />
        </div>
      </div>
    );
  };

  const renderStepThree = () => {
    if (currentStep !== 3) return null;
    return (
      <div className={styles.verifyCredentialContainer}>
        <h3 className={styles.verifyCredentialHeading}>
          {createAccountPageStrings.verifyCredentialHeading}
        </h3>
        <p className={styles.verifyCredentialDesc}>
          {createAccountPageStrings.verifyCredentialDesc}
        </p>
        <Button
          btName={createAccountPageStrings.resendLink}
          btnStyles={styles.resendLinkBtnStyles}
          onClick={() => setCurrentStep(1)}
        />
        <span className={styles.editEmail}>
          {createAccountPageStrings.editEmail}
        </span>
      </div>
    );
  };

  return (
    <div className={styles.createAccountPageContainer}>
      <div className={styles.createAccountPageInsideContainer}>
        {createAccountPageCloseBlock()}
        {createAccountPageTitleInfo()}
        {createAccountPageFormFields()}
      </div>
    </div>
  );
};

export default CreateAccountPage;
