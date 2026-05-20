import './HeaderAdmin.css';
import { Link } from 'react-router-dom';

function HeaderAdmin() {
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
              <Link to="/admin/frontend-interview" className="header__link ">
                QA
              </Link>
            </li>
            <li className="header__item">
              <Link to="/admin/hr-interview" className="header__link">
                HR
              </Link>
            </li>
            <li className="header__item">
              <Link to="/admin/build-ways-todo" className="header__link">
                ToDo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default HeaderAdmin;
