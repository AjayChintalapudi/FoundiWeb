import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import {
  // navbarlogo,
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

  // based on the route path change images and logos
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  useEffect(() => {
    setIsHome(window.location.pathname === '/');
  }, [navigate]);
  
  const navbarLogoLeft = () => {
    return (
      <div className={styles.navbarLogoLeft} onClick={() => navigate('/')}>
        <img
          src={isHome ? foundilogowhite : foundiblackicon}
          className={styles.foundiLogo}
          alt="foundiLogo"
        />
        {/* <h5>{navbar.logoHeading}</h5> */}
      </div>
    );
  };

  const navbarMenuItemsMiddle = () => {
    return (
      <div
        className={classNames(styles.navbarMenuItems, props.navbarMenuItems)}
      >
        <p onClick={() => navigate('/events')}>{navbar.events}</p>
        <p>{navbar.about}</p>
        <p>{navbar.products}</p>
      </div>
    );
  };

  const navbarMenuItemsRight = () => {
    return (
      <div className={styles.navbarMenuItemsRightContainer}>
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightLogo}
                src={isHome ? language : languageblackicon}
                alt="language"
              />
            }
            // Content Of  the Popup Languages
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
          />
        </div>
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightCartIcon}
                src={isHome ? cart : cartblackicon}
                alt="cart"
              />
            }
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
          />
        </div>
        <div className={styles.navbarMenuItemsRight}>
          <PopOver
            triggerElement={
              <img
                className={styles.menuItemsRightLogo}
                src={isHome ? profile : profileblackicon}
                alt="profile"
              />
            }
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
          />
        </div>
        <div className={styles.navbarMenuItemsMenuIcon}>
          <img
            className={styles.menuItemsRightMenuIcon}
            src={menu}
            alt="menu"
          />
        </div>
      </div>
    );
  };
  return (
    <div className={classNames(styles.navbarContainer, props.navbarContainer)}>
      {navbarLogoLeft()}
      {navbarMenuItemsMiddle()}
      {navbarMenuItemsRight()}
    </div>
  );
};

export default NavBar;
