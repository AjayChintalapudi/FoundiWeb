import React from 'react';
import styles from './styles.module.css';
import { LeftImg, RightImg } from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { englishStrings } from 'resources/Strings/eng';

const { prooductsPageStrings } = englishStrings;
const Products = () => {
  const productsHeroSection = () => {
    return (
      <div className={styles.productsHeroSection}>
        <div className={styles.insideProductsHeroSection}>
          {productsHeroTopSection()}
          {productsHeroBottomSection()}
        </div>
      </div>
    );
  };

  const productsHeroTopSection = () => {
    return (
      <div className={styles.productsMiddleHeroSection}>
        <div className={styles.leftProductsHeroSection}>
          <img src={LeftImg} alt="" />
        </div>
        <div className={styles.productsTextContainer}>
          <div className={styles.productsHeroTextSection}>
            <div className={styles.productsHeroText}>
              <p className={styles.productsHeroSectionHeading}>
                {prooductsPageStrings.productsHeroSectionHeading}
              </p>
              <p className={styles.productsHeroSectionPara}>
                {prooductsPageStrings.productsHeroSectionPara}
              </p>
            </div>
            <div className={styles.productsHeroButtonSection}>
              <Button
                btName={prooductsPageStrings.productsHeroSectionButton}
                btnStyles={styles.ProductsButton}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightProductsHeroSection}>
          <img src={RightImg} alt="" />
        </div>
      </div>
    );
  };
  const productsHeroBottomSection = () => {
    return (
      <div className={styles.productsHeroBottomSection}>
        <span className={styles.productsSpanOne}></span>
        <span className={styles.productsSpanTwo}></span>
        <span className={styles.productsSpanThree}></span>
      </div>
    );
  };

  const productsbannerSection = () => {
    <div className={styles.productsBannerSection}>
      <div className={styles.insideProductsBannerSection}></div>
    </div>;
  };

  return (
    <div>
      {productsHeroSection()}
      {/* {productsbannerSection()} */}
    </div>
  );
};

export default Products;
