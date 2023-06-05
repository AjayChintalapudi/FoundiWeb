import React, { useEffect } from 'react';
import styles from './styles.module.css';
import { privacyPolicyImg, privacyPolicyImgOne } from 'resources/Images/Images';
import useWindowDimensions from 'hooks/UseWindowDimensionHook/UseWindowDimemsionHook';
import NavBar from 'components/NavBar/NavBar';
import { englishStrings } from 'resources/Strings/eng';

const PrivacyPolicy = () => {
  const { width } = useWindowDimensions();
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // strings
  const { privacyPolicyPageStrings } = englishStrings;
  const privacyPolicyTopSection = () => {
    return (
      <div className={styles.privacyPolicyTopContainer}>
        <div className={styles.insideprivacyPolicyTopContainer}>
          {privacyPolicyTopLeftSection()}
          {privacyPolicyTopRightSection()}
        </div>
      </div>
    );
  };

  const privacyPolicyTopLeftSection = () => {
    return (
      <div className={styles.privacyPolicyTopLeftSection}>
        <img
          src={width < 867 ? privacyPolicyImgOne : privacyPolicyImg}
          alt=""
          className={styles.imageWidth}
        />
      </div>
    );
  };

  const privacyPolicyTopRightSection = () => {
    return (
      <div className={styles.privacyPolicyTopRightSection}>
        <h4 className={styles.privacyPolicyTopHeaderText}>
          {privacyPolicyPageStrings.privacyPolicyTopHeaderText}
        </h4>
        <div className={styles.privacyPolicyTopParaText}>
          <p className={styles.privacyPolicyTopHeaderpara}>
            {privacyPolicyPageStrings.privacyPolicyTopHeaderpara}
          </p>
          <p className={styles.privacyPolicyTopHeaderparaOne}>
            {privacyPolicyPageStrings.privacyPolicyTopHeaderparaOne}
          </p>
          <p className={styles.privacyPolicyTopHeaderparaTwo}>
            {privacyPolicyPageStrings.privacyPolicyTopHeaderparaTwo}
          </p>
          <p className={styles.privacyPolicyTopHeaderparaThree}>
            {privacyPolicyPageStrings.privacyPolicyTopHeaderparaThree}
          </p>
        </div>
      </div>
    );
  };

  const privacyPolicyBottomSection = () => {
    return (
      <div className={styles.privacyPolicyBottomcontainer}>
        <div className={styles.insidePrivacyPolicyBottomcontainer}>
          {privacyPolicyBottomHeaderSection()}
          {privacyPolicyFooterSection()}
        </div>
      </div>
    );
  };
  const privacyPolicyBottomHeaderSection = () => {
    return (
      <div className={styles.privacyPolicyBottomHeaderSection}>
        <h5 className={styles.privacyPolicyBottomHeading}>
          {privacyPolicyPageStrings.privacyPolicyBottomHeading}
        </h5>
        <p className={styles.privacyPolicyBottomPara}>
          <span className={styles.privacyPolicyBottomSpanOne}>
            {privacyPolicyPageStrings.privacyPolicyBottomSpanOne}
          </span>
          &nbsp; {privacyPolicyPageStrings.privacyPolicyBottomSpanOneSubDesc}
          <span className={styles.privacyPolicyBottomSpanTwo}>
            {privacyPolicyPageStrings.privacyPolicyBottomSpanTwo}
          </span>
          &nbsp; {privacyPolicyPageStrings.privacyPolicyBottomSpanTwoSubDesc}
        </p>
      </div>
    );
  };
  const privacyPolicyFooterSection = () => {
    return (
      <div className={styles.privacyPolicyFooterSection}>
        {privacyPolicyDataController()}
        {privacyPolicyAboutFoundi()}
        {privacyPolicyPersonalData()}
        {PurposeData()}
        {dataRetention()}
        {employmentApplication()}
        {thirdParties()}
        {cookies()}
        {cyberSecurity()}
        {yourRights()}
        {changesToVilje()}
        {contactInformation()}
      </div>
    );
  };

  const privacyPolicyDataController = () => {
    return (
      <div className={styles.privacyPolicyDataController}>
        <h5 className={styles.DataControllerHeading}>
          {privacyPolicyPageStrings.DataControllerHeading}
        </h5>
        <div className={styles.dataControllerParaSection}>
          <p className={styles.dataControllerContentTextStyle}>
            {privacyPolicyPageStrings.dataControllerContentTextStyle}
          </p>

          <div className={styles.dataControlleParaTwo}>
            <p className={styles.dataControllerContentTextStyle}>
              -&nbsp;
              <span className={styles.dataControllerLinkTextStyle}>
                {privacyPolicyPageStrings.dataControllerLinkTextStyleOne}
              </span>
              &nbsp;
              {privacyPolicyPageStrings.dataControllerLinkTextStyleOneSubDesc},
            </p>
            <p className={styles.dataControllerContentTextStyle}>
              {privacyPolicyPageStrings.dataControllerContentTextStyleTwo}
            </p>
            <p className={styles.dataControllerContentTextStyle}>
              {
                privacyPolicyPageStrings.dataControllerContentTextStyleTwoSubDesc
              }
            </p>
          </div>
          <p className={styles.dataControllerContentTextStyle}>
            {
              privacyPolicyPageStrings.dataControllerContentTextStyleSubDescThree
            }
          </p>
        </div>
      </div>
    );
  };

  const privacyPolicyAboutFoundi = () => {
    return (
      <div className={styles.privacyPolicyAboutFoundi}>
        <h5 className={styles.aboutFoundiHeading}>About Foundi</h5>
        <div className={styles.aboutFoundiParaSection}>
          <p className={styles.aboutFoundiTextStyle}>
            {privacyPolicyPageStrings.aboutFoundiTextStyleDescOne}
          </p>
          <p className={styles.aboutFoundiTextStyle}>
            {privacyPolicyPageStrings.aboutFoundiTextStyleDescTwo}
          </p>
        </div>
      </div>
    );
  };

  const privacyPolicyPersonalData = () => {
    return (
      <div className={styles.privacyPolicyPersonalData}>
        <h5 className={styles.personalDataHeading}>
          Categories of personal data
        </h5>
        <div className={styles.personalDataParaSection}>
          <p className={styles.personalDataParaTextStyle}>
            {privacyPolicyPageStrings.personalDataParaTextStyleOne}
          </p>
          <div className={styles.personalDataParaSectionOne}>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescOne}
            </p>

            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescTwo}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescThree}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescFour}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescFive}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescSix}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescSeven}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescEight}
            </p>
            <p className={styles.personalDataParaTextStyle}>
              {privacyPolicyPageStrings.personalDataParaTextStyleSubDescNine}
            </p>
          </div>
          <p className={styles.personalDataParaTextStyle}>
            {privacyPolicyPageStrings.personalDataParaTextStyleSubHeadingOne}
          </p>
          <p className={styles.personalDataParaTextStyle}>
            {privacyPolicyPageStrings.personalDataParaTextStyleSubHeadingTwo}
          </p>
        </div>
      </div>
    );
  };

  const PurposeData = () => {
    return (
      <div className={styles.PurposeData}>
        <h5 className={styles.purposeDataHeading}>Purpose</h5>
        <div className={styles.purposeDataParaSection}>
          <p className={styles.purposeDataParaStyle}>
            {privacyPolicyPageStrings.purposeDataParaStyleOne}
          </p>
          <p className={styles.purposeDataParaStyle}>
            {privacyPolicyPageStrings.purposeDataParaStyleTwo}
          </p>
          <div className={styles.purposeDataParaSectionOne}>
            <p className={styles.purposeDataParaStyle}>
              {privacyPolicyPageStrings.purposeDataParaStyleOne}
            </p>
            <p className={styles.purposeDataParaStyle}>
              {privacyPolicyPageStrings.purposeDataParaStyleTwo}
            </p>
            <p className={styles.purposeDataParaStyle}>
              {privacyPolicyPageStrings.purposeDataParaStyleThree}
            </p>
            <p className={styles.purposeDataParaStyle}>
              {privacyPolicyPageStrings.purposeDataParaStyleFour}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const dataRetention = () => {
    return (
      <div className={styles.dataRetention}>
        <h5 className={styles.dataRetentionHeading}>
          {privacyPolicyPageStrings.dataRetentionHeading}
        </h5>
        <div className={styles.dataRetentionParaSection}>
          <p className={styles.dataRetentionParaStyle}>
            {privacyPolicyPageStrings.dataRetentionParaStyleOne}
          </p>
          <p className={styles.dataRetentionParaStyle}>
            {privacyPolicyPageStrings.dataRetentionParaStyleTwo}{' '}
            <span className={styles.dataRetentionParaSpan}>
              {privacyPolicyPageStrings.dataRetentionParaSpan}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const employmentApplication = () => {
    return (
      <div className={styles.employmentApplication}>
        <h5 className={styles.employmentApplicationsHeading}>
          {privacyPolicyPageStrings.employmentApplicationsHeading}
        </h5>
        <div className={styles.employmentApplicationParaSection}>
          <p className={styles.employmentApplicationParaStyle}>
            {privacyPolicyPageStrings.employmentApplicationParaStyle}
          </p>
        </div>
      </div>
    );
  };

  const thirdParties = () => {
    return (
      <div className={styles.thirdParties}>
        <h5 className={styles.thirdPartiesHeading}>
          {privacyPolicyPageStrings.thirdPartiesHeading}
        </h5>
        <div className={styles.thirdPartyParaSection}>
          <p className={styles.thirdPartyParaStyles}>
            {privacyPolicyPageStrings.thirdPartyParaStylesDesc}
          </p>
          <div className={styles.thirdPartyParaSectionOne}>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesOne}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesTwo}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesThree}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesFour}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesFive}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesSix}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesSeven}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesEight}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesNine}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesTen}
            </p>
            <p className={styles.thirdPartyParaStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesEleven}
            </p>
          </div>
          <p className={styles.thirdPartyParaStyles}>
            {privacyPolicyPageStrings.thirdPartyParaStylesSubDescOne}
          </p>
          <p className={styles.thirdPartyParaStyles}>
            {privacyPolicyPageStrings.thirdPartyParaStylesSubDescTwo}
          </p>
          <p className={styles.thirdPartyParaStyles}>
            {privacyPolicyPageStrings.thirdPartyParaStylesSubDescThree}
            &nbsp;
            <span className={styles.thirdPartySpanStyles}>
              {privacyPolicyPageStrings.thirdPartyParaStylesSubDescFour}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const cookies = () => {
    return (
      <div className={styles.cookies}>
        <h5 className={styles.cookiesHeading}>
          {privacyPolicyPageStrings.cookiesHeading}
        </h5>
        <div className={styles.cookiesParaSection}>
          <p className={styles.cookiesParaStyles}>
            {privacyPolicyPageStrings.cookiesParaStylesOne}
          </p>
          <p className={styles.cookiesParaStyles}>
            {privacyPolicyPageStrings.cookiesParaStylesTwo}
          </p>
          <p className={styles.cookiesParaStyles}>
            {privacyPolicyPageStrings.cookiesParaStylesThree}
          </p>
          <p className={styles.cookiesParaStyles}>
            {privacyPolicyPageStrings.cookiesParaStylesFour}
            <span className={styles.cookiesSpanStyles}>
              {privacyPolicyPageStrings.cookiesParaStylesFourSubDesc}
            </span>
          </p>
          <p className={styles.cookiesParaStyles}>
            {privacyPolicyPageStrings.cookiesParaStylesFive}
          </p>
          <div className={styles.cookiesParaSectionOne}>
            <p className={styles.cookiesParaStyles}>
              -&nbsp;
              <span className={styles.cookiesParaBlueStyle}>
                {privacyPolicyPageStrings.Chrome}
              </span>
            </p>
            <p className={styles.cookiesParaStyles}>
              -&nbsp;
              <span className={styles.cookiesParaBlueStyle}>
                {privacyPolicyPageStrings.cookiesParaBlueStyleDescTwo}
              </span>
            </p>
            <p className={styles.cookiesParaStyles}>
              -&nbsp;
              <span className={styles.cookiesParaBlueStyle}>
                {privacyPolicyPageStrings.cookiesParaBlueStyleDescThree}
              </span>
            </p>
            <p className={styles.cookiesParaStyles}>
              -&nbsp;
              <span className={styles.cookiesParaBlueStyle}>
                {privacyPolicyPageStrings.cookiesParaBlueStyleDescFour}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  const cyberSecurity = () => {
    return (
      <div className={styles.cyberSecurity}>
        <h5 className={styles.cyberSecurityHeading}>Cybersecurity</h5>
        <div className={styles.cyberSecurityParaSection}>
          <p className={styles.cyberSecurityParaStyles}>
            {privacyPolicyPageStrings.cyberSecurityParaStylesDesc}
            the EU.
          </p>
        </div>
      </div>
    );
  };

  const yourRights = () => {
    return (
      <div className={styles.yourRights}>
        <h5 className={styles.yourRightsHeading}>
          {privacyPolicyPageStrings.yourRightsHeading}
        </h5>
        <div className={styles.yourRightsParaSection}>
          <p className={styles.yourRightsParaStyles}>
            {privacyPolicyPageStrings.yourRightsParaStylesDesc}
          </p>
          <div className={styles.yourRightsParaSectionOne}>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescOne}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescTwo}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescThree}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescFour}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescFive}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescSix}
            </p>
            <p className={styles.yourRightsParaStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesDescSeven}
            </p>
          </div>
          <p className={styles.yourRightsParaStyles}>
            {privacyPolicyPageStrings.yourRightsParaStylesSubDescOne}
            &nbsp;
            <span className={styles.yourRightsSpanStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesSubDescTwo}
            </span>
          </p>
          <p className={styles.yourRightsParaStyles}>
            {privacyPolicyPageStrings.yourRightsParaStylesSubDescThree}
          </p>
          <p className={styles.yourRightsParaStyles}>
            {privacyPolicyPageStrings.yourRightsParaStylesSubDescFour} &nbsp;
            <span className={styles.yourRightsSpanStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesSubDescFive}
            </span>
            &nbsp; {privacyPolicyPageStrings.yourRightsParaStylesSubDescSix}
            &nbsp;
            <span className={styles.yourRightsSpanStyles}>
              {privacyPolicyPageStrings.yourRightsParaStylesSubDescSeven}
            </span>
          </p>
        </div>
      </div>
    );
  };

  const changesToVilje = () => {
    return (
      <div className={styles.changesToVilje}>
        <h5 className={styles.changesToViljeHeading}></h5>
        <div className={styles.changesToViljeParaSection}>
          <p className={styles.changesToViljeParaStyles}>
            {privacyPolicyPageStrings.changesToViljeParaStylesDesc}
          </p>
        </div>
      </div>
    );
  };

  const contactInformation = () => {
    return (
      <div className={styles.contactInformation}>
        <h5 className={styles.contactInformationHeading}></h5>
        <div className={styles.contactInformationParaSection}>
          <p className={styles.contactInformationParaStyles}>
            {privacyPolicyPageStrings.contactInformationParaStylesDesc}
            &nbsp;
            <span className={styles.contactInformationSpanStyles}>
              {privacyPolicyPageStrings.contactInformationParaStylesSubDesc}
            </span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {privacyPolicyTopSection()}
      {privacyPolicyBottomSection()}
    </div>
  );
};

export default PrivacyPolicy;
