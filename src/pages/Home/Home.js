import React, { useState } from 'react';
import styles from './styles.module.css';
import NavBar from 'components/NavBar/NavBar';
import { playicon } from 'resources/Images/Images';
import { learnmore } from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import {
  FeatureData,
  ProductsData,
  QuestionAnswerData,
} from 'components/CardsData/CardsData';
import FeaturesCard from 'components/FeaturesCard/FeaturesCard';
import Products from 'components/Products/Products';
import QuestionAnswer from 'components/Accordion/QuestionAnswer';
import Modal from 'components/Modal/Modal';

const Home = () => {
  const {home} =englishStrings;

  // Accordion QuestionAnswer Section
  const [collapse, setCollapse] = useState(0);
  const showAnswer = (index) => {
    if (collapse === index) {
      setCollapse(null);
    }
    setCollapse(index);
  };

  // Modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const bannerSection = () => {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerInsideContainer}>
          <NavBar />
          <div className={styles.bannerDescription}>
            {bannerHeadingLeft()}
            <div className={styles.bannerInfoRight}>
              {bannerInfoRightPara()}
              <div
                className={styles.bannerInfoRightVideoDesc}
                onClick={() => setIsVideoOpen(true)}
              >
                <img src={playicon} alt="" />
                <p>{home.bannerInfoRightVideoDesc}</p>
              </div>
              {isVideoOpen && (
                <Modal
                  setIsVideoOpen={setIsVideoOpen}
                  isVideoOpen={isVideoOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const bannerHeadingLeft = () => {
    return (
      <div className={styles.bannerHeadingLeft}>
        <h1>{home.bannerHeading}</h1>
      </div>
    );
  };

  const bannerInfoRightPara = () => {
    return (
      <div className={styles.bannerInfoRightPara}>
        <p>{home.bannerInfoRightPara}</p>
      </div>
    );
  };

  const returnSection = () => {
    return (
      <div className={styles.returnContainer}>
        {returnContainerQuestion()}
        {returnContainerAnswer()}
      </div>
    );
  };

  const returnContainerQuestion = () => {
    return (
      <span className={styles.returnContainerQuestion}>
        {home.returnContainerQuestion}
      </span>
    );
  };

  const returnContainerAnswer = () => {
    return (
      <span className={styles.returnContainerAnswer}>
        {home.returnContainerAnswer}
      </span>
    );
  };

  const featuresSection = () => {
    return (
      <div className={styles.featuresContainer}>
        {featuresTitleInfo()}
        {featuresData()}
      </div>
    );
  };

  const featuresTitleInfo = () => {
    return (
      <div className={styles.featuresTitleInfo}>
        <h2 className={styles.featureTitle}>{home.featureTitle}</h2>
        <p className={styles.featureTitleDesc}>{home.featureTitleDesc}</p>
      </div>
    );
  };

  const featuresData = () => {
    return (
      <div className={styles.featuresData}>
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
        {productsTitleInfo()}
        {mainContainer()}
        {browseProducts()}
      </div>
    );
  };

  const productsTitleInfo = () => {
    return (
      <div className={styles.productsTitleInfo}>
        <h2 className={styles.productsTitleHeading}>
          {home.productsTitleHeading}
        </h2>
        <p className={styles.productsTitleDesc}>{home.productsTitleDesc}</p>
      </div>
    );
  };

  const mainContainer = () => {
    return (
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
    );
  };

  const browseProducts = () => {
    return (
      <div className={styles.browseProducts}>
        <span className={styles.browseProductsHeading}>
          {home.browseProducts}
        </span>
        <span>{home.browserProductIcon}</span>
      </div>
    );
  };

  const questionAnswerSection = () => {
    return (
      <div className={styles.questionAnswerTitleInfo}>
        {questionAnswerTitleInfo()}
        {questionAnswerContainer()}
        {letsTalk()}
      </div>
    );
  };

  const questionAnswerTitleInfo = () => {
    return (
      <div className={styles.questionAnswerTitleInfo}>
        <h2 className={styles.questionAnswerHeading}>
          {home.questionAnswerHeading}
        </h2>
        <p className={styles.questionAnswerDesc}>{home.questionAnswerDesc}</p>
      </div>
    );
  };

  const questionAnswerContainer = () => {
    return (
      <div className={styles.questionAnswerContainer}>
        {QuestionAnswerData &&
          QuestionAnswerData.map((item, index) => (
            <QuestionAnswer
              key={index}
              question={item.question}
              answer={item.answer}
              upArrow={item.upArrow}
              downArrow={item.downArrow}
              onClick={() => {
                showAnswer(index);
              }}
              collapse={collapse}
              index={index}
            />
          ))}
      </div>
    );
  };

  const letsTalk = () => {
    return (
      <div className={styles.letsTalk}>
        <span className={styles.letsTalkQuestion}>{home.letsTalkQuestion}</span>
        <span className={styles.letsTalkHeading}>{home.letsTalkHeading}</span>
        <span className={styles.letsTalkIcon}>{home.letsTalkIcon}</span>
      </div>
    );
  };

  const sustainabilitySection = () => {
    return (
      <div className={styles.sustainabilityContainer}>
        <div className={styles.sustainabilityInsideContainer}>
          {sustainabilityHeadingBlock()}
          <div className={styles.sustainabilityDescContainer}>
            {sustainabilityDescBlock()}
            {learnMoreContainer()}
          </div>
        </div>
      </div>
    );
  };

  const sustainabilityHeadingBlock = () => {
    return (
      <div className={styles.sustainabilityHeadingBlock}>
        <h1 className={styles.sustainabilityHeading}>
          {home.sustainabilityHeading}
        </h1>
      </div>
    );
  };

  const sustainabilityDescBlock = () => {
    return (
      <div className={styles.sustainabilityDescBlock}>
        <p className={styles.sustainabilityDesc}>{home.sustainabilityDesc}</p>
      </div>
    );
  };

  const learnMoreContainer = () => {
    return (
      <div className={styles.learnMoreContainer}>
        <img
          src={learnmore}
          alt={home.learnMoreAlt}
          className={styles.imageWidth}
        />
        <p className={styles.learnMoreDesc}>{home.learnMore}</p>
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
      {sustainabilitySection()}
    </div>
  );
};

export default Home;
