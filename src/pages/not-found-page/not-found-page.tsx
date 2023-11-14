import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import '../../pages/not-found-page/not-faund-page.css';
import { AppRoute } from '../../common/const';

function NotFoundPage (): JSX.Element {
  return (
    <section className='NotFoundPage'>
      <Helmet>
        <title>six-cities - 404</title>
      </Helmet>
      <h1 className='title'>404</h1>
      <p className='text'> Back To {' '}
        <Link to={AppRoute.Main} className='link'> Main Page </Link>
      </p>
    </section>
  );
}

export default NotFoundPage;
