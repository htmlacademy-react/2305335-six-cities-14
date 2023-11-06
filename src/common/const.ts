const PLACES_COUNT = 5;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/not-found'
}

enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const ratingMap = {
  '5':'perfect',
  '4':'good',
  '3':'not bad',
  '2':'badly',
  '1':'terribly',
};

export{PLACES_COUNT, AppRoute, AuthorizationStatus, CityName, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, ratingMap};
