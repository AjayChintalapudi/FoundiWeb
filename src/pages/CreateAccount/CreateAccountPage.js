import React, { useState, useEffect, useContext } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import Input from 'components/Input/Input';
import {
  closeicon,
  googleicon,
  passwordhideicon,
  passwordopenicon,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { redirect, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useFormik } from 'formik';
import {
  EmailValidationSchema,
  FirstNameValidationSchema,
  LastNameValidationSchema,
  PassWordValidationSchema,
} from 'validators/Validators';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import { signUp } from 'networking/apis/signUp';
import { UserDataContext } from 'providers/UserDataProvider';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { googleSignUp } from 'networking/apis/googleSignIn';
import axios from 'axios';

const CreateAccountPage = () => {
  /******************************8 */
  /***********STRING VALUES************/

  const { createAccountPageStrings } = englishStrings;
  const { setUserData } = useContext(UserDataContext);

  // show password usestate

  const [showPassWord, setShowPassWord] = useState(false);

  const togglePassWord = () => {
    setShowPassWord(!showPassWord);
  };

  // SignUp Page Steps[1-2-3]

  const [currentStep, setCurrentStep] = useState(1);
  const [schema, setSchema] = useState(
    FirstNameValidationSchema.concat(LastNameValidationSchema)
  );
  // scroll to top of the page onloading

  const [isPageClosed, setIsPageClosed] = useState(false);

  // Form Handling

  const [isDetailsVerified, setIsDetailsVerified] = useState(true);
  const [hasMessageShown, setHasMessageShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // scroll to top of the page onloading

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // after closing redirect to home page

  const navigate = useNavigate();
  useEffect(() => {
    if (isPageClosed) {
      navigate('/');
    }
  }, [isPageClosed, navigate]);

  const handleClosePage = () => {
    setIsPageClosed(true);
  };

  //  using concat method keep validations while rendering steps

  useEffect(() => {
    if (currentStep === 1) {
      setSchema(FirstNameValidationSchema.concat(LastNameValidationSchema));
    }
    if (currentStep === 2) {
      setSchema(EmailValidationSchema.concat(PassWordValidationSchema));
    }
  }, [currentStep]);

  /***********Form HANDLING************/

  const handleSignUp = async (values) => {
    if (currentStep === 1) {
      setCurrentStep((previous) => previous + 1);
    } else {
      let data = {
        full_name: values.firstname + values.lastname,
        email: values.email,
        password: values.password,
        type: 1,
      };
      try {
        const response = await signUp(data);
        console.log(response);
        if (response.data.type === 'success') {
          setUserData(response.data);
          setCurrentStep(3);
        } else {
          setErrorMessage(response.data.message);
        }
      } catch (error) {
        console.log('error');
      }
    }
  };

  // google signup

  const googleSignup = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      if (codeResponse) {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: 'application/json',
              },
            }
          );

          console.log('google api response', response.data);
          const data = {
            full_name: response.data.name,
            email: response.data.email,
            image: response.data.picture,
            type: 1,
          };
          console.log('sending data', data);
          const googleSignUpResponse = await googleSignUp(data);
          console.log('googleSignUpResponse', googleSignUpResponse);

          if (googleSignUpResponse.data.type === 'success') {
            setUserData(googleSignUpResponse.data);
            setCurrentStep(3);
          } else {
            // setUserData(res.data.message)
            alert(googleSignUpResponse.data.message);
          }
        } catch (error) {
          console.log(error, 'google signup failed');
        }
      }
    },
    onError: (error) => console.log('Login Failed:', error),
  });

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
            <span
              className={styles.createAccountPageSignUpText}
              onClick={() => navigate('/login')}
            >
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
        </form>
        {renderStepThree()}
      </div>
    );
  };

  const renderStepOne = () => {
    if (currentStep !== 1) return null;
    return (
      <div className={styles.createAccountPageFormFields}>
        {firstNameInputSection()}
        {lastNameInputSection()}
        {buttonSection()}
      </div>
    );
  };

  const firstNameInputSection = () => {
    return (
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
            errorMessage={styles.errorMessage}
          />
        </div>
      </div>
    );
  };

  const lastNameInputSection = () => {
    return (
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
          errorMessage={styles.errorMessage}
        />
      </div>
    );
  };

  const renderStepTwo = () => {
    if (currentStep !== 2) return null;
    return (
      <div className={styles.createAccountPageFormFields}>
        {emailInputSection()}
        {passWordInputSection()}
        {errorMessage && (
          <div>
            <p className={styles.userErrorMessage}>{errorMessage}</p>
          </div>
        )}
        {buttonSection()}
      </div>
    );
  };

  const emailInputSection = () => {
    return (
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
            onFocus={() => setErrorMessage('')}
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
    );
  };

  const passWordInputSection = () => {
    return (
      <div className={styles.passWordContainer}>
        <span className={styles.passWordHeading}>
          {createAccountPageStrings.passwordText}
        </span>
        <Input
          type={showPassWord ? 'text' : 'password'}
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={createAccountPageStrings.passwordPlaceHolderText}
          className={styles.createAccountPageInputFields}
          image={showPassWord ? passwordopenicon : passwordhideicon}
          onClick={togglePassWord}
          error={
            formik.touched.password && formik.errors.password ? (
              <div className={styles.passWordErrorMessage}>
                <span className={styles.inValidPassWord}>
                  {createAccountPageStrings.strength}
                </span>
                &nbsp;&nbsp;
                <span className={styles.passWordStrength}>
                  {createAccountPageStrings.poor}
                </span>
              </div>
            ) : (
              ''
            )
          }
          errorMessage={styles.errorMessage}
        />
      </div>
    );
  };

  const renderStepThree = () => {
    if (currentStep !== 3) return null;
    // our logic regarding credential verfication

    return (
      <div className={styles.verifyCredentialContainer}>
        {/* {!hasMessageShown
          ? verifyCredentialContainer
          : isDetailsVerified
          ? cheersMessage
          : oopsMessage} */}

        {cheersMessage()}
      </div>
    );
  };

  const cheersMessage = () => {
    return (
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
          onClick={() => navigate('/')}
          type="button"
        />
      </div>
    );
  };

  const oopsMessage = (
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

  const verifyCredentialContainer = (
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
        // onClick={() => setCurrentStep(1)}
      />
      <span className={styles.editEmail}>
        {createAccountPageStrings.editEmail}
      </span>
    </div>
  );

  const buttonSection = () => {
    return (
      <div className={styles.createAccountPageButtons}>
        <Button
          btName={
            currentStep === 1
              ? createAccountPageStrings.createAccountNext
              : createAccountPageStrings.createAccount
          }
          btnStyles={styles.createAccountPageButtonStyles}
          type="submit"
        />
        <Button
          btName={createAccountPageStrings.continueGoogleText}
          btnStyles={styles.continueGoogleButton}
          image={googleicon}
          type="button"
          onClick={googleSignup}
        />
        {/* {<p className={styles.userErrorMessage}>{errorMessage}</p>} */}
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
