import React from 'react';
import styles from './styles.module.css';
import NavBar from 'components/NavBar/NavBar';
import { playicon } from 'resources/Images/Images';
import { Strings } from 'resources/Strings/eng';
import {
  FeatureData,
  ProductsData,
  QuestionAnswerData,
} from 'components/CardsData/CardsData';
import FeaturesCard from 'components/FeaturesCard/FeaturesCard';
import Products from 'components/Products/Products';
import QuestionAnswer from 'components/Accordion/QuestionAnswer';

const Home = () => {
  const { home } = Strings;
  const bannerSection = () => {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerInsideContainer}>
          <NavBar />
          <div className={styles.bannerDescription}>
            <div className={styles.bannerHeadingLeft}>
              <h1>{home.bannerHeading}</h1>
            </div>
            <div className={styles.bannerInfoRight}>
              <div className={styles.bannerInfoRightPara}>
                <p>{home.bannerInfoRightPara}</p>
              </div>
              <div className={styles.bannerInfoRightVideoDesc}>
                <img src={playicon} alt="" />
                <p>{home.bannerInfoRightVideoDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const returnSection = () => {
    return (
      <div className={styles.returnContainer}>
        <span className={styles.returnContainerQuestion}>
          {home.returnContainerQuestion}
        </span>
        <span className={styles.returnContainerAnswer}>
          {home.returnContainerAnswer}
        </span>
      </div>
    );
  };
  const featuresSection = () => {
    return (
      <div className={styles.featuresContainer}>
        <div className={styles.featuresTitleInfo}>
          <h2 className={styles.featureTitle}>{home.featureTitle}</h2>
          <p className={styles.featureTitleDesc}>{home.featureTitleDesc}</p>
        </div>
        {FeatureData &&
          FeatureData.map((item, index) => (
            <FeaturesCard
              key={index}
              heading={item.heading}
              description={item.description}
              image={item.image}
              name={item.name}
              indexNo={index}
            />
          ))}
      </div>
    );
  };

  const productsSection = () => {
    return (
      <div className={styles.productsTitleInfo}>
        <h2 className={styles.productsTitleHeading}>
          {home.productsTitleHeading}
        </h2>
        <p className={styles.productsTitleDesc}>{home.productsTitleDesc}</p>
        <div className={styles.productsMainContainer}>
          {ProductsData &&
            ProductsData.map((item, index) => (
              <Products
                key={index}
                productsImage={item.productsImage}
                productsAltName={item.productAltName}
                productDetails={item.productDetails}
                productPrice={item.productPrice}
              />
            ))}
        </div>
        <div className={styles.browseProducts}>
          <span className={styles.browseProductsHeading}>
            {home.browseProducts}
          </span>
          <span>{home.browserProductIcon}</span>
        </div>
      </div>
    );
  };

  const questionAnswerSection = () => {
    return (
      <div className={styles.questionAnswerTitleInfo}>
        <h2 className={styles.questionAnswerHeading}>{home.questionAnswerHeading}</h2>
        <p className={styles.questionAnswerDesc}>{home.questionAnswerDesc}</p>
      <div className={styles.questionAnswerContainer}>
        {QuestionAnswerData &&
          QuestionAnswerData.map((item, index) => (
            <QuestionAnswer
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
      </div>
      </div>
    );
  };
  return (
    <div className={styles.homeSection}>
      {bannerSection()}
      {returnSection()}
      {featuresSection()}
      {productsSection()}
      {questionAnswerSection()}
    </div>
  );
};

export default Home;
