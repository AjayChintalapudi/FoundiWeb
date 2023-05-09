import React from 'react';
import styles from './styles.module.css';
import { englishStrings } from 'resources/Strings/eng';
import {
  eventImg,
  RightImg,
  LeftImg,
  linkImg,
  droppedImg,
} from 'resources/Image/Image';
import Button from 'components/Button/Button';
import Footer from 'components/Footer/Footer';
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
const Events = () => {
  const heroSection = () => {
    return (
      <div className={styles.eventsHeaderSection}>
        <div className={styles.eventInsideContainerStyle}>
          <div className={styles.insideEventsHeaderSection}>
            <div className={styles.eventLeftIcon}>
              <img src={LeftImg} alt="" className={styles.imageWidth} />
            </div>
            <div className={styles.eventsMiddleSection}>
              <div className={styles.eventGapContainerTabView}>
                <div className={styles.eventsHeaderTextSection}>
                  <h6 className={styles.eventsHeaderTextHeading}>
                    {eventPageStrings.eventsHeroSectionHeading}
                  </h6>
                  <p className={styles.eventsHeaderParaHeading}>
                    {eventPageStrings.eventsHeroSectionPara}
                  </p>
                </div>
                <div className={styles.tabViewEventIcons}>
                  <div className={styles.tabViewEventLeftIcon}>
                    <img src={LeftImg} alt="" />
                  </div>
                  <div className={styles.tabViewEventLeftIcon}>
                    <img src={RightImg} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.eventsHoverSection}>
                <div className={styles.eventsHeaderImage}>
                  <img
                    src={eventImg}
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
            <div className={styles.eventRightIcon}>
              <img src={RightImg} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const bannerSection = () => {
    return (
      <div className={styles.eventsBannerSection}>
        <div className={styles.insideEventsBannerSection}>
          <div className={styles.eventsBannerHeaderSection}>
            <p>{eventPageStrings.eventsBannerSectionHeaderText}</p>
          </div>
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
                    <div
                      key={index}
                      className={styles.eventBannerEmployeSection}
                    >
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
        </div>
      </div>
    );
  };
  return (
    <div>
      {heroSection()}
      {bannerSection()}
      <Footer />
    </div>
  );
};

export default Events;
