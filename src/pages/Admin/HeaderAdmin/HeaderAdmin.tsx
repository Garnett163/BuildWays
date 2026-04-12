import './HeaderAdmin.css';
import { Link } from 'react-router-dom';
// import MicroFrontendWays from '../MicroFrontendWays/MicroFrontendWays';
import MFWrapper from '../MFWrapper/MFWrapper';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" />
        <div className="header__links">
          <Link to="/admin" className="header__title">
            Админ панель
          </Link>
          <ul className="header__list">
            <li className="header__item">
              <Link to="/user-profile" className="header__link header__link-profile" />
            </li>
            <li className="header__item">
              <Link to="/admin/interview" className="header__link ">
                QA
              </Link>
            </li>
            <li className="header__item">
              {/* <Link to="/admin/micro-frontend-ways" className="header__link ">
                MF
              </Link> */}
              {/* <MFWrapper /> */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
