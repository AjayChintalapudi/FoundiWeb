import React, { useState } from 'react';
import NavBar from 'components/NavBar/NavBar';
import {
  playicon,
  learnmore,
  uparrow,
  downarrow,
  closeicontwo,
  passwordhideicon,
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import {
  CollabarateData,
  FeatureData,
  GetAppData,
  ProductsData,
  QuestionAnswerData,
} from 'constants/CardsData';
import FeaturesCard from 'components/FeaturesCard/FeaturesCard';
import Products from 'components/Products/Products';
import QuestionAnswer from 'components/Accordion/QuestionAnswer';
import Modal from 'components/Modal/Modal';
import Footer from 'components/Footer/Footer';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import Input from 'components/Input/Input';

const Home = () => {
  const { home } = englishStrings;

  //------------ Accordion Start--------------------
  const [collapse, setCollapse] = useState(0);
  const showAnswer = (index) => {
    if (collapse === index) {
      setCollapse(null);
    }
    setCollapse(index);
  };

  //------------- Accordion End----------------------

  //------------ ReturnSection Modal Start-----------
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  //---------- ReturnSectiomn Modal End-------------

  //---------- BannerSection Model Start-----------

  const [videoOpen, setVideoOpen] = useState(false);

  const handleVideoOpenModal = () => {
    setVideoOpen(true);
  };

  const handleVideoCloseModal = () => {
    setVideoOpen(false);
  };

  //----------- Banner Section Modal End------------

  // ...Banner Section Start...

  const bannerSection = () => {
    return (
      <div className={styles.bannerContainer}>
        <div className={styles.bannerInsideContainer}>
          <div className={styles.bannerDescription}>
            {bannerHeadingLeft()}
            <div className={styles.bannerInfoRight}>
              {bannerInfoRightPara()}
              {bannerInfoRightVideoDesc()}
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

  const bannerInfoRightVideoDesc = () => {
    return (
      <div className={styles.bannerInfoRightVideoDescContainer}>
        <Modal open={videoOpen} onClose={handleVideoOpenModal}>
          <div className={styles.videoModalContainer}>
            <div className={styles.videoBlock}>
              <div className={styles.videoCloseIcon}>
                <img
                  src={closeicontwo}
                  alt=""
                  className={styles.imageWidth}
                  onClick={handleVideoCloseModal}
                />
              </div>
              <iframe
                width="100%"
                height="100%"
                className={styles.iframeBlock}
                src="https://www.youtube.com/embed/TVQm5lTRMO0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Modal>
        <div
          className={styles.bannerInfoRightVideoDesc}
          onClick={handleVideoOpenModal}
        >
          <img src={playicon} alt="" />
          <p>{home.bannerInfoRightVideoDesc}</p>
        </div>
      </div>
    );
  };

  //... Banner Section End...

  //... Return Section Start...

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
      <div className={styles.returnItemMainContainer}>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <div className={styles.returnItemContainer}>
            <div className={styles.returnItemCloseBlock}>
              <Button
                btName={home.needHelp}
                btnStyles={styles.returnButtonStyles}
              />
              <div className={styles.returnCloseIcon}>
                <img
                  src={closeicontwo}
                  alt=""
                  className={styles.imageWidth}
                  onClick={handleCloseModal}
                />
              </div>
            </div>
            <div className={styles.returnItemInsideContainer}>
              <div className={styles.returnItemInfoBlock}>
                <div className={styles.returnItemDescBlock}>
                  <h1 className={styles.returnItemHeading}>
                    {home.returnItemHeading}
                  </h1>
                  <p className={styles.returnItemDesc}>{home.returnItemDesc}</p>
                </div>
              </div>
              <div className={styles.snoCodeInputBlock}>
                <input
                  className={styles.snoCodeInput}
                  placeholder={home.inputText}
                />
              </div>
              <div className={styles.scanQrCodeBlock}>
                <p className={styles.scanQrCodeText}>{home.scanQrCodeText}</p>
              </div>
            </div>
          </div>
        </Modal>
        <span
          className={styles.returnContainerAnswer}
          onClick={handleOpenModal}
        >
          {home.returnContainerAnswer}
        </span>
      </div>
    );
  };

  //... Return Section End...

  // ...Features Section Start...

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

  //... Features Section End...

  //... Get App Section Start...

  const getAppSection = () => {
    return (
      <div className={styles.getAppContainer}>
        {GetAppData &&
          GetAppData.map((item, index) => {
            return (
              <div className={styles.getAppButtonBlock} key={index}>
                <div className={styles.getAppImage}>
                  <img
                    src={item.getAppImg}
                    alt={item.getAppAltText}
                    className={styles.imageWidth}
                  />
                </div>
                <div className={styles.getAppDesc}>
                  <p className={styles.getAppText}>{item.getAppText}</p>
                  <p className={styles.getAppHeading}>{item.getAppHeading}</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  };
  //... Get App Section End...

  // ...Product Section Start...
  const productsSection = () => {
    return (
      <div className={styles.productsTitleInfo}>
        {productsTitleInfo()}
        {productMainContainer()}
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

  const productMainContainer = () => {
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

  //... Product section End...

  // ...Question Answer Section Start...
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
              upArrow={uparrow}
              downArrow={downarrow}
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

  // ...Question Answer Section End...

  //... Sustainability Section Start...

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

  //... Sustainability Section End...

  // ...Collabarate Section Start...

  const collabarateSection = () => {
    return (
      <div className={styles.collabarateContainer}>
        <div className={styles.collabarateInsideContainer}>
          {collabarateTitleInfo()}
          {collabarateButtons()}
        </div>
      </div>
    );
  };

  const collabarateTitleInfo = () => {
    return (
      <div className={styles.collabarateTitleInfo}>
        <h3 className={styles.collabarateHeading}>{home.collabarateHeading}</h3>
      </div>
    );
  };

  const collabarateButtons = () => {
    return (
      <div className={styles.collabarateButtons}>
        {CollabarateData &&
          CollabarateData.map((item, index) => {
            return (
              <Button
                key={index}
                btnStyles={styles.collabarateBtnStyle}
                image={item.buttonImage}
                imageWrapperStyle={styles.imageWrapperStyle}
                imgStyles={styles.imgStyles}
                indexNo={index}
              />
            );
          })}
      </div>
    );
  };

  //... Collabarate Section End...

  //... Footer Section Start...
  const FooterSection = () => {
    return (
      <div>
        <Footer />
      </div>
    );
  };

  //... Footer Section End...

  return (
    <div className={styles.homeSection}>
      <NavBar
        navbarMenuItems={styles.navbarMenuItems}
        navbarContainer={styles.navbarContainer}
      />
      {bannerSection()}
      {returnSection()}
      {featuresSection()}
      {getAppSection()}
      {productsSection()}
      {questionAnswerSection()}
      {sustainabilitySection()}
      {collabarateSection()}
      {FooterSection()}
    </div>
  );
};

export default Home;
