import { Link } from 'react-router-dom';
import { AppRoutes } from '../../dataTypes/enums/app-routes.ts';
import { useAppSelector } from '../../store/store.ts';
import { AuthorizationStatus } from '../../dataTypes/enums/authorization-status.ts';
import { memo } from 'react';
import { UserInfo } from './user-info.tsx';

interface HeaderProps {
  dontShowUserInfo: boolean;
}

function HeaderImpl({ dontShowUserInfo }: HeaderProps) {
  const isAuthorized =
    useAppSelector((state) => state.authorizationStatus) ===
    AuthorizationStatus.Authorized;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoutes.MainPage}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          {dontShowUserInfo ||
            (isAuthorized ? (
              <UserInfo />
            ) : (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoutes.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            ))}
        </div>
      </div>
    </header>
  );
}

export const Header = memo(HeaderImpl);