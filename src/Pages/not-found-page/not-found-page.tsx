import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../dataTypes/enums/app-route.ts';

export function NotFoundPage(): React.JSX.Element {
  return (
    <main className="not-found-page">
      <Helmet>
        <title>404 - not found</title>
      </Helmet>
      <h1>404 - Page Not Found</h1>
      <p className="not-found-page__title">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link to={AppRoute.MainPage} className="not-found-page__link">
        back to main page
      </Link>
    </main>
  );
}
