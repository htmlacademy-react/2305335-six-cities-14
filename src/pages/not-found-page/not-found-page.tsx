import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';

function NotFoundPage (): JSX.Element {
  return (
    <section className="not__found">
      <Helmet>
        <title>six-cities - 404</title>
      </Helmet>
      <h1>404</h1>
      <p>Page NotFound</p>
      <Link to={'/'}>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundPage;
