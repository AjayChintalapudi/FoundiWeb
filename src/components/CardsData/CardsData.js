import {
  purchasetag,
  additems,
  connect,
  recover,
  productspackone,
  productspacktwo,
  productspackthree,
  uparrow,
  downarrow,
} from 'resources/Images/Images';
import { Strings } from 'resources/Strings/eng';
const { home } = Strings;
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
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerOne, 
   
  },
  {
    question: home.questionOne,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerOne, 
   
  },
  {
    question: home.questionOne,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerOne, 
   
  },
  {
    question: home.questionOne,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerOne, 
   
  },

  {
    question: home.questionTwo,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerTwo,
  
  },

  {
    question: home.questionThree,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerThree,
 
  },

  {
    question: home.questionFour,
    upArrow:uparrow,
    downArrow:downarrow,
    answer: home.answerFour ,
   
  },
];

export { FeatureData, ProductsData,QuestionAnswerData };
