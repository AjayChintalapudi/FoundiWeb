import React from 'react';
import styles from './style.module.css';
const FeaturesCard = (props) => {
  const { heading, description, image, name, indexNo} = props; 
  return (
    <div className={styles.featuresContainer}>
      <div  className={indexNo %2 === 0 ? styles.featuresInsideContainerOdd : styles.featureInsideContainerEven}>
        <div className={styles.featuresInfo}>
          <h2 className={styles.featuresHeading}>{heading}</h2>
          <p className={styles.featuresDescrption}>{description}</p>
        </div>
        <div className={styles.featuresImages}>
          <img
            className={styles.imageWidth}
            src={image} 
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
