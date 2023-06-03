import React, { useEffect, useState } from 'react';
import {
  cart,
  profile,
  menu,
  englishicon,
  swedishicon,
  check,
  uncheck,
  dangercircle,
  closeicon,
  adduser,
  languageblackicon,
  cartblackicon,
  profileblackicon,
  foundiblackicon,
  foundilogowhite,
  hamberblackicon,
  languageicon,
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import PopOver from 'components/PopOver/PopOver';
import Button from 'components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useAppData } from 'providers/AppDataProvider';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const NavBar = (props) => {
  const { navbar } = englishStrings;

  // scroll to top page

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // NavbarActive Links
  const location = useLocation();

  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  // Language Change
  const { strings, setLanguage, currentLanguage } = useAppData();
  console.log(currentLanguage);
  const selectSweLanguage = () => {
    setLanguage('SE');
  };

  const selectEngLanguage = () => {
    setLanguage('EN');
  };

  // Based on the route path change images and logos
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, [navigate]);

  // Hamberger Menu

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // close icon
  const [showPopup, setShowPopup] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // language menu mobile

  const [openLanguage, setOpenLanguage] = useState(false);

  const handleOpenLanguage = () => {
    setOpenLanguage(!openLanguage);
  };

  /*************NAVBAR LOGOLEFT START****************/
  const navbarLogoLeft = () => {
    return (
      <div className={styles.navbarLogoLeft} onClick={() => navigate('/')}>
        <img
          src={isHome ? foundilogowhite : foundiblackicon}
          className={styles.foundiLogo}
          alt="foundiLogo"
        />
      </div>
    );
  };
  /*************NAVBAR LOGOLEFT END*****************/

  /*************NAVBAR MENUITEMS MIDDLE START****************/
  const navbarMenuItemsMiddle = () => {
    return (
      <div
        className={classNames(styles.navbarMenuItems, props.navbarMenuItems)}
      >
        <p
          onClick={() => handleItemClick('/events')}
          className={activeItem === '/events' ? styles.activeItem : ''}
        >
          {strings.navbar.events}
        </p>
        <p
          onClick={() => handleItemClick('/about')}
          className={activeItem === '/about' ? styles.activeItem : ''}
        >
          {strings.navbar.about}
        </p>
        <p
          onClick={() => handleItemClick('/products')}
          className={activeItem === '/products' ? styles.activeItem : ''}
        >
          {strings.navbar.products}
        </p>
      </div>
    );
  };
  /*************NAVBAR MENUITEMS MIDDLE END****************/

  /*************NAVBAR MENUITEMS RIGHT START****************/
  const navbarMenuItemsRight = () => {
    return (
      <div className={styles.navbarMenuItemsRightContainer}>
        {languageSection()}
        {cartSection()}
        {profileSection()}
        {hambergerMenuSection()}
      </div>
    );
  };

  const languageSection = () => {
    return (
      <div className={styles.navbarMenuItemsRight}>
        <PopOver
          showPopup={showLanguage}
          triggerElement={
            <img
              className={styles.menuItemsRightLogo}
              src={isHome ? languageicon : languageblackicon}
              alt="language"
              onClick={() => setShowLanguage(!showLanguage)}
            />
          }
          /*************CONTENT OF THE LANGUAGE POPUP START********/
          content={
            <div className={styles.languageContainer}>
              {englishLanguageSection()}
              {swedishLanguageSection()}
            </div>
          }
          /*************CONTENT OF THE LANGUAGE POPUP END********/
        />
      </div>
    );
  };

  const englishLanguageSection = () => {
    return (
      <div className={styles.englishBlock} onClick={() => setLanguage('EN')}>
        <div className={styles.englishIcon}>
          <img
            src={currentLanguage === 'EN' ? englishicon : swedishicon}
            alt=""
          />
          <h5
            className={
              currentLanguage === 'EN'
                ? styles.languageSelectedStyle
                : styles.languageStyle
            }
          >
            {strings.navbar.english}
          </h5>
        </div>
        <div className={styles.check}>
          <img src={currentLanguage === 'EN' ? check : uncheck} alt="" />
        </div>
      </div>
    );
  };

  const swedishLanguageSection = () => {
    return (
      <div className={styles.swedishBlock} onClick={() => setLanguage('SE')}>
        <div className={styles.swedishIcon}>
          <img
            src={currentLanguage === 'EN' ? swedishicon : englishicon}
            alt=""
          />
          <h5
            className={
              currentLanguage === 'SE'
                ? styles.languageSelectedStyle
                : styles.languageStyle
            }
          >
            {navbar.swedish}
          </h5>
        </div>
        <div className={styles.check}>
          <img src={currentLanguage === 'EN' ? uncheck : check} alt="" />
        </div>
      </div>
    );
  };

  const cartSection = () => {
    return (
      <div className={styles.navbarMenuItemsRight}>
        <PopOver
          showPopup={showCart}
          triggerElement={
            <img
              className={styles.menuItemsRightCartIcon}
              src={isHome ? cart : cartblackicon}
              alt="cart"
              onClick={() => setShowCart(!showCart)}
            />
          }
          /*************CONTENT OF THE CART POPUP START********/
          content={<div>{cartPopUpContentSection()}</div>}
          /*************CONTENT OF THE CART POPUP END********/
        />
      </div>
    );
  };

  const cartPopUpContentSection = () => {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.cartNothingIcon}>
          <img src={dangercircle} alt="" />
        </div>
        <div className={styles.cartInfo}>
          <p className={styles.cartDesc}>{navbar.nothingInCart}</p>
          <p className={styles.cartShoNow}>{navbar.shopNow}</p>
        </div>
      </div>
    );
  };

  const profileSection = () => {
    return (
      <div className={styles.navbarMenuItemsRight}>
        <PopOver
          showPopup={showPopup}
          triggerElement={
            <img
              className={styles.menuItemsRightLogo}
              src={isHome ? profile : profileblackicon}
              alt="profile"
              onClick={() => setShowPopup(true)}
            />
          }
          /*************CONTENT OF THE PROFILE POPUP START********/
          content={
            <div>
              <div className={styles.profileContainer}>
                {signUpLoginBlock()}
                <div className={styles.signUpBottomBorder}></div>
                {profileIcon()}
                {signUpLoginDescText()}
                {loginSignUpButton()}
              </div>
            </div>
          }
          /*************CONTENT OF THE "CART" POPUP END********/
        />
      </div>
    );
  };

  const signUpLoginBlock = () => {
    return (
      <div className={styles.signUpLoginBlock}>
        <p className={styles.signUpLoginHeading}>{navbar.signUpLoginHeading}</p>
        <div className={styles.closeIcon}>
          <img
            src={closeicon}
            alt=""
            className={styles.imageWidth}
            onClick={() => setShowPopup(false)}
          />
        </div>
      </div>
    );
  };

  const profileIcon = () => {
    return (
      <div className={styles.profileIcon}>
        <img src={adduser} alt="" className={styles.imageWidth} />
      </div>
    );
  };

  const signUpLoginDescText = () => {
    return (
      <div className={styles.signUpLoginDescText}>
        <p className={styles.signUpLoginDesc}>{navbar.signUpLoginDesc}</p>
      </div>
    );
  };

  const hambergerMenuSection = () => {
    return (
      <div>
        <div className={styles.navbarMenuItemsMenuIcon}>
          <img
            onClick={toggleMenu}
            className={styles.menuItemsRightMenuIcon}
            src={isHome ? menu : hamberblackicon}
            alt="menu"
          />
        </div>

        {isMenuOpen && (
          <div className={styles.toggleMenuContainer}>
            <div className={styles.headerContainer}>
              <div
                className={styles.headerLogoLeft}
                onClick={() => navigate('/')}
              >
                <img
                  src={foundiblackicon}
                  alt=""
                  className={styles.imageWidth}
                />
              </div>
              <div className={styles.headerItemsRight}>
                <img src={cartblackicon} alt="" className={styles.imageWidth} />
                <img
                  src={closeicon}
                  alt=""
                  className={styles.imageWidth}
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <div className={styles.headerBottomBorder}></div>
            <div className={styles.headerMenuItemsBlock}>
              <div className={styles.profileContainerMobile}>
                <span>{strings.navbar.profile}</span>
                <Button
                  btName={strings.navbar.logIn}
                  btnStyles={styles.profileLoginBtnStyles}
                  onClick={() => navigate('/login')}
                />
              </div>
              <div
                onClick={() => handleItemClick('/events')}
                className={activeItem === '/events' ? styles.activeItem : ''}
              >
                {strings.navbar.eventsAndBuissness}
              </div>
              <div
                onClick={() => handleItemClick('/about')}
                className={activeItem === '/about' ? styles.activeItem : ''}
              >
                {strings.navbar.about}
              </div>
              <div
                onClick={() => handleItemClick('/products')}
                className={activeItem === '/products' ? styles.activeItem : ''}
              >
                {strings.navbar.products}
              </div>
              {/* Language container Mobile start */}
              <div className={styles.laguageContainerMobile}>
                <p>{strings.navbar.language}</p>
                <span onClick={handleOpenLanguage}>
                  {openLanguage ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </span>
              </div>
              {openLanguage && (
                <div className={styles.languageContainerContentMobileBlock}>
                  <div
                    className={styles.englishBlock}
                    onClick={() => setLanguage('EN')}
                  >
                    <div className={styles.englishIcon}>
                      <img
                        src={
                          currentLanguage === 'EN' ? englishicon : swedishicon
                        }
                        alt=""
                      />
                      <h5
                        className={
                          currentLanguage === 'EN'
                            ? styles.languageSelectedStyle
                            : styles.languageStyle
                        }
                      >
                        {strings.navbar.english}
                      </h5>
                    </div>
                    <div className={styles.check}>
                      <img
                        src={currentLanguage === 'EN' ? check : uncheck}
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className={styles.swedishBlock}
                    onClick={() => setLanguage('SE')}
                  >
                    <div className={styles.swedishIcon}>
                      <img
                        src={
                          currentLanguage === 'EN' ? swedishicon : englishicon
                        }
                        alt=""
                      />
                      <h5
                        className={
                          currentLanguage === 'SE'
                            ? styles.languageSelectedStyle
                            : styles.languageStyle
                        }
                      >
                        {navbar.swedish}
                      </h5>
                    </div>
                    <div className={styles.check}>
                      <img
                        src={currentLanguage === 'EN' ? uncheck : check}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
              {/* Language container Mobile end */}
            </div>
          </div>
        )}
      </div>
    );
  };

  const loginSignUpButton = () => {
    return (
      <div className={styles.loginSignUpButton}>
        <Button
          btName={navbar.logIn}
          btnStyles={styles.loginButtonStyles}
          onClick={() => navigate('/login')}
        />
        <Button
          btName={navbar.signUp}
          btnStyles={styles.signUpButtonStyles}
          onClick={() => navigate('/signup')}
        />
      </div>
    );
  };
  /*************NAVBAR MENUITEMS RIGHT END****************/
  return (
    <div className={classNames(styles.navbarContainer, props.navbarContainer)}>
      {navbarLogoLeft()}
      {navbarMenuItemsMiddle()}
      {navbarMenuItemsRight()}
    </div>
  );
};

export default NavBar;
