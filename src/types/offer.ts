import { Host } from '../types/offer-host';
import { OfferPreviewType } from './offer-preview';

export type OfferType = OfferPreviewType & {
  bedrooms: number;
  description: string;
  host: Host;
  images: string[];
  maxAdults: number;
};
