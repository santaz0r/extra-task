import styles from './Header.module.scss';
import { Link } from 'atomic-router-react';
import { routes } from '../../../app/routes/router';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.nav__item} to={routes.home}>
              HomePage
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
