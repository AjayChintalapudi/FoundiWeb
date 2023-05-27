import React, { useState } from 'react';
import styles from './styles.module.css';
import { ReviewCategoriesData } from 'constants/CardData/CardData';
import { ReviewRatingData } from 'constants/CardData/CardData';
import { englishStrings } from 'resources/Strings/eng';
import Button from 'components/Button/Button';
import { plusImg, subtractionImg, downArrowImg } from 'resources/Images/Images';
import { Rating } from 'react-simple-star-rating';
import { HiStar } from 'react-icons/hi';

const Review = () => {
  const [cartItem, setCartItem] = useState(0);
  const { reviewPageStrings } = englishStrings;
  const addFunction = () => {
    setCartItem(cartItem + 1);
  };
  const subtractFunction = () => {
    if (cartItem > 0) {
      setCartItem(cartItem - 1);
    }
  };
  const reviewHeroSection = () => {
    return (
      <div className={styles.reviewHeroSection}>
        <div className={styles.insideReviewHeroSetion}>
          <div className={styles.reviewHeroTopSection}>
            <div className={styles.reviewHeroLeftSection}>
              <div className={styles.reviewHeroLeftImage}>
                {ReviewCategoriesData &&
                  ReviewCategoriesData.map((item, index) => {
                    return (
                      <div key={index}>
                        <img
                          src={item.reviewImg}
                          alt={item.reviewAlt}
                          className={styles.reviewImage}
                        />
                      </div>
                    );
                  })}
              </div>
              <div className={styles.reviewHeroLeftIndicator}>
                <span className={styles.reviewIndicatorOne}></span>
                <span className={styles.reviewIndicatorTwo}></span>
                <span className={styles.reviewIndicatorThree}></span>
              </div>
            </div>
            <div className={styles.reviewHeroRightSection}>
              <div className={styles.reviewHeroRightText}>
                <h6 className={styles.reviewHeroRightHeading}>
                  {reviewPageStrings.reviewHeroText}
                </h6>
                <p className={styles.reviewHeroRightPara}>
                  {reviewPageStrings.reviewHeroPara}
                </p>
              </div>
              <div className={styles.reviewPriceSection}>
                <p className={styles.reviewOriginalPrice}>$59.00 </p>
                <p className={styles.reviewOfferPrice}>$99.00</p>
              </div>
              <div className={styles.reviewButtonSection}>
                <div className={styles.reviewCartButton}>
                  {cartItem === 0 ? (
                    <p
                      className={styles.reviewCartStyles}
                      onClick={() => addFunction()}
                    >
                      {reviewPageStrings.reviewHeroCart}
                    </p>
                  ) : (
                    <div className={styles.reviewCartAddSection}>
                      <div
                        className={styles.reviewPlusIcon}
                        onClick={() => subtractFunction()}
                      >
                        <img src={subtractionImg} alt="" />
                      </div>
                      <p className={styles.reviewCartNumber}>{cartItem}</p>
                      <div
                        className={styles.reveiwSubtractionIcon}
                        onClick={() => addFunction()}
                      >
                        <img src={plusImg} alt="" />
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.reviewBuyButton}>
                  <Button btName={'Buy now'} btnStyles={styles.buyButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const fillColor = ['#FFC700'];
  const customIcons = [
    { icon: <HiStar size={24} /> },
    { icon: <HiStar size={24} /> },
    { icon: <HiStar size={24} /> },
    { icon: <HiStar size={24} /> },
    { icon: <HiStar size={24} /> },
  ];
  const reviewMiddleSection = () => {
    return (
      <div className={styles.reviewMiddleContent}>
        <div className={styles.insideReviewMiddleContent}>
          <div className={styles.reviewMiddleTopSection}>
            <h5 className={styles.reviewMiddleRatingText}>
              {reviewPageStrings.reviewMiddleRating}
            </h5>
            <div className={styles.reviewMiddleRecentText}>
              <p className={styles.reviewMiddlePara}>
                {reviewPageStrings.reviewMiddleParaText}
              </p>
              <div className={styles.reviewMiddleDownIcon}>
                <img
                  src={downArrowImg}
                  alt=""
                  className={styles.reviewImageWidth}
                />
              </div>
            </div>
          </div>
          <div className={styles.reviewMiddleRatingSection}>
            {ReviewRatingData &&
              ReviewRatingData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.insideReviewMiddleRatingSection}
                  >
                    <Rating
                      customIcons={customIcons}
                      initialValue={item.rating}
                      allowFraction
                      readonly={true}
                      fillColorArray={fillColor}
                    />
                    <div className={styles.reviewRatingPara}>
                      <p className={styles.reviewRatingParaText}>
                        {item.reviewParaDescription}
                      </p>
                    </div>
                    <div className={styles.reviewUserSection}>
                      <p className={styles.reviewUserName}>
                        {item.reviewUserName}
                      </p>
                      <p className={styles.reviewUserDate}>
                        {item.reviewDateMonth}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className={styles.reviewMiddleBottomSection}>
            <p className={styles.reviewMiddleBottomSectionText}>
              {reviewPageStrings.reviewMiddleReviewText}
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      {reviewHeroSection()}
      {reviewMiddleSection()}
    </div>
  );
};

export default Review;
