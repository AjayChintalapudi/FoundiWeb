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
} from 'resources/Images/Images';
// import { Strings } from 'resources/Strings/eng';
import { englishStrings } from 'resources/Strings/eng';
const { home } = englishStrings;
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
    question: home.questionOne,
    answer: home.answerOne,
  },
  {
    question: home.questionOne,
    answer: home.answerOne,
  },
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

export {
  FeatureData,
  GetAppData,
  ProductsData,
  QuestionAnswerData,
  CollabarateData,
};
