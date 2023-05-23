import {
  singleTagImg,
  fourTagsImg,
  greenTickImg,
  blueTickImg,
  walletImg,
  ipadImg,
  headsetImg,
  backpackImg,
  cameraImg,
} from 'resources/Images/Images';

const ProductsCategoriesData = [
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00 ',
    offerPrice: '$99.00',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00',
    offerPrice: '$39.00',
  },
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00 ',
    offerPrice: '$99.00',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00 ',
    offerPrice: '$39.00',
    altName: '',
  },
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00',
    offerPrice: '$99.00',
    altName: '',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00',
    offerPrice: '$39.00',
    altName: '',
  },
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00 ',
    offerPrice: '$99.00',
    altName: '',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00',
    offerPrice: '$39.00',
    altName: '',
  },
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00 ',
    offerPrice: '$99.00',
    altName: '',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00 ',
    offerPrice: '$39.00',
    altName: '',
  },
  {
    productImg: fourTagsImg,
    productTagHeading: 'Regular tags - A pack of 4',
    productPrice: '$59.00',
    offerPrice: '$99.00',
    altName: '',
  },
  {
    productImg: singleTagImg,
    productTagHeading: 'Regular tags - A pack of 1',
    productPrice: '$29.00 ',
    offerPrice: '$39.00',
    altName: '',
  },
];

const ReviewCategoriesData = [
  {
    reviewImg: singleTagImg,
    reviewAlt: '',
  },
];
const ReviewRatingData = [
  {
    rating: 4,
    reviewParaDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in. Lorem ipsum dolor sit. Suspendisse risus urna, rutrum non quam in. Lorem ipsum dolor sit. Suspendisse risus urna, rutrum non quam in.',
    reviewUserName: '- Anonymous',
    reviewDateMonth: 'Dec 24, 2022, Sweden',
  },
  {
    rating: 5,
    reviewParaDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in. Lorem ipsum dolor sit. Suspendisse risus urna, rutrum non quam in. Lorem ipsum dolor sit.',
    reviewUserName: '- Anonymous',
    reviewDateMonth: 'Dec 20, 2022, Sweden',
  },
  {
    rating: 4,
    reviewParaDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in. Lorem ipsum dolor sit. Suspendisse risus urna, rutrum non quam in.',
    reviewUserName: '- Anonymous',
    reviewDateMonth: 'Dec 15, 2022, Sweden',
  },
  {
    rating: 5,
    reviewParaDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse risus urna, rutrum non quam in.',
    reviewUserName: '- Anonymous',
    reviewDateMonth: 'Dec 14, 2022, Sweden',
  },
];

const SubscriptionCategoriesData = [
  {
    subscriptionText: 'Starter plan',
    subscriptionTextOne: '$0',
    subscriptionTextPrice: '/lifetime',
    subscriptionGreenImage: greenTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at 1 item',
    subscriptionTextThree: 'Lifetime validity',
  },
  {
    subscriptionText: 'Upto 3 tags',
    subscriptionTextOne: '$299',
    subscriptionTextPrice: '/year',
    subscriptionGreenImage: blueTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at 3 items',
    subscriptionTextThree: '365 days of validity',
  },
  {
    subscriptionText: 'Upto 5 tags',
    subscriptionTextOne: '$449',
    subscriptionTextPrice: '/year',
    subscriptionGreenImage: blueTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at 5 items',
    subscriptionTextThree: '365 days of validity',
  },
  {
    subscriptionText: 'Upto 7 tags',
    subscriptionTextOne: '$649',
    subscriptionTextPrice: '/year',
    subscriptionGreenImage: blueTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at 7 items',
    subscriptionTextThree: '365 days of validity',
  },
  {
    subscriptionText: 'Upto 3 tags',
    subscriptionTextOne: '$849',
    subscriptionTextPrice: '/year',
    subscriptionGreenImage: blueTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at 9 items',
    subscriptionTextThree: '365 days of validity',
  },
  {
    subscriptionText: 'Upto n tags',
    subscriptionTextOne: '$nx89',
    subscriptionTextPrice: '/year',
    subscriptionGreenImage: blueTickImg,
    subscriptionaltName: '',
    subscriptionTextTwo: 'Limit maxes at n items',
    subscriptionTextThree: '365 days of validity',
  },
];

const AboutNotificationsData = [
  {
    chatImage: walletImg,
    chatHeading: 'My wallet',
    chatISONumber: '(SNO#1E46MP)',
    chatDate: 'Oct 20',
    chatMessageFinder: 'Finder:',
    chatMessage: 'Lorem ipsum dolor sit amet  consec tetur adipiscing elit. ',
    chatNotifications: '2',
  },
  {
    chatImage: ipadImg,
    chatHeading: 'My iPad ',
    chatISONumber: '(SNO#1C46UP)',
    chatDate: 'Oct 20',
    chatMessageFinder: 'Owner:',
    chatMessage: 'Lorem ipsum dolor sit amet  consec tetur adipiscing elit. ',
  },
  {
    chatImage: headsetImg,
    chatHeading: 'Sony XM4 ',
    chatISONumber: '(SNO#F10BNR)',
    chatDate: 'Aug 7',
    chatMessageFinder: 'You:',
    chatMessage: 'Thank you! ',
  },
  {
    chatImage: backpackImg,
    chatHeading: 'Backpack ',
    chatISONumber: '(SNO#V96BNW)',
    chatDate: 'Mar 23',
    chatMessageFinder: 'Finder:',
    chatMessage: 'Lorem ipsum dolor sit amet  consec tetur adipiscing elit. ',
  },
  {
    chatImage: cameraImg,
    chatHeading: 'My wallet',
    chatISONumber: '(SNO#1E46MP)',
    chatDate: 'Oct 20',
    chatMessageFinder: 'You:',
    chatMessage: 'Lorem ipsum dolor sit amet  consec tetur adipiscing elit. ',
  },
];

export {
  ProductsCategoriesData,
  ReviewCategoriesData,
  ReviewRatingData,
  SubscriptionCategoriesData,
  AboutNotificationsData,
};
