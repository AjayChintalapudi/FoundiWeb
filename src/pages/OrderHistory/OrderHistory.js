import React from 'react';
import { closeImg, orderTagImg } from 'resources/Images/Images';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { OrderHistoryData } from 'constants/CardData/CardData';

const OrderHistory = () => {
  return (
    <div className={styles.orderSection}>
      <div className={styles.insideOrderSection}>
        <div className={styles.orderTopSection}>
          <p className={styles.orderTopText}>Order history</p>
          <div className={styles.orderTopImage}>
            <img src={closeImg} alt="" className={styles.imageWidth} />
          </div>
        </div>

        <div className={styles.orderBotttomSection}>
          {OrderHistoryData &&
            OrderHistoryData.map((item, index) => {
              return (
                <div key={index}>
                  <div className={styles.orderIdContainer}>
                    <div className={styles.orderIdTopTextSection}>
                      <div className={styles.orderNoSection}>
                        <h3 className={styles.orderNoLeftText}>
                          {item.orderIdNo}
                        </h3>
                        <div className={styles.orderIdParas}>
                          <p className={styles.orderDate}>{item.orderDate}</p>
                          <p className={styles.estimateDeliveryLeftText}>
                            {item.estimateDate} &nbsp;
                            <span
                              className={styles.estimateDeliveryLeftSpanText}
                            >
                              {item.deliveryTime}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className={styles.estimatedDelivery}>
                        <h3 className={styles.orderNoRightText}>
                          {item.totalPrice}
                        </h3>
                        <p className={styles.estimateDeliveryRightText}>
                          {item.invoice}
                        </p>
                      </div>
                    </div>
                    <div className={styles.orderIdHorizontalLine}>
                      <span></span>
                    </div>
                    <div className={styles.orderIdBottomSection}>
                      {item.items.map((item, index) => {
                        return (
                          <div className={styles.OrderIdButtonSection}>
                            <div className={styles.orderIdMobileReview}>
                              <div className={styles.orderIdTrackButtonSection}>
                                <div className={styles.orderIdButtonTagImage}>
                                  <img
                                    src={item.orderImage}
                                    alt=""
                                    className={styles.imageWidth}
                                  />
                                </div>
                                <div
                                  className={styles.orderIdReviewButtonSection}
                                >
                                  <div
                                    className={styles.orderIdPriceButtonSection}
                                  >
                                    <h6 className={styles.orderIdTagButtonText}>
                                      {item.orderProductName}
                                    </h6>
                                    <p
                                      className={styles.orderIdPriceButtonText}
                                    >
                                      {item.orderPrice}
                                    </p>
                                  </div>
                                  <div
                                    className={
                                      styles.orderReviewTextButtonSection
                                    }
                                  >
                                    <p className={styles.orderReviewButtonText}>
                                      Write a review
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.orderIdMobileSection}>
                                <p className={styles.orderReviewtext}>
                                  Write a review
                                </p>
                              </div>
                            </div>
                            {index === 1 && (
                              <div className={styles.orderIdButtonContainer}>
                                <div className={styles.orderTrackButton}>
                                  <Button
                                    btName={'Track order'}
                                    btnStyles={styles.trackId}
                                  />
                                </div>
                                <div className={styles.orderCancelButton}>
                                  <Button
                                    btName={'Cancel order'}
                                    btnStyles={styles.cancelId}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
