import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { LeftImg, RightImg } from 'resources/Images/Images';
import Button from 'components/Button/Button';
import { englishStrings } from 'resources/Strings/eng';
import { ProductsCategoriesData } from 'constants/CardData/CardData';
import CartItem from 'components/CartItems/CartItem';
import Footer from 'components/Footer/Footer';
import NavBar from 'components/NavBar/NavBar';
import { useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const { prooductsPageStrings } = englishStrings;
const Products = () => {
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // scroll to top of the page onloading
  const navigate = useNavigate();
  // Active menu bar item
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);
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
    return (
      <div className={styles.productsBannerSection}>
        <div className={styles.insideProductsBannerSection}>
          {productsBannerHeaderSection()}
          {productsBannerFooterSection()}
        </div>
      </div>
    );
  };
  
  const productsBannerHeaderSection = () => {
    return (
      <div className={styles.productsBannerTopSection}>
        <p className={styles.productsBannerCategorieOne}>
          {prooductsPageStrings.productsCategorietext}
        </p>
        <p className={styles.productsBannerHoliday}>
          {prooductsPageStrings.productsCategorietext1}
        </p>
        <p className={styles.productsBannerCategorieTwo}>
          {prooductsPageStrings.productsCategorietext2}
        </p>
        <p className={styles.productsBannerCategorieThree}>
          {prooductsPageStrings.productsCategorietext3}
        </p>
        <p className={styles.productsBannerCategorieFour}>
          {prooductsPageStrings.productsCategorietext4}
        </p>
      </div>
    );
  };

  const productsBannerFooterSection = () => {
    return (
      <div className={styles.productsCartSection}>
        {ProductsCategoriesData &&
          ProductsCategoriesData.map((item, index) => {
            const isActive = location.pathname === activeItem;
            return (
              <CartItem
                key={index}
                className={isActive ? styles.activeItem : ''}
                productImg={item.productImg}
                productTagHeading={item.productTagHeading}
                productPrice={item.productPrice}
                offerPrice={item.offerPrice}
                onClick={() => handleItemClick('/review')}
              />
            );
          })}
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      {productsHeroSection()}
      {productsbannerSection()}
      <Footer />
    </div>
  );
};

export default Products;
