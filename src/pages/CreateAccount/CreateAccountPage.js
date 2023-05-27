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
import { signUp } from 'networking/endpoints/endpoints';
import ProgressBar from 'components/ProgressBar/ProgressBar';

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

  const [isDetailsVerified, setIsDetailsVerified] = useState(false);

  const handleSignUp = async (values) => {
    setCurrentStep((previous) => previous + 1);
    if (currentStep === 3) {
      console.log(values);
      try {
        const response = await signUp(values);
        console.log(response);
        const isVerified = response.status === 'verified';
      } catch (error) {
        console.log('error');
      }
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

  // fomik validation

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

  const progressBar = () => {
    const progressPercentage = (currentStep - 0) * 33.33;
    return (
      <div>
        <ProgressBar progressPercentage={progressPercentage} />
      </div>
    );
  };

  const createAccountPageCloseBlock = () => {
    const totalSteps = 3;
    const stepText = `Step ${currentStep} of ${totalSteps}`;
    return (
      <div className={styles.createAccountPageCloseBlock}>
        <p className={styles.createAccountPageBackText}>{stepText}</p>
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
          <div className={styles.createAccountPageAccountDescBlock}>
            <span className={styles.createAccountPageAccountDesc}>
              {createAccountPageStrings.createAccountAccountDesc}
            </span>
            &nbsp;&nbsp;
            <span className={styles.createAccountPageSignUpText}>
              {createAccountPageStrings.createAccountLogIn}
            </span>
          </div>
        </div>
      );
    }
  };

  const createAccountPageFormFields = () => {
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          {renderStepOne()}
          {renderStepTwo()}
          {renderStepThree()}
        </form>
      </div>
    );
  };

  const renderStepOne = () => {
    if (currentStep !== 1) return null;
    return (
      <div className={styles.createAccountPageFormFields}>
        <div className={styles.fullNameContainer}>
          <p className={StyleSheet.fullNameHeading}>
            {createAccountPageStrings.fullNameHeading}
          </p>
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
                    &nbsp;&nbsp;
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
          <p className={styles.lastNameHeading}>
            {createAccountPageStrings.lastNameHeading}
          </p>
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
                  &nbsp;&nbsp;
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
                    &nbsp;&nbsp;
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
            {createAccountPageStrings.passwordText}
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
                  &nbsp;&nbsp;
                  <span>{createAccountPageStrings.poor}</span>
                </div>
              ) : (
                ''
              )
            }
            errorMessage={styles.errorMessage}
          />
        </div>
        <div className={styles.createAccountPageButtons}>
          <Button
            btName={createAccountPageStrings.createAccount}
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
    // our logic regarding credential verfication
    const message = isDetailsVerified ? (
      <div className={styles.cheersMessageContainer}>
        <h3 className={styles.cheersHeading}>
          {createAccountPageStrings.cheersHeading}
        </h3>
        <p className={styles.cheersDesc}>
          {createAccountPageStrings.cheersDesc}
        </p>
        <Button
          btName={createAccountPageStrings.cheersBtnName}
          btnStyles={styles.cheersBtnStyles}
        />
      </div>
    ) : (
      <div className={styles.oppsMessageContainer}>
        <h3 className={styles.oopsHeading}>
          {createAccountPageStrings.oopsHeading}
        </h3>
        <p className={styles.oopsDesc1}>{createAccountPageStrings.oopsDesc1}</p>
        <p className={styles.oopsDesc2}>{createAccountPageStrings.oopsDesc2}</p>
        <Button
          btName={createAccountPageStrings.resendLink}
          btnStyles={styles.resendLinkBtnStyles}
        />
        <span className={styles.editEmail}>
          {createAccountPageStrings.editEmail}
        </span>
      </div>
    );
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
      {progressBar()}
      <div className={styles.createAccountPageInsideContainer}>
        <div className={styles.closeBlockContainer}>
          {createAccountPageCloseBlock()}
        </div>
        <div className={styles.FormFieldsAndTitleInfoBlock}>
          {createAccountPageTitleInfo()}
          {createAccountPageFormFields()}
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
