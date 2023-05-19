import React from 'react';
import { englishStrings } from 'resources/Strings/eng';
import {
  aboutImg,
  appleImg,
  pauseImg,
  playStoreImg,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import styles from './styles.module.css';

const { aboutPageStrings } = englishStrings;
const AboutData = [
  {
    id: 1,
    aboutHeaing: aboutPageStrings.aboutHoursHeading,
    aboutPara: aboutPageStrings.aboutHoursPara,
  },
  {
    id: 2,
    aboutHeaing: aboutPageStrings.aboutPercentageHeading,
    aboutPara: aboutPageStrings.aboutPercentagePara,
  },
  {
    id: 3,
    aboutHeaing: aboutPageStrings.aboutAverageHeading,
    aboutPara: aboutPageStrings.aboutAveragePara,
  },
  {
    id: 4,
    aboutHeaing: aboutPageStrings.aboutkrHeading,
    aboutPara: aboutPageStrings.aboutKrPara,
  },
];

const About = () => {
  const aboutTopSection = () => {
    return (
      <div className={styles.aboutHeroSection}>
        <div className={styles.insideAboutHeroSection}>
          {aboutHeroTopContainer()}
          {aboutHeroMiddleContainer()}
          {aboutHeroBottomContainer()}
        </div>
      </div>
    );
  };

  const aboutHeroTopContainer = () => {
    return (
      <div className={styles.aboutHeroTopSection}>
        <h4 className={styles.aboutHeroTopHeading}>
          {aboutPageStrings.aboutHeroHeading}
        </h4>
        <p className={styles.aboutHeroTopPara}>
          {aboutPageStrings.aboutHeroPara}
        </p>
      </div>
    );
  };
  const aboutHeroMiddleContainer = () => {
    return (
      <div className={styles.aboutHeroMiddleSection}>
        <div className={styles.aboutHeroMiddleVideo}>
          <img src={aboutImg} alt="" className={styles.imageWidth} />
        </div>
        <div className={styles.aboutHeroPauseButton}>
          <img src={pauseImg} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };
  const aboutHeroBottomContainer = () => {
    return (
      <div className={styles.aboutHeroBottomSection}>
        <div className={styles.aboutHeroFooterText}>
          <p className={styles.aboutHeroFooterPara}>
            {aboutPageStrings.aboutPeoplePara}
            <span className={styles.aboutHeroSpan}>
              {aboutPageStrings.aboutPeopleParaOne}
            </span>
            {aboutPageStrings.aboutPeopleParaTwo}
          </p>
          <div className={styles.aboutHeroFooterData}>
            {AboutData.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.aboutHeroFooterDataText}>
                    <h3 className={styles.aboutHeroHoursHeading}>
                      {item.aboutHeaing}
                    </h3>
                    <p className={styles.aboutHeroHoursPara}>
                      {item.aboutPara}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const aboutMiddleSection = () => {
    return (
      <div className={styles.aboutMiddleContainer}>
        <div className={styles.insideAboutMiddleContainer}>
          <div className={styles.appStoreSection}>
            <img src={appleImg} alt="" className={styles.appleImageWidth} />
          </div>
          <div className={styles.playStoreSection}>
            <img
              src={playStoreImg}
              alt=""
              className={styles.playStoreImageWidth}
            />
          </div>
        </div>
      </div>
    );
  };

  const aboutSubscriptionSection = () => {
    return (
      <div className={styles.aboutSubscriptionContainer}>
        <div className={styles.insideaboutSubscriptionContainer}>
          <div className={styles.aboutSubscriptionText}>
            <h4 className={styles.subscriptionHeading}>
              We’re a subscription based service
            </h4>
            <p className={styles.subscriptionPara}>
              However, as a part of promotional gift, users can enjoy 365 days
              of serives for free. The following are the maximum prices, the
              minimum price that users have to pay will vary depending on what
              active plan they are upgrading from.
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* {aboutTopSection()} */}
      {aboutMiddleSection()}
      {/* {aboutSubscriptionSection()} */}
    </div>
  );
};

export default About;
