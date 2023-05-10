import React from 'react';
import styles from './styles.module.css';

const Products = (props) => {
  const { productsImage, productDetails, productPrice, productsAltName } =
    props;
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsImage}>
        <img  className= {styles.imageWidth} src={productsImage} alt={productsAltName}  />
      </div>
      <div className={styles.productsInfo}>
        <p className={styles.productsDeatils}>{productDetails}</p>
        <h5 className={styles.productsPrice}>{productPrice}</h5>
      </div>
    </div>
  );
};

export default Products;
