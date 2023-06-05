import React, { useEffect, useState } from 'react';
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
  // scroll to top of the page onloading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // scroll to top of the page onloading
  const { checkoutPageStrings } = englishStrings;
  const [showContact, setShowContact] = useState(true);
  const [showAddress, setShowAddress] = useState(true);
  const [showPayment, setShowPayment] = useState(true);
  const [isPageClosed, setIsPageClosed] = useState(false);
  // navigate
  const navigate = useNavigate();

  const checkOutCloseBlock = () => {
    return (
      <div className={styles.checkOutCloseBlock}>
        <p className={styles.checkOutHeading}>{checkoutPageStrings.checkOut}</p>
        <div
          className={styles.closeIconContainer}
          onClick={() => navigate('/review')}
        >
          <img src={closeicon} alt="" className={styles.imageWidth} />
        </div>
      </div>
    );
  };

  const checkOutLeftBlock = () => {
    return (
      <div className={styles.checkOutLeftBlock}>
        <div className={styles.contactDetailsBlock}>
          {contactDetailsInputs()}
        </div>
        {addressDetailsInputs()}
        {paymentDeatilsInputs()}
      </div>
    );
  };

  const contactDetailsInputs = () => {
    return (
      <div className={styles.contactDetailsBlock}>
        <div
          className={styles.contactDetailsInfoBlock}
          onClick={() => setShowContact(!showContact)}
        >
          {contactDeatilsHeaderSection()}
          <div className={styles.contactDetailsInfoRight}>
            <img src={showAddress ? checkoutuparrow : downarrow} alt="" />
          </div>
        </div>
        {showContact && (
          <div className={styles.contactDetailsInputs}>
            {firstAndLastNameInputSection()}
            {emailAddressInputSection()}
            {phoneNumberInputSection()}
          </div>
        )}
      </div>
    );
  };

  const contactDeatilsHeaderSection = () => {
    return (
      <div className={styles.contactDetailsInfoLeft}>
        <div className={styles.checkOutIconImgBlock}>
          <img src={checkouticontick} alt="" className={styles.imageWidth} />
        </div>
        <p className={styles.checkOutContactHeading}>
          {checkoutPageStrings.ContactDetails}
        </p>
      </div>
    );
  };

  const firstAndLastNameInputSection = () => {
    return (
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
    );
  };

  const emailAddressInputSection = () => {
    return (
      <div className={styles.emailAddressContainer}>
        <p className={styles.enterEmailAddressText}>
          {checkoutPageStrings.EmailAddress}
        </p>
        <Input
          placeholder={checkoutPageStrings.EnterYourEmailID}
          className={styles.emailInput}
        />
      </div>
    );
  };

  const phoneNumberInputSection = () => {
    return (
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
    );
  };

  const addressDetailsInputs = () => {
    return (
      <div className={styles.addressDeatilsBlock}>
        <div
          className={styles.addressDetailsInfoBlock}
          onClick={() => setShowAddress(!showAddress)}
        >
          {addressDeatilsHeaderSection()}
          <div className={styles.addressDetailsInfoRight}>
            <img src={showAddress ? checkoutuparrow : downarrow} alt="" />
          </div>
        </div>
        {showAddress && (
          <div className={styles.addressDetailsInputs}>
            {doorNoInputSection()}
            {cityAndZipInputSection()}
            {stateAndCityInputSection()}
          </div>
        )}
      </div>
    );
  };

  const addressDeatilsHeaderSection = () => {
    return (
      <div className={styles.addressDeatilsInfoLeft}>
        <div className={styles.checkOutIconImgBlock}>
          <img src={checkouticontick} alt="" className={styles.imageWidth} />
        </div>
        <p className={styles.checkOutAddressHeading}>
          {checkoutPageStrings.addressInfo}
        </p>
      </div>
    );
  };

  const doorNoInputSection = () => {
    return (
      <div className={styles.doorNoContainer}>
        <p className={styles.enterDoorNoText}>{checkoutPageStrings.doorNo}</p>
        <Input
          placeholder={checkoutPageStrings.doorNo}
          className={styles.doorNoInput}
        />
      </div>
    );
  };

  const cityAndZipInputSection = () => {
    return (
      <div className={styles.cityAndZipCodeContainer}>
        <div className={styles.cityNameBlock}>
          <p className={styles.cityNameHeading}>{checkoutPageStrings.city}</p>
          <Input
            placeholder={checkoutPageStrings.city}
            className={styles.cityNameInput}
          />
        </div>
        <div className={styles.zipCodeBlock}>
          <p className={styles.zipCodeHeading}>{checkoutPageStrings.zipCode}</p>
          <Input
            placeholder={checkoutPageStrings.zipCode}
            className={styles.zipCodeInput}
          />
        </div>
      </div>
    );
  };

  const stateAndCityInputSection = () => {
    return (
      <div className={styles.stateAndCityContainer}>
        <p className={styles.stateAndCityText}>
          {checkoutPageStrings.stateAndCountry}
        </p>
        <Input
          placeholder={checkoutPageStrings.stateAndCountry}
          className={styles.stateAndCountryInput}
        />
      </div>
    );
  };

  const paymentDeatilsInputs = () => {
    return (
      <div className={styles.paymentDetailsBlock}>
        <div
          className={styles.paymentDeatilsInfoBlock}
          onClick={() => setShowPayment(!showPayment)}
        >
          {paymentDetailsHeaderSection()}
          <div className={styles.paymentDeatilsInfoRight}>
            <img src={showPayment ? checkoutuparrow : downarrow} alt="" />
          </div>
        </div>
        {showPayment && (
          <div className={styles.paymentDetailsInputs}>
            {cardHolderInputSection()}
            {creditAndDebitCardInputSection()}
            {expiryDateAndCvvInputSection()}
          </div>
        )}
      </div>
    );
  };

  const paymentDetailsHeaderSection = () => {
    return (
      <div className={styles.paymentDetailsInfoLeft}>
        <div className={styles.checkOutIconImgBlock}>
          <img src={checkouticontick} alt="" className={styles.imageWidth} />
        </div>
        <p className={styles.checkOutPaymenttHeading}>
          {checkoutPageStrings.Payment}
        </p>
      </div>
    );
  };

  const cardHolderInputSection = () => {
    return (
      <div className={styles.cardHolderContainer}>
        <p className={styles.cardHolderNameText}>
          {checkoutPageStrings.CardHolderName}
        </p>
        <Input
          placeholder={checkoutPageStrings.EnterNameOnTheCard}
          className={styles.cardHolderInput}
        />
      </div>
    );
  };

  const creditAndDebitCardInputSection = () => {
    return (
      <div className={styles.creditAndDebitCardContainer}>
        <p className={styles.enterEmailAddressText}>
          {checkoutPageStrings.CreditOrDebitCardNo}
        </p>
        <Input
          placeholder={checkoutPageStrings.Enter16DigitCardNo}
          className={styles.creditAndDebitCardInput}
        />
      </div>
    );
  };

  const expiryDateAndCvvInputSection = () => {
    return (
      <div className={styles.expiryDateAndCvvContainer}>
        <div className={styles.expiryDateBlock}>
          <p className={styles.expiryDateHeading}>
            {checkoutPageStrings.ExpiryDate}
          </p>
          <Input
            placeholder={checkoutPageStrings.monthYear}
            className={styles.expiryDateInput}
          />
        </div>
        <div className={styles.cvvNameBlock}>
          <p className={styles.cvvHeading}>{checkoutPageStrings.cvv}</p>
          <Input
            placeholder={checkoutPageStrings.enterCvvNumber}
            className={styles.cvvInput}
          />
        </div>
      </div>
    );
  };

  const checkOutRightBlock = () => {
    return (
      <div className={styles.checkOutRightBlock}>
        {orderSummaryDetailsSection()}
        <div className={styles.orderSummaryBorder}></div>\
        {orderSummaryPricesSection()}
      </div>
    );
  };

  const orderSummaryDetailsSection = () => {
    return (
      <div className={styles.orderSummaryDetailsBlock}>
        <p className={styles.orderSummaryHeading}>
          {checkoutPageStrings.orderSummary}
        </p>
        {keyChainTagContainerBlockOne()}
        {keyChainTagContainerBlockTwo()}
      </div>
    );
  };

  const keyChainTagContainerBlockOne = () => {
    return (
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
                <img src={minusicon} alt="" className={styles.imageWidth} />
              </div>
              <p className={styles.incrementNumeric}>01</p>
              <div className={styles.incrementCheckoutImgBlock}>
                <img src={plusicon} alt="" className={styles.imageWidth} />
              </div>
            </div>
            <div className={styles.deleteIconBlock}>
              <img src={deletecheckout} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const keyChainTagContainerBlockTwo = () => {
    return (
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
                <img src={minusicon} alt="" className={styles.imageWidth} />
              </div>
              <p className={styles.incrementNumeric}>01</p>
              <div className={styles.incrementCheckoutImgBlock}>
                <img src={plusicon} alt="" className={styles.imageWidth} />
              </div>
            </div>
            <div className={styles.deleteIconBlock}>
              <img src={deletecheckout} alt="" className={styles.imageWidth} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const orderSummaryPricesSection = () => {
    return (
      <div className={styles.orderSummaryPricesBlock}>
        {disCountBlockInputSection()}
        {discountAndTotalPriceDetails()}
      </div>
    );
  };

  const disCountBlockInputSection = () => {
    return (
      <div className={styles.discountBlock}>
        <Input
          placeholder={checkoutPageStrings.enterDiscountCode}
          className={styles.discountInput}
          image={arrowleftcircle}
        />
      </div>
    );
  };

  const discountAndTotalPriceDetails = () => {
    return (
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
    );
  };

  return (
    <div className={styles.checkOutMainContainer}>
      {checkOutCloseBlock()}
      <div className={styles.checkOutInsideContainer}>
        {checkOutLeftBlock()}
        {checkOutRightBlock()}
      </div>
    </div>
  );
};

export default CheckOut;
