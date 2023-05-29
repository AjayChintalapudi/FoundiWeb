import React, { useEffect, useState } from 'react';
import { englishStrings } from 'resources/Strings/eng';
import {
  eventImg,
  RightImg,
  LeftImg,
  linkImg,
  droppedImg,
  eventImg3,
  eventImg2,
} from 'resources/Images/Images';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import styles from './styles.module.css';
const { eventPageStrings } = englishStrings;
const Employee = [
  {
    id: 1,
    emoployeeHeading: eventPageStrings.eventsEmployeeHeading,
    emoployeePara: eventPageStrings.eventsEmployeePara,
  },
  {
    id: 2,
    emoployeeHeading: eventPageStrings.eventsCustomerHeading,
    emoployeePara: eventPageStrings.eventsCustomerPara,
  },
  {
    id: 3,
    emoployeeHeading: eventPageStrings.eventsCompanyHeading,
    emoployeePara: eventPageStrings.eventsCompanyPara,
  },
];
const EventData = [
  {
    id: 1,
    eventsHeading: eventPageStrings.eventsHeroSectionHeading,
    eventsPara: eventPageStrings.eventsHeroSectionPara,
    eventsImage: eventImg3,
  },
  {
    id: 2,
    eventsHeading: eventPageStrings.eventsHeroSectionHeading2,
    eventsPara: eventPageStrings.eventsHeroSectionPara,
    eventsImage: eventImg2,
  },
  {
    id: 3,
    eventsHeading: eventPageStrings.eventsHeroSectionHeading3,
    eventsPara: eventPageStrings.eventsHeroSectionPara,
    eventsImage: eventImg,
  },
];
const Events = () => {
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // scroll to top of the page onloading
  const [indexNo, setIndexNo] = useState(0);
  const onLeftClick = (index) => {
    if (index === 0) {
      setIndexNo(2);
    } else {
      setIndexNo(indexNo - 1);
    }
  };
  const onRightClick = (index) => {
    if (index === 2) {
      setIndexNo(0);
    } else {
      setIndexNo(indexNo + 1);
    }
  };
  const heroSection = () => {
    return (
      <div className={styles.eventsHeaderSection}>
        <div className={styles.eventInsideContainerStyle}>
          {EventData.map((item, index) => {
            return (
              <div key={index}>
                {indexNo === index && (
                  <div key={index} className={styles.insideEventsHeaderSection}>
                    {eventLeftHeroSection(index)}

                    {eventHeroMiddleSction(item, index)}
                    {eventRightHeroSection(index)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const eventLeftHeroSection = (index) => {
    return (
      <div className={styles.eventLeftIcon} onClick={() => onLeftClick(index)}>
        <img src={LeftImg} alt="" className={styles.imageWidth} />
      </div>
    );
  };
  const eventHeroMiddleSction = (item, index) => {
    return (
      <div className={styles.eventsMiddleSection}>
        <div className={styles.eventGapContainerTabView}>
          <div className={styles.eventsHeaderTextSection}>
            <h6 className={styles.eventsHeaderTextHeading}>
              {item.eventsHeading}
            </h6>
            <p className={styles.eventsHeaderParaHeading}>{item.eventsPara}</p>
          </div>
          <div className={styles.tabViewEventIcons}>
            <div
              className={styles.tabViewEventLeftIcon}
              onClick={() => onLeftClick(index)}
            >
              <img src={LeftImg} alt="" />
            </div>
            <div
              className={styles.tabViewEventLeftIcon}
              onClick={() => onRightClick(index)}
            >
              <img src={RightImg} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.eventsHoverSection}>
          <div className={styles.eventsHeaderImage}>
            <img
              src={item.eventsImage}
              alt=""
              className={styles.eventImageWidth}
            />
          </div>
          <div className={styles.eventButtonSection}>
            <Button
              btName={eventPageStrings.eventsHeroSectionButton}
              btnStyles={styles.eventButton}
              image={linkImg}
            />
          </div>
        </div>
      </div>
    );
  };
  const eventRightHeroSection = (index) => {
    return (
      <div
        className={styles.eventRightIcon}
        onClick={() => onRightClick(index)}
      >
        <img src={RightImg} alt="" className={styles.imageWidth} />
      </div>
    );
  };

  const bannerSection = () => {
    return (
      <div className={styles.eventsBannerSection}>
        <div className={styles.insideEventsBannerSection}>
          {eventBannerTopSection()}
          {eventBannerBottomSection()}
        </div>
      </div>
    );
  };

  const eventBannerTopSection = () => {
    return (
      <div className={styles.eventsBannerHeaderSection}>
        <p>{eventPageStrings.eventsBannerSectionHeaderText}</p>
      </div>
    );
  };
  const eventBannerBottomSection = () => {
    return (
      <div className={styles.eventsBannerBottomSection}>
        <div className={styles.eventsBannerBottomHeading}>
          <h6 className={styles.eventsBannerBottomHeadingText}>
            {eventPageStrings.eventsBannerSectionHeading}
          </h6>
        </div>
        <div className={styles.eventsBannerBottomDropSection}>
          <div className={styles.eventsBannerDropSection}>
            <div className={styles.eventsBannerDropLeftSection}>
              <img src={droppedImg} className={styles.imageWidth} />
            </div>
            <div className={styles.eventsBannerDropRightSection}>
              <h6 className={styles.eventsBannerRightHeading}>
                {eventPageStrings.eventsBannerSectionDropHeading}
              </h6>
              <p className={styles.eventsBannerRightPara}>
                {eventPageStrings.eventsBannerSectionDropPara}
              </p>
              <p className={styles.eventsBannerRightPara}>
                {eventPageStrings.eventsBannerSectionDropParaOne}
              </p>
            </div>
          </div>
          <div className={styles.eventsBannerEmployeeSection}>
            {Employee.map((item, index) => {
              return (
                <div key={index} className={styles.eventBannerEmployeSection}>
                  <div className={styles.eventBannerEmployeInsideSection}>
                    <h6 className={styles.eventBannerEmployeeHeading}>
                      {item.emoployeeHeading}
                    </h6>
                    <p className={styles.eventBannerEmployeePara}>
                      {item.emoployeePara}
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

  return (
    <div>
      <NavBar />
      {heroSection()}
      {bannerSection()}
      <Footer />
    </div>
  );
};

export default Events;
