import { OfferType } from '../types/offer';
import { CityName } from '../common/const';

const offers: OfferType[] = [
  {
    city: {
      name: CityName.Dusseldorf,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Waterfront with extraordinary view',
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: 'Room',
    bedrooms: 1,
    maxAdults: 2,
    price: 142,
    goods: [
      'Laptop friendly workspace',
      'Breakfast'
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 25
    },
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    location: {
      latitude: 51.237402,
      longitude: 6.779314,
      zoom: 16
    },
    id: '1',
  },
  {
    city: {
      name: CityName.Amsterdam,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    previewImage: 'https://14.react.pages.academy/static/offer/14.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
    ],
    title: 'House in countryside',
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: 'Room',
    bedrooms: 1,
    maxAdults: 2,
    price: 144,
    goods: ['Laptop friendly workspace', 'Breakfast', 'Washer'],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 5,
    },
    description: 'This is a place for dreamers to reset, s the sun sets.',
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16,
    },
    id: '2',
  },
  {
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: 'https://14.react.pages.academy/static/offer/3.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
    ],
    title: 'Loft Studio in the Central Area',
    isFavorite: true,
    isPremium: false,
    rating: 2.9,
    type: 'Room',
    bedrooms: 1,
    maxAdults: 2,
    price: 257,
    goods: [
      'Washing machine',
      'Laptop friendly workspace',
      'Towels',
      'Baby seat',
      'Air conditioning',
      'Coffee machine',
      'Fridge',
      'Breakfast',
      'Washer',
      'Dishwasher',
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
    },
    description:
      'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    location: {
      latitude: 50.852557,
      longitude: 4.3376969999999995,
      zoom: 16,
    },
    id: '3',
  },
  {
    city: {
      name: CityName.Hamburg,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/20.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: false,
    rating: 4.4,
    type: 'House',
    bedrooms: 3,
    maxAdults: 10,
    price: 360,
    goods: [
      'Baby seat',
      'Laptop friendly workspace',
      'Fridge',
      'Air conditioning',
      'Breakfast',
      'Towels',
      'Washer'
    ],
    host: {
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 9,
    },
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    location: {
      latitude: 53.570341000000006,
      longitude: 9.975654,
      zoom: 16
    },
    id: '4'
  }
];

export {offers};
