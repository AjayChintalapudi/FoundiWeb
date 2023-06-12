import {
  purchasetag,
  additems,
  connect,
  recover,
  productspackone,
  productspacktwo,
  productspackthree,
  ebay,
  aws,
  google,
  twitch,
  ios,
  appleicon,
  playstoreicon,
  customerproductImg1,
  customerproductImg2,
  customerproductImg3,
  userprofileedit,
  userprofilearrowleft,
  userprofilemessage,
  userprofiletimecircle,
  deleteaccount,
} from 'resources/Images/Images';
import { englishStrings } from 'resources/Strings/eng';
const { home, navbar } = englishStrings;

const UserProfileData = [
  {
    userProfileOptionsImg: userprofileedit,
    userProfileOptionsHeading: navbar.editProfile,
    userProfileLeftArrow: userprofilearrowleft,
  },
  {
    userProfileOptionsImg: userprofilemessage,
    userProfileOptionsHeading: navbar.message,
    userProfileLeftArrow: userprofilearrowleft,
  },
  {
    userProfileOptionsImg: userprofiletimecircle,
    userProfileOptionsHeading: navbar.myPurchase,
    userProfileLeftArrow: userprofilearrowleft,
  },
  {
    userProfileOptionsImg: deleteaccount,
    userProfileOptionsHeading: navbar.deleteAccount,
    userProfileLeftArrow: userprofilearrowleft,
  },
];
const FeatureData = [
  {
    heading: home.purchasetag,
    description: home.purchaseDescription,
    image: purchasetag,
    name: home.purchaseAlt,
  },
  {
    heading: home.additems,
    description: home.addItemsDescription,
    image: additems,
    name: home.addItemsAlt,
  },

  {
    heading: home.connect,
    description: home.connectDescription,
    image: connect,
    name: home.connectAlt,
  },

  {
    heading: home.recover,
    description: home.recoverDescription,
    image: recover,
    name: home.recoverAlt,
  },
];

const GetAppData = [
  {
    getAppImg: appleicon,
    getAppText: home.appStoreText,
    getAppHeading: home.appStroreHeading,
    getAppAltText: home.appStoreAltText,
  },

  {
    getAppImg: playstoreicon,
    getAppText: home.playStoreText,
    getAppHeading: home.playStoreHeading,
    getAppAltText: home.playStoreAltText,
  },
];

const ProductsData = [
  {
    productsImage: productspackone,
    productDetails: 'Regular tags - A pack of 4',
    productPrice: '$99.00',
    productAltName: 'productsPackOne',
  },
  {
    productsImage: productspacktwo,
    productDetails: 'Regular tag - A pack of 1',
    productPrice: '$29.00',
    productAltName: 'productsPackTwo',
  },
  {
    productsImage: productspackthree,
    productDetails: 'Regular tags - A pack of 4',
    productPrice: '$99.00',
    productsAltName: 'productsPackThree',
  },
];

const QuestionAnswerData = [
  {
    question: home.questionOne,
    answer: home.answerOne,
  },

  {
    question: home.questionTwo,
    answer: home.answerTwo,
  },

  {
    question: home.questionThree,
    answer: home.answerThree,
  },

  {
    question: home.questionFour,
    answer: home.answerFour,
  },
];

const CollabarateData = [
  {
    buttonImage: ebay,
  },
  {
    buttonImage: aws,
  },

  {
    buttonImage: google,
  },
  {
    buttonImage: twitch,
  },
  {
    buttonImage: ios,
  },
  // {
  //   buttonImage:ebay
  // },
];

const CustomersProductData = [
  {
    customerProductImg: customerproductImg1,
    customerProductHeading: 'Regular tags - A pack of 4',
    customerProductOfferPrice: '$59.00 ',
    customerProductPrice: '$99.00',
  },
  {
    customerProductImg: customerproductImg2,
    customerProductHeading: 'Regular tag - A pack of 1',
    customerProductOfferPrice: '$29.00',
    customerProductPrice: '$39.00',
  },
  {
    customerProductImg: customerproductImg3,
    customerProductHeading: 'Regular tags - A pack of 4',
    customerProductOfferPrice: '$59.00 ',
    customerProductPrice: '$99.00',
  },
];

export {
  UserProfileData,
  FeatureData,
  GetAppData,
  ProductsData,
  QuestionAnswerData,
  CollabarateData,
  CustomersProductData,
};
