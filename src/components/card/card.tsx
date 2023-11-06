import {Link} from 'react-router-dom';
import { OfferPreviewType } from '../../types/offer-preview';
import { AppRoute } from '../../common/const';

type CardImageSize = 'small' | 'large';

type CardProps = {
  offer: OfferPreviewType;
  block: string;
  size?: CardImageSize;
  onCardHover?: (offerId: OfferPreviewType['id'] | null) => void;
}

const sizeCard: Record<CardImageSize, {width: string; height: string}> = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'},
};

function Card ({offer, block, size = 'large', onCardHover}: CardProps): JSX.Element {
  const {isPremium, previewImage, id, price, title, type, rating } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article className={`${block}__card place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            {...sizeCard[size]}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(100 / 5) * Math.round(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
