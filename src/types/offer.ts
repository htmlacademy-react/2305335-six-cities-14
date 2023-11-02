import { OfferLocation } from '../types/offer-location';
import { OfferCity } from '../types/offer-city';
import { Host } from '../types/offer-host';

export type OfferType = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: OfferLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};
