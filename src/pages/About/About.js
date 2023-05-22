import React from 'react';
import styles from './styles.module.css';
import { SubscriptionCategoriesData } from 'constants/CardData/CardData';
import { englishStrings } from 'resources/Strings/eng';
import {
  aboutImg,
  appleImg,
  cartImg,
  heartImg,
  lockImg,
  messageImg,
  pauseImg,
  playStoreImg,
  redplusImg,
  timeImg,
} from 'resources/Images/Images';
import Footer from 'components/Footer/Footer';

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
const CartData = [
  {
    id: 1,
    cartImg: cartImg,
    cartpara: 'Vast collection of products for registering belongings',
  },
  {
    id: 2,
    cartImg: redplusImg,
    cartaltName: '',
    cartpara: 'Easy setup and item registration process',
  },

  {
    id: 3,
    cartImg: messageImg,
    cartaltName: '',
    cartpara: 'Messenger functions without having an app',
  },
  {
    id: 4,
    cartImg: lockImg,
    cartaltName: '',
    cartpara: 'Increased privacy for both users and finders',
  },
  {
    id: 5,
    cartImg: timeImg,
    cartaltName: '',
    cartpara: 'Life-long use, no battery or charging required',
  },
  {
    id: 6,
    cartImg: heartImg,
    cartaltName: '',
    cartpara: 'Sustainable solution + Reliable everywhere and every time',
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
          {aboutSubscriptionTopSection()}
          {aboutSubscriptionBottomSection()}
        </div>
      </div>
    );
  };

  const aboutSubscriptionTopSection = () => {
    return (
      <div className={styles.aboutSubscriptionText}>
        <h4 className={styles.subscriptionHeading}>
          {aboutPageStrings.aboutSubscriptionHeading}
        </h4>
        <p className={styles.subscriptionPara}>
          {aboutPageStrings.aboutSubscriptionPara}
        </p>
      </div>
    );
  };
  const aboutSubscriptionBottomSection = () => {
    return (
      <div className={styles.subscriptionPlannerData}>
        {SubscriptionCategoriesData.map((item, index) => {
          return (
            <div
              key={index}
              className={index === 0 ? styles.subscriptionFreepack : styles.odd}
            >
              <div className={styles.insideSubscriptionFreepack}>
                <div className={styles.subscriptionFreePackTopText}>
                  <p className={styles.subscriptionStaterPlan}>
                    {item.subscriptionText}
                  </p>
                  <p className={styles.subscriptionLifeTime}>
                    {item.subscriptionTextOne}
                    <span className={styles.subscriptionPrice}>
                      {item.subscriptionTextPrice}
                    </span>
                  </p>
                </div>
                <div className={styles.subscriptionFreePackBottomText}>
                  <div className={styles.subscriptionLimit}>
                    <div className={styles.subscriptionGreenIcon}>
                      <img
                        src={item.subscriptionGreenImage}
                        alt={item.subscriptionaltName}
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.subscriptionLimitTimeText}>
                      {item.subscriptionTextTwo}
                    </p>
                  </div>
                  <div className={styles.subscriptionValidity}>
                    <div className={styles.subscriptionBlueIcon}>
                      <img
                        src={item.subscriptionGreenImage}
                        alt={item.subscriptionaltName}
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.subscriptionValidityText}>
                      {item.subscriptionTextThree}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const aboutFooterSection = () => {
    return (
      <div className={styles.aboutFooterSection}>
        <div className={styles.insideAboutFooterSection}>
          {aboutFooterTopContainer()}
          {aboutFooterBottomContainer()}
        </div>
      </div>
    );
  };
  const aboutFooterTopContainer = () => {
    return (
      <div className={styles.abooutFooterTopSection}>
        <h4 className={styles.aboutFooterHeading}>
          {aboutPageStrings.aboutFooterHeading}
        </h4>
        <p className={styles.aboutFooterPara}>
          {aboutPageStrings.aboutFooterPara}
        </p>
      </div>
    );
  };
  const aboutFooterBottomContainer = () => {
    return (
      <div className={styles.abooutFooterCartSection}>
        {CartData.map((item, index) => {
          return (
            <div key={index}>
              <div className={styles.aboutFooterBottomSection}>
                <div className={styles.insideAboutFooterBottomSection}>
                  <div className={styles.aboutCartImageSection}>
                    <img
                      src={item.cartImg}
                      alt={item.cartaltName}
                      className={styles.imageWidth}
                    />
                  </div>
                  <p className={styles.aboutCartParaText}>{item.cartpara}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div>
      {aboutTopSection()}
      {aboutMiddleSection()}
      {aboutSubscriptionSection()}
      {aboutFooterSection()}
      <Footer />
    </div>
  );
};

export default About;
