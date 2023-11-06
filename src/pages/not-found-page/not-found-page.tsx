import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import styles from './not-found-page.module.css';
import { AppRoute } from '../../common/const';

function NotFoundPage (): JSX.Element {
  return (
    <section className={`page ${styles.NotFoundPage}`}>
      <Helmet>
        <title>six-cities - 404</title>
      </Helmet>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}> Вернуться на {' '}
        <Link to={AppRoute.Main} className={styles.link}> главную </Link>
      </p>
    </section>
  );
}

export default NotFoundPage;
