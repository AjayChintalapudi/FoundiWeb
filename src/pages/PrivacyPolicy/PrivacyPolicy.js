import React,{useEffect} from 'react';
import styles from './styles.module.css';
import { privacyPolicyImg, privacyPolicyImgOne } from 'resources/Images/Images';
import useWindowDimensions from 'hooks/UseWindowDimensionHook/UseWindowDimemsionHook';
import NavBar from 'components/NavBar/NavBar';

const PrivacyPolicy = () => {
  const { width } = useWindowDimensions();
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const privacyPolicyTopSection = () => {
    return (
      <div className={styles.privacyPolicyTopContainer}>
        <div className={styles.insideprivacyPolicyTopContainer}>
          <div className={styles.privacyPolicyTopLeftSection}>
            <img
              src={width < 867 ? privacyPolicyImgOne : privacyPolicyImg}
              alt=""
              className={styles.imageWidth}
            />
          </div>
          <div className={styles.privacyPolicyTopRightSection}>
            <h4 className={styles.privacyPolicyTopHeaderText}>
              At Foundi, honesty goes first.
            </h4>
            <div className={styles.privacyPolicyTopParaText}>
              <p className={styles.privacyPolicyTopHeaderpara}>
                We want to inspire honesty, and that starts with Foundi being
                transparent with how we handle our customer's privacy and
                security.
              </p>
              <p className={styles.privacyPolicyTopHeaderparaOne}>
                One way we are keeping your security a top priority is with our
                integrated chat function which allows you to choose what
                information you want to share with others. Your identification
                marker is the unique SNO-code present on your Foundi products,
                everything else is up to you to share.
              </p>
              <p className={styles.privacyPolicyTopHeaderparaTwo}>
                We value the information you chose to share with us, giving us
                the ability to make your experience as personal as possible.
                However, with trust comes responsibility, which means we never
                sell your data or information to other parties.
              </p>
              <p className={styles.privacyPolicyTopHeaderparaThree}>
                Our mission is to make you feel safe in your day-to-day
                activities. Your safety and privacy should not be a matter of
                concern when you are using Foundi. If you want to read more
                about Foundi's honesty policy, see below.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const privacyPolicyBottomSection = () => {
    return (
      <div className={styles.privacyPolicyBottomcontainer}>
        <div className={styles.insidePrivacyPolicyBottomcontainer}>
          <div className={styles.privacyPolicyBottomHeaderSection}>
            <h5 className={styles.privacyPolicyBottomHeading}>
              Privacy policy
            </h5>
            <p className={styles.privacyPolicyBottomPara}>
              <span className={styles.privacyPolicyBottomSpanOne}>
                Last updated:
              </span>
              &nbsp; Dec 30th 2022,
              <span className={styles.privacyPolicyBottomSpanTwo}>
                Last reviewed:
              </span>
              &nbsp; Dec 20th 2022
            </p>
          </div>
          <div className={styles.privacyPolicyFooterSection}>
            <div className={styles.privacyPolicyDataController}>
              <h5 className={styles.DataControllerHeading}>Data controller</h5>
              <div className={styles.dataControllerParaSection}>
                <p className={styles.dataControllerContentTextStyle}>
                  Vilje Tech AB (“Vilje Tech”, “we”, “us”, “our”), the developer
                  of the Foundi app (“Foundi”), is a data controller of personal
                  data (“Data”). At Vilje Tech, we take your privacy very
                  seriously and ensure that all applicable data privacy
                  regulations are observed. In this section, you can learn about
                  how we process your Data when you use:
                </p>

                <div className={styles.dataControlleParaTwo}>
                  <p className={styles.dataControllerContentTextStyle}>
                    -&nbsp;
                    <span className={styles.dataControllerLinkTextStyle}>
                      www.foundiapp.com
                    </span>
                    &nbsp;(“Site”),
                  </p>
                  <p className={styles.dataControllerContentTextStyle}>
                    - the Foundi web or mobile app (“App”, “Apps”), or
                  </p>
                  <p className={styles.dataControllerContentTextStyle}>
                    - corresponding products and services offered by Vilje Tech
                    (“Service”, “Services”, “Solutions”).
                  </p>
                </div>
                <p className={styles.dataControllerContentTextStyle}>
                  This Policy does not apply to third-party applications,
                  websites, products, services, or platforms that may be
                  accessed through links that we provide to you. These third
                  parties are owned and operated independently from us and have
                  their own separate privacy and data-collection practices. Any
                  personal data that you provide to these third parties will be
                  governed by the third party’s own privacy policy. We cannot
                  accept liability for the actions or policies of these
                  independent third parties, and we are not responsible for the
                  content or privacy practices of such sites.
                </p>
              </div>
            </div>

            <div className={styles.privacyPolicyAboutFoundi}>
              <h5 className={styles.aboutFoundiHeading}>About Foundi</h5>
              <div className={styles.aboutFoundiParaSection}>
                <p className={styles.aboutFoundiTextStyle}>
                  Foundi is a QR code solution built to help recover your lost
                  items while protecting your identity and privacy. You can tag
                  all your belongings by registering your products in our App by
                  scanning the QR code or entering the serial number (SNO).
                  While registering the product, you can select a gift card to
                  reward the finder of your lost item.
                </p>
                <p className={styles.aboutFoundiTextStyle}>
                  Foundi products come in multiple variants, ranging from simple
                  keychains to laptop stickers, so that all of your items can be
                  tagged with ease. In case you lose your belongings, the finder
                  can easily scan the QR code or enter the SNO and be in touch
                  with you to return the item.
                </p>
              </div>
            </div>
            <div className={styles.privacyPolicyPersonalData}>
              <h5 className={styles.personalDataHeading}>
                Categories of personal data
              </h5>
              <div className={styles.personalDataParaSection}>
                <p className={styles.personalDataParaTextStyle}>
                  Depending on your interaction with Vilje Tech, we may process
                  different categories of your Data. When using our Site or
                  Apps, the categories of Data that we may process include:
                </p>
                <div className={styles.personalDataParaSectionOne}>
                  <p className={styles.personalDataParaTextStyle}>- Name</p>

                  <p className={styles.personalDataParaTextStyle}>
                    - Postal address
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Email address
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Submitted video data
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Device-specific data (e.g. hardware model, operating
                    system, and crash data)
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Telephone number
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Feedback, support, and error submissions
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Cookie and marketing preferences
                  </p>
                  <p className={styles.personalDataParaTextStyle}>
                    - Payment information
                  </p>
                </div>
                <p className={styles.personalDataParaTextStyle}>
                  Additionally,when submitting feedback, support, or error
                  forms, you may be asked to provide your name, contact
                  information, feedback or error message, and the identification
                  number of the product in question.
                </p>
                <p className={styles.personalDataParaTextStyle}>
                  This Data is collected when you register or use our Site,
                  Apps, or Solutions, opt-in to cookies, opt-in to receiving
                  marketing material, submit feedback or booking forms, from
                  public records, and through direct correspondence between
                  Vilje Tech and yourself.
                </p>
              </div>
            </div>
            <div className={styles.PurposeData}>
              <h5 className={styles.purposeDataHeading}>Purpose</h5>
              <div className={styles.purposeDataParaSection}>
                <p className={styles.purposeDataParaStyle}>
                  Vilje Tech processes your Data in order to be able to provide
                  to you in completion our services in accordance with your
                  wishes, to improve and expand our Solutions and Apps, for
                  insight and research purposes, to communicate with you, to
                  screen for potential risk or fraud, and, when in line with the
                  preferences that you have indicated, to provide you with
                  advertisement or promotional material.
                </p>
                <p className={styles.purposeDataParaStyle}>
                  As we develop insights and research, we ensure that data is
                  aggregated in order to prevent any individual from being
                  identified, in effect anonymising the data set. Our legal
                  bases for processing are:
                </p>
                <div className={styles.purposeDataParaSectionOne}>
                  <p className={styles.purposeDataParaStyle}>
                    - Based on your consent,
                  </p>
                  <p className={styles.purposeDataParaStyle}>
                    - Necessary for the performance of contract,
                  </p>
                  <p className={styles.purposeDataParaStyle}>
                    - Due to other legal obligations, or
                  </p>
                  <p className={styles.purposeDataParaStyle}>
                    - Legitimate interest.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.dataRetention}>
              <h5 className={styles.dataRetentionHeading}>Data retention</h5>
              <div className={styles.dataRetentionParaSection}>
                <p className={styles.dataRetentionParaStyle}>
                  Unless required by law, Data is retained for up to 24 months
                  after your last interaction with Vilje Tech, after which it is
                  erased or anonymised. Interaction with Vilje Tech includes,
                  for example, using our Site, Apps, or Services, or opening
                  marketing communications from us.
                </p>
                <p className={styles.dataRetentionParaStyle}>
                  You can at any time opt-out of receiving marketing
                  communications or close your account by following on-screen
                  instructions, or by contacting us at{' '}
                  <span className={styles.dataRetentionParaSpan}>
                    privacy@foundiapp.com
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.employmentApplication}>
              <h5 className={styles.employmentApplicationsHeading}>
                Employment applications
              </h5>
              <div className={styles.employmentApplicationParaSection}>
                <p className={styles.employmentApplicationParaStyle}>
                  For both published vacancies and open applications, our
                  recruitment process may involve the processing of the
                  following categories of Data of our applicants: name; postal
                  address; email address; telephone number; government-issued
                  identification; references and CVs. This Data is retained for
                  up to 5 years after the application date, or for as long as we
                  have a legitimate business need for it. This Data is collected
                  from public records, third-party recommendations and
                  referrals, and through direct correspondence between Vilje
                  Tech and yourself.
                </p>
              </div>
            </div>
            <div className={styles.thirdParties}>
              <h5 className={styles.thirdPartiesHeading}>
                Third parties and Countries
              </h5>
              <div className={styles.thirdPartyParaSection}>
                <p className={styles.thirdPartyParaStyles}>
                  We may share your Data with affiliated companies with which we
                  have partnered in order to provide to you a greater set of
                  services, and with trusted third-party service providers as
                </p>
                <div className={styles.thirdPartyParaSectionOne}>
                  <p className={styles.thirdPartyParaStyles}>
                    - Cloud data storage
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Processing payments
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Product development
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Application deployment and publication
                  </p>
                  <p className={styles.thirdPartyParaStyles}>- Cybersecurity</p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Market research
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Serving advertisements and conducting surveys
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Communicating with you, such as by way of email or survey
                    delivery
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Legal consultancy
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Customer relationship management, including social media
                  </p>
                  <p className={styles.thirdPartyParaStyles}>
                    - Support and related services
                  </p>
                </div>
                <p className={styles.thirdPartyParaStyles}>
                  necessary for them to perform services on our behalf, such as:
                  As often as is appropriate and practical, third parties are
                  only provided with aggregated data (through which individuals
                  cannot be identified) and are obligated not to disclose or use
                  the information for any purpose other than those listed above.
                </p>
                <p className={styles.thirdPartyParaStyles}>
                  Vilje Tech uses servers located within the EU; however, if we
                  transfer Data outside of the EU, we check that the third
                  country meets the requirements of applicable data privacy
                  legislation and make the necessary contractual arrangements to
                  ensure third-party compliance. Vilje Tech does not sell your
                  personal data.
                </p>
                <p className={styles.thirdPartyParaStyles}>
                  For a full list of our third parties, please send your request
                  to &nbsp;
                  <span className={styles.thirdPartySpanStyles}>
                    privacy@foundiapp.com
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.cookies}>
              <h5 className={styles.cookiesHeading}>Cookies</h5>
              <div className={styles.cookiesParaSection}>
                <p className={styles.cookiesParaStyles}>
                  A cookie is a small text file that the website or application
                  that you are visiting requests to save on your device. They
                  are widely used in order to make websites and applications
                  work, or work more efficiently, as well as to provide
                  information to the owners of the site or app.
                </p>
                <p className={styles.cookiesParaStyles}>
                  Vilje Tech only uses essential cookies, those that allow our
                  Site and Apps to work – as such, these cannot be disabled.
                </p>
                <p className={styles.cookiesParaStyles}>
                  Should Vilje Tech ever update its cookie collection for other
                  processing purposes, we will first request your consent.
                </p>
                <p className={styles.cookiesParaStyles}>
                  PTS, the regulatory authority in the field, provides
                  additional information about cookies on its website,
                  <span className={styles.cookiesSpanStyles}>pts.se</span>
                </p>
                <p className={styles.cookiesParaStyles}>
                  For information on how to manage your browser’s cookie
                  settings, follow these links:
                </p>
                <div className={styles.cookiesParaSectionOne}>
                  <p className={styles.cookiesParaStyles}>
                    -&nbsp;
                    <span className={styles.cookiesParaBlueStyle}>Chrome</span>
                  </p>
                  <p className={styles.cookiesParaStyles}>
                    -&nbsp;
                    <span className={styles.cookiesParaBlueStyle}>
                      Internet Explorer
                    </span>
                  </p>
                  <p className={styles.cookiesParaStyles}>
                    -&nbsp;
                    <span className={styles.cookiesParaBlueStyle}>Firefox</span>
                  </p>
                  <p className={styles.cookiesParaStyles}>
                    -&nbsp;
                    <span className={styles.cookiesParaBlueStyle}>Safari</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.cyberSecurity}>
              <h5 className={styles.cyberSecurityHeading}>Cybersecurity</h5>
              <div className={styles.cyberSecurityParaSection}>
                <p className={styles.cyberSecurityParaStyles}>
                  Vilje Tech protects your Data using technical and
                  organisational security measures. In order to prevent
                  unauthorised access and ensure data accuracy, we have
                  implemented strict guidelines for the organisation regarding
                  the processing of personal data, including the use of
                  two-factor authentication (2FA), SSL encryption, and trusted
                  third-party cloud data storage, with servers located within
                  the EU.
                </p>
              </div>
            </div>
            <div className={styles.yourRights}>
              <h5 className={styles.yourRightsHeading}>Your rights</h5>
              <div className={styles.yourRightsParaSection}>
                <p className={styles.yourRightsParaStyles}>
                  Under the EU General Data Protection Regulation (EU GDPR), you
                  have the right to transparency in how your Data is processed.
                  This means that you can at any time:
                </p>
                <div className={styles.yourRightsParaSectionOne}>
                  <p className={styles.yourRightsParaStyles}>
                    - Request an extract of what Data we process about you,
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Request that we correct any Data that is incorrect,
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Request that we erase your Data,
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Request that we limit how your Data is used,
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Object to the processing of your Data that we deem
                    legitimate,
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Request to have your Data transferred from Vilje Tech’s
                    system to another body,i.e. data portability, an
                  </p>
                  <p className={styles.yourRightsParaStyles}>
                    - Revoke previously granted consent to any of our personal
                    data processes.
                  </p>
                </div>
                <p className={styles.yourRightsParaStyles}>
                  If you would like to request any of the above, please contact
                  us at &nbsp;
                  <span className={styles.yourRightsSpanStyles}>
                    privacy@foundiapp.com
                  </span>
                </p>
                <p className={styles.yourRightsParaStyles}>
                  You are entitled to contact Sweden’s data protection
                  authority, Integritetsskyddsmyndigheten (IMY), to file a
                  complaint if you are dissatisfied with how we process your
                  Data.
                </p>
                <p className={styles.yourRightsParaStyles}>
                  More information about the EU GDPR can be found at &nbsp;
                  <span className={styles.yourRightsSpanStyles}>imy.se</span>
                  &nbsp; and&nbsp;
                  <span className={styles.yourRightsSpanStyles}>
                    ec.europa.eu
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.changesToVilje}>
              <h5 className={styles.changesToViljeHeading}>
                Changes to Vilje Tech’s privacy policy
              </h5>
              <div className={styles.changesToViljeParaSection}>
                <p className={styles.changesToViljeParaStyles}>
                  We may periodically update this Policy in order to accurately
                  reflect changes to operations, or for regulatory reasons. When
                  this happens, we will inform you by reasonable correspondence
                  - for example, by email, through our Apps, or on our Site.
                </p>
              </div>
            </div>
            <div className={styles.contactInformation}>
              <h5 className={styles.contactInformationHeading}>
                Contact information
              </h5>
              <div className={styles.contactInformationParaSection}>
                <p className={styles.contactInformationParaStyles}>
                  If you have questions about how Vilje Tech processes your
                  personal data, or the contents of this Policy, you can at any
                  time email &nbsp;
                  <span className={styles.contactInformationSpanStyles}>
                    privacy@foundiapp.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <NavBar/>
      {privacyPolicyTopSection()}
      {privacyPolicyBottomSection()}
    </div>
  );
};

export default PrivacyPolicy;
