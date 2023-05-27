import React from 'react';
import styles from './styles.module.css';

const CustomerProductCard = (props) => {
  return (
    <div className={styles.customerProductsCardContainer}>
      <div className={styles.customerProductCardImgBlock}>
        <img
          src={props.customerProductImg}
          className={styles.imageWidth}
          alt=""
        />
      </div>
      <div className={styles.customerProductCardPriceBlock}>
        <p className={styles.customerProductHeading}>
          {props.customerProductHeading}
        </p>
        <div className={styles.priceBlock}>
          <p className={styles.customerProductOfferPrice}>
            {props.customerProductOfferPrice}
          </p>
          <span className={styles.customerProductPrice}>
            {props.customerProductPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerProductCard;
