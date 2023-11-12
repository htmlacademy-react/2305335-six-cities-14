import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
//import styles from './not-found-page.module.css';
import { AppRoute } from '../../common/const';

function NotFoundPage (): JSX.Element {
  return (
    <section className="page" style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Helmet>
        <title>six-cities - 404</title>
      </Helmet>
      <h1 style={{marginTop: '100px', marginBottom: '50px', textAlign: 'center', fontSize: 50}}>404</h1>
      <p style={{textAlign: 'center', fontSize: 32}}> Back To {' '}
        <Link to={AppRoute.Main} style={{color:'#4481c3'}}> main </Link>
      </p>
    </section>
  );
}

export default NotFoundPage;
