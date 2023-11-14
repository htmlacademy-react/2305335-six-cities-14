import {Helmet} from 'react-helmet-async';
import {useParams, Navigate} from 'react-router-dom';
import Header from '../../components/header/header';
import OfferDetails from '../../components/offer-details/offer-details';
import {OfferType} from '../../types/offer';
import {ReviewType} from '../../types/review';
import {AppRoute, CitiesLocation, MAX_NEAR_PLACES_COUNT} from '../../common/const';
import Map from '../../components/map/map';
import {useState} from 'react';
import Card from '../../components/card/card';

type OfferPageProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function OfferPage({offers, reviews}: OfferPageProps): JSX.Element {
  const {offerId} = useParams();
  const offer = offers.find((item) => item.id === offerId);
  const activeCity = CitiesLocation.Amsterdam;

  const [hoverNearOfferId, setHoverNearOfferId] = useState<
  OfferType['id'] | null
  >(null);

  function handleCardHover(nearOfferId: OfferType['id'] | null) { // fix
    setHoverNearOfferId(nearOfferId);
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound}/>;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`six-cities - ${offer.title}`}</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} reviews={reviews}/>
          <section className="offer__map map">
            <Map
              location={activeCity.location}
              block='offer'
              offers={offers}
              specialOfferId={hoverNearOfferId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_NEAR_PLACES_COUNT).map((nearOffer) => ( // fix
                <Card
                  key={nearOffer.id}
                  offer={nearOffer}
                  block='near-places'
                  onCardHover={handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
