import React, { useState } from 'react';
import {
  checkouticontick,
  closeicon,
  decrementcheckout,
  deletecheckout,
  downarrow,
  googleicon,
  incrementcheckout,
  minusicon,
  pack4checkout,
  plusicon,
  arrowleftcircle,
  googleplaystore,
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
import { checkoutuparrow } from 'resources/Images/Images';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const { checkoutPageStrings } = englishStrings;
  const [showContact, setShowContact] = useState(true);
  const [showAddress, setShowAddress] = useState(true);
  const [showPayment, setShowPayment] = useState(true);
  const [isPageClosed, setIsPageClosed] = useState(false);
  // navigate
  const navigate = useNavigate();
  return (
    <div className={styles.checkOutMainContainer}>
      <div className={styles.checkOutCloseBlock}>
        <p className={styles.checkOutHeading}>{checkoutPageStrings.checkOut}</p>
        <div
          className={styles.closeIconContainer}
          onClick={() => navigate('/review')}
        >
          <img src={closeicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
      <div className={styles.checkOutInsideContainer}>
        <div className={styles.checkOutLeftBlock}>
          <div className={styles.contactDetailsBlock}>
            <div
              className={styles.contactDetailsInfoBlock}
              onClick={() => {
                setShowContact(!showContact);
              }}
            >
              <div className={styles.contactDetailsInfoLeft}>
                <div className={styles.checkOutIconImgBlock}>
                  <img
                    src={checkouticontick}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <p className={styles.checkOutContactHeading}>
                  {checkoutPageStrings.ContactDetails}
                </p>
              </div>
              <div className={styles.contactDetailsInfoRight}>
                <img src={showContact ? checkoutuparrow : downarrow} alt="" />
              </div>
            </div>
            {showContact && (
              <div className={styles.contactDetailsInputs}>
                <div className={styles.firstAndLastNameContainer}>
                  <div className={styles.firstNameBlock}>
                    <p className={styles.firstNameHeading}>
                      {checkoutPageStrings.firstName}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.firstNamePlaceHolderText}
                      className={styles.firstNameInput}
                    />
                  </div>
                  <div className={styles.lastNameBlock}>
                    <p className={styles.lastNameHeading}>
                      {checkoutPageStrings.LastName}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.lastNamePlaceHolderText}
                      className={styles.lastNameInput}
                    />
                  </div>
                </div>
                <div className={styles.emailAddressContainer}>
                  <p className={styles.enterEmailAddressText}>
                    {checkoutPageStrings.EmailAddress}
                  </p>
                  <Input
                    placeholder={checkoutPageStrings.EnterYourEmailID}
                    className={styles.emailInput}
                  />
                </div>
                <div className={styles.phoneNumberContainer}>
                  <p className={styles.phoneNumberHeading}>
                    {checkoutPageStrings.PhoneNumber}
                  </p>
                  <div className={styles.mobileInputContainerStyle}>
                    <p className={styles.codeTextStyle}>+42</p>
                    <Input
                      placeholder={checkoutPageStrings.EnterYourPhoneNo}
                      className={styles.phoneNumberInput}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.contactDetailsBlock}>
            <div
              className={styles.contactDetailsInfoBlock}
              onClick={() => setShowAddress(!showAddress)}
            >
              <div className={styles.contactDetailsInfoLeft}>
                <div className={styles.checkOutIconImgBlock}>
                  <img
                    src={checkouticontick}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <p className={styles.checkOutContactHeading}>
                  {checkoutPageStrings.addressInfo}
                </p>
              </div>
              <div className={styles.contactDetailsInfoRight}>
                <img src={showAddress ? checkoutuparrow : downarrow} alt="" />
              </div>
            </div>
            {showAddress && (
              <div className={styles.contactDetailsInputs}>
                <div className={styles.emailAddressContainer}>
                  <p className={styles.enterEmailAddressText}>
                    {checkoutPageStrings.doorNo}
                  </p>
                  <Input
                    placeholder={checkoutPageStrings.doorNo}
                    className={styles.emailInput}
                  />
                </div>
                <div className={styles.firstAndLastNameContainer}>
                  <div className={styles.firstNameBlock}>
                    <p className={styles.firstNameHeading}>
                      {checkoutPageStrings.city}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.city}
                      className={styles.firstNameInput}
                    />
                  </div>
                  <div className={styles.lastNameBlock}>
                    <p className={styles.lastNameHeading}>
                      {checkoutPageStrings.zipCode}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.zipCode}
                      className={styles.lastNameInput}
                    />
                  </div>
                </div>
                <div className={styles.emailAddressContainer}>
                  <p className={styles.enterEmailAddressText}>
                    {checkoutPageStrings.stateAndCountry}
                  </p>
                  <Input
                    placeholder={checkoutPageStrings.stateAndCountry}
                    className={styles.emailInput}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={styles.contactDetailsBlock}>
            <div
              className={styles.contactDetailsInfoBlock}
              onClick={() => setShowPayment(!showPayment)}
            >
              <div className={styles.contactDetailsInfoLeft}>
                <div className={styles.checkOutIconImgBlock}>
                  <img
                    src={checkouticontick}
                    alt=""
                    className={styles.imageWidth}
                  />
                </div>
                <p className={styles.checkOutContactHeading}>
                  {checkoutPageStrings.Payment}
                </p>
              </div>
              <div className={styles.contactDetailsInfoRight}>
                <img src={showPayment ? checkoutuparrow : downarrow} alt="" />
              </div>
            </div>
            {showPayment && (
              <div className={styles.contactDetailsInputs}>
                <div className={styles.emailAddressContainer}>
                  <p className={styles.enterEmailAddressText}>
                    {checkoutPageStrings.CardHolderName}
                  </p>
                  <Input
                    placeholder={checkoutPageStrings.EnterNameOnTheCard}
                    className={styles.emailInput}
                  />
                </div>
                <div className={styles.emailAddressContainer}>
                  <p className={styles.enterEmailAddressText}>
                    {checkoutPageStrings.CreditOrDebitCardNo}
                  </p>
                  <Input
                    placeholder={checkoutPageStrings.Enter16DigitCardNo}
                    className={styles.emailInput}
                  />
                </div>
                <div className={styles.firstAndLastNameContainer}>
                  <div className={styles.firstNameBlock}>
                    <p className={styles.firstNameHeading}>
                      {checkoutPageStrings.ExpiryDate}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.monthYear}
                      className={styles.firstNameInput}
                    />
                  </div>
                  <div className={styles.lastNameBlock}>
                    <p className={styles.lastNameHeading}>
                      {checkoutPageStrings.cvv}
                    </p>
                    <Input
                      placeholder={checkoutPageStrings.lastNamePlaceHolderText}
                      className={styles.cvvInput}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.checkOutRightBlock}>
          <div className={styles.orderSummaryDetailsBlock}>
            <p className={styles.orderSummaryHeading}>
              {checkoutPageStrings.orderSummary}
            </p>
            <div className={styles.keyChainTagContainer}>
              <div className={styles.keyChainTagImgLeftBlock}>
                <img src={pack4checkout} alt="" className={styles.imageWidth} />
              </div>
              <div className={styles.keyChainTagInfoRightBlock}>
                <div className={styles.keyChainTagDetails}>
                  <p className={styles.keyChaimPackHeading}>
                    {checkoutPageStrings.keychainTagPackOf4}
                  </p>
                  <p className={styles.keyChainPackPriceText}>
                    {checkoutPageStrings.priceX1}
                  </p>
                </div>
                <div className={styles.keyChainTagAddAndDeleteBlock}>
                  <div className={styles.addAndDecreaseBlock}>
                    <div className={styles.decrementCheckOutImgBlock}>
                      <img
                        src={minusicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.incrementNumeric}>01</p>
                    <div className={styles.incrementCheckoutImgBlock}>
                      <img
                        src={plusicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                  </div>
                  <div className={styles.deleteIconBlock}>
                    <img
                      src={deletecheckout}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.keyChainTagContainer}>
              <div className={styles.keyChainTagImgLeftBlock}>
                <img src={pack4checkout} alt="" className={styles.imageWidth} />
              </div>
              <div className={styles.keyChainTagInfoRightBlock}>
                <div className={styles.keyChainTagDetails}>
                  <p className={styles.keyChaimPackHeading}>
                    {checkoutPageStrings.keychainTagPackOf4}
                  </p>
                  <p className={styles.keyChainPackPriceText}>
                    {checkoutPageStrings.priceX1}
                  </p>
                </div>
                <div className={styles.keyChainTagAddAndDeleteBlock}>
                  <div className={styles.addAndDecreaseBlock}>
                    <div className={styles.decrementCheckOutImgBlock}>
                      <img
                        src={minusicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                    <p className={styles.incrementNumeric}>01</p>
                    <div className={styles.incrementCheckoutImgBlock}>
                      <img
                        src={plusicon}
                        alt=""
                        className={styles.imageWidth}
                      />
                    </div>
                  </div>
                  <div className={styles.deleteIconBlock}>
                    <img
                      src={deletecheckout}
                      alt=""
                      className={styles.imageWidth}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.orderSummaryBorder}></div>
          <div className={styles.orderSummaryPricesBlock}>
            <div className={styles.discountBlock}>
              <Input
                placeholder={checkoutPageStrings.enterDiscountCode}
                className={styles.discountInput}
                image={arrowleftcircle}
              />
            </div>
            <div className={styles.discountAndTotalPriceDetails}>
              <div className={styles.discountPriceDetails}>
                <div className={styles.subTotalContainer}>
                  <p className={styles.discountDescHeading}>
                    {checkoutPageStrings.subtotal}
                  </p>
                  <p className={styles.discountPriceHeading}>
                    {checkoutPageStrings.subTotalPrice}
                  </p>
                </div>
                <div className={styles.shippingContainer}>
                  <p className={styles.discountDescHeading}>
                    {checkoutPageStrings.shipping}
                    <span className={styles.discountDescSubHeading}>
                      {checkoutPageStrings.fillAddressDetails}
                    </span>
                  </p>
                </div>
                <div className={styles.taxContainer}>
                  <p className={styles.discountDescHeading}>
                    {checkoutPageStrings.taxAndExtras}
                  </p>
                  <p className={styles.discountPriceHeading}>
                    {checkoutPageStrings.taxPrice}
                  </p>
                </div>
                <div className={styles.disCountContainer}>
                  <p className={styles.discountDescHeading}>
                    {checkoutPageStrings.disCount}
                  </p>
                  <p className={styles.discountPriceHeading}>
                    {checkoutPageStrings.disCountPrice}
                  </p>
                </div>
              </div>
              <div className={styles.discountPriceBorder}></div>
              <div className={styles.totalPriceDetails}>
                <div className={styles.totalPriceDesc}>
                  <p className={styles.totalShippingHeading}>
                    {checkoutPageStrings.totalShipping}
                  </p>
                  <span className={styles.totalShippingSubHeading}>
                    {checkoutPageStrings.withOutShipping}
                  </span>
                </div>
                <p className={styles.totalPriceNumber}>
                  {checkoutPageStrings.totalPrice}
                </p>
              </div>
              <div className={styles.priceButton}>
                <Button
                  btName={checkoutPageStrings.payAmount}
                  btnStyles={styles.checkOutPageButton}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
