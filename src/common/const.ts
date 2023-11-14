const PLACES_COUNT = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/not-found'
}

const CitiesLocation = {
  Paris: {
    name: 'Paris',
  },
  Cologne: {
    name: 'Cologne',
  },
  Brussels: {
    name: 'Brussels',
  },
  Amsterdam: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 12,
    }
  },
  Hamburg: {
    name: 'Hamburg',
  },
  Dusseldorf: {
    name: 'Dusseldorf',
  }
};

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;
const MAX_NEAR_PLACES_COUNT = 3;
const MAX_REVIEWS_COUNT = 10;

const ratingMap = {
  '5':'perfect',
  '4':'good',
  '3':'not bad',
  '2':'badly',
  '1':'terribly',
};

export{PLACES_COUNT, AppRoute, AuthorizationStatus, CitiesLocation, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH,
  MAX_NEAR_PLACES_COUNT, MAX_REVIEWS_COUNT, ratingMap};
