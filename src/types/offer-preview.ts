import { OfferLocation } from '../types/offer-location';
import { OfferCity } from '../types/offer-city';

export type OfferPreviewType = {
  city: OfferCity;
  goods: string[];
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
