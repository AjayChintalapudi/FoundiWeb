import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import {
  language,
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
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import PopOver from 'components/PopOver/PopOver';
import Button from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

const NavBar = (props) => {
  const { navbar } = englishStrings;

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
        <p onClick={() => navigate('/events')}>{navbar.events}</p>
        <p onClick={() => navigate('/about')}>{navbar.about}</p>
        <p onClick={() => navigate('/products')}>{navbar.products}</p>
      </div>
    );
  };
  /*************NAVBAR MENUITEMS MIDDLE END****************/

  /*************NAVBAR MENUITEMS RIGHT START****************/
  const navbarMenuItemsRight = () => {
    return (
      <div className={styles.navbarMenuItemsRightContainer}>
        {/* =============NAVBAR MENU ITEMS RIGHT "LANGUAGE" ICON START==============*/}
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightLogo}
                src={isHome ? language : languageblackicon}
                alt="language"
              />
            }
            /*************CONTENT OF THE LANGUAGE POPUP START********/
            content={
              <div className={styles.languageContainer}>
                <div className={styles.englishBlock}>
                  <div className={styles.englishIcon}>
                    <img src={englishicon} alt="" />
                    <h5 className={styles.englishText}>{navbar.english}</h5>
                  </div>
                  <div className={styles.check}>
                    <img src={check} alt="" />
                  </div>
                </div>
                <div className={styles.swedishBlock}>
                  <div className={styles.swedishIcon}>
                    <img src={swedishicon} alt="" />
                    <h5 className={styles.swedishText}>{navbar.swedish}</h5>
                  </div>
                  <div className={styles.check}>
                    <img src={uncheck} alt="" />
                  </div>
                </div>
              </div>
            }
            /*************CONTENT OF THE LANGUAGE POPUP END********/
          />
        </div>
        {/* =============NAVBAR MENU ITEMS RIGHT "LANGUAGE" ICON END==============*/}

        {/* =============NAVBAR MENU ITEMS RIGHT "CART" ICON START==============*/}
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightCartIcon}
                src={isHome ? cart : cartblackicon}
                alt="cart"
              />
            }
            /*************CONTENT OF THE CART POPUP START********/
            content={
              <div className={styles.cartContainer}>
                <div className={styles.cartNothingIcon}>
                  <img src={dangercircle} alt="" />
                </div>
                <div className={styles.cartInfo}>
                  <p className={styles.cartDesc}>{navbar.nothingInCart}</p>
                  <p className={styles.cartShoNow}>{navbar.shopNow}</p>
                </div>
              </div>
            }
            /*************CONTENT OF THE CART POPUP END********/
          />
        </div>
        {/* =============NAVBAR MENU ITEMS RIGHT "CART" ICON END==============*/}

        {/* =============NAVBAR MENU ITEMS RIGHT "PROFILE" ICON START============= */}
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightLogo}
                src={isHome ? profile : profileblackicon}
                alt="profile"
              />
            }
            /*************CONTENT OF THE PROFILE POPUP START********/
            content={
              <div className={styles.profileContainer}>
                <div className={styles.signUpLoginBlock}>
                  <p className={styles.signUpLoginHeading}>
                    {navbar.signUpLoginHeading}
                  </p>
                  <div className={styles.closeIcon}>
                    <img src={closeicon} alt="" className={styles.imageWidth} />
                  </div>
                </div>
                <div className={styles.signUpBottomBorder}></div>
                <div className={styles.profileIcon}>
                  <img src={adduser} alt="" className={styles.imageWidth} />
                </div>
                <div className={styles.signUpLoginDescText}>
                  <p className={styles.signUpLoginDesc}>
                    {navbar.signUpLoginDesc}
                  </p>
                </div>
                <div className={styles.loginSignUpButton}>
                  <Button
                    btName={navbar.logIn}
                    btnStyles={styles.loginButtonStyles}
                  />
                  <Button
                    btName={navbar.signUp}
                    btnStyles={styles.signUpButtonStyles}
                  />
                </div>
              </div>
            }
            /*************CONTENT OF THE "CART" POPUP END********/
          />
        </div>
        {/* =============NAVBAR MENU ITEMS RIGHT "PROFILE" ICON END==============*/}

        {/* ===================HAMBERGER MENU START=============================== */}
        <div className={styles.navbarMenuItemsMenuIcon}>
          <img
            onClick={toggleMenu}
            className={styles.menuItemsRightMenuIcon}
            src={menu}
            alt="menu"
          />
        </div>
        {isMenuOpen && (
          <div className={styles.toggleMenuContainer}>
            <div className={styles.headerContainer}>
              <div className={styles.headerLogoLeft}>
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
              <div className={styles.profileContainer}>
                <span>{navbar.profile}</span>
                <Button
                  btName={navbar.logIn}
                  btnStyles={styles.profileLoginBtnStyles}
                />
              </div>
              <div>{navbar.eventsAndBuissness}</div>
              <div>{navbar.about}</div>
              <div>{navbar.products}</div>
            </div>
          </div>
        )}
      </div>
    );
    {
      /* ===================HAMBERGER MENU END=============================== */
    }
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
