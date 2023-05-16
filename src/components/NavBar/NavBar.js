import React from 'react';
import styles from './styles.module.css';
import {
  navbarlogo,
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
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import PopOver from 'components/PopOver/PopOver';
import Button from 'components/Button/Button';

const NavBar = () => {
  const { navbar } = englishStrings;

  const navbarLogoLeft = () => {
    return (
      <div className={styles.navbarLogoLeft}>
        <img src={navbarlogo} className={styles.foundiLogo} alt="foundiLogo" />
        <h5>{navbar.logoHeading}</h5>
      </div>
    );
  };

  const navbarMenuItemsMiddle = () => {
    return (
      <div className={styles.navbarMenuItems}>
        <p>{navbar.events}</p>
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
                src={language}
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
                src={cart}
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
                src={profile}
                alt="profile"
              />
            }
            content={
              <div className={styles.profileContainer}>
                <div className={styles.signUpLoginBlock}>
                  <p className={styles.signUpLoginHeading}>{navbar.signUpLoginHeading}</p>
                  <div className={styles.closeIcon}>
                  <img src={closeicon} alt='' className={styles.imageWidth}/>
                  </div>
                </div>
                <div className={styles.signUpBottomBorder}></div>
                <div className={styles.profileIcon}>
                  <img src={adduser} alt="" className={styles.imageWidth}/>
                </div>
                <div className={styles.signUpLoginDescText}>
                  <p className={styles.signUpLoginDesc}>{navbar.signUpLoginDesc}</p>
                </div>
                <div className={styles.loginSignUpButton}>
                  <Button
                  btName={navbar.logIn}
                  btnStyles={styles.loginButtonStyles}
                  />
                  <Button
                  btName={navbar.signUp}
                  btnStyles={styles.signUpButtonStyles}/>
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
    <div className={styles.navbarContainer}>
      {navbarLogoLeft()}
      {navbarMenuItemsMiddle()}
      {navbarMenuItemsRight()}
    </div>
  );
};

export default NavBar;
