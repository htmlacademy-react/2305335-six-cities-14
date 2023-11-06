import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import Locations from '../../components/locations/locations';
import {Helmet} from 'react-helmet-async';
import { OfferPreviewType } from '../../types/offer-preview';

type MainPageProps = {
  offers: OfferPreviewType[];
}

function MainPage({offers}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>six-cities - Main</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <Cities offers={offers} />
      </main>
    </div>
  );
}

export default MainPage;
