import React from 'react';
import styles from './styles.module.css';
import {
  navbarlogo,
  language,
  cart,
  profile,
  menu,
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';

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
          <img
            className={styles.menuItemsRightLogo}
            src={language}
            alt="language"
          />
        </div>
        <div className={styles.navbarMenuItemsRight}>
          <img
            className={styles.menuItemsRightCartIcon}
            src={cart}
            alt="cart"
          />
        </div>
        <div className={styles.navbarMenuItemsRight}>
          <img
            className={styles.menuItemsRightLogo}
            src={profile}
            alt="profile"
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
