import React from 'react';
import styles from './styles.module.css';
import { englishStrings } from 'resources/Strings/eng';
import {
  fbImg,
  instaImg,
  twitterImg,
  linkedinImg,
} from 'resources/Image/Image';

const Footer = () => {
  const { footerPageStrings } = englishStrings;
  const Data = [
    {
      id: 1,
      image: '🤝',
      text: footerPageStrings.footerJoin,
    },
    {
      id: 2,
      image: '📧',
      text: footerPageStrings.footerMail,
    },

    {
      id: 3,
      image: ' 🤙',
      text: footerPageStrings.footerNumber,
    },

    {
      id: 4,
      image: '📍',
      text: footerPageStrings.footerLocation,
    },
  ];
  return (
    <div className={styles.footerSection}>
      <div className={styles.insideFooterSection}>
        <div className={styles.footerContactSection}>
          {Data.map((item, index) => {
            return (
              <div key={index}>
                {item.image}
                <a href="" className={styles.footerJoinImage}>
                  {item.text}
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.footerBottomSection}>
          <div className={styles.footerLeftSection}>
            <p className={styles.footerPrivacyText}>
              {footerPageStrings.footerPrivacy}
            </p>
            <p className={styles.footerTermsText}>
              {footerPageStrings.footerTerms}
            </p>
          </div>
          <div className={styles.footerMiddleSection}>
            <div className={styles.footerFbImage}>
              <img src={fbImg} className={styles.imageWidth} alt="" />
            </div>
            <div className={styles.footerInstaImage}>
              <img src={instaImg} className={styles.imageWidth} alt="" />
            </div>
            <div className={styles.footerTwitterImage}>
              <img src={twitterImg} className={styles.imageWidth} alt="" />
            </div>
            <div className={styles.footerlinkedInImage}>
              <img src={linkedinImg} className={styles.imageWidth} alt="" />
            </div>
          </div>
          <div>
            <p className={styles.footerRightSection}>
              {footerPageStrings.footerRights}
            </p>
          </div>
        </div>
        <div className={styles.footerBottomMobileSection}>
          <div className={styles.footerMiddleMobileSection}>
            <div className={styles.footerFbMobileImage}>
              <img src={fbImg} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.footerInstaMobileImage}>
              <img src={instaImg} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.footerTwitterMobileImage}>
              <img src={twitterImg} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.footerlinkedInMobileImage}>
              <img src={linkedinImg} alt="" className={styles.imageWidth} />
            </div>
          </div>
          <div className={styles.footerLeftMobileSection}>
            <p className={styles.footerPrivacyMobileText}>
              {footerPageStrings.footerPrivacy}
            </p>
            <p className={styles.footerTermsMobileText}>
              {footerPageStrings.footerTerms}
            </p>
          </div>
          <div>
            <p className={styles.footerRightMobileSection}>
              {footerPageStrings.footerRights}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
