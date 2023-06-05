import React from 'react';
import styles from './styles.module.css';

const CartItem = (props) => {
  return (
    <div onClick={props.onClick} className={styles.cartItemSection}>
      <div className={styles.insideCartSection}>
        <div className={styles.cartItemTopSection}>
          <img src={props.productImg} className={styles.cartImage} alt="" />
        </div>
        <div className={styles.cartItemBottomParaSection}>
          <p className={styles.cartItemParaSection}>
            {props.productTagHeading}
          </p>
          <div className={styles.cartItemPrice}>
            <p className={styles.cartItemPriceSection}>{props.productPrice}</p>
            <p className={styles.cartItemPriceSectionOne}>{props.offerPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
