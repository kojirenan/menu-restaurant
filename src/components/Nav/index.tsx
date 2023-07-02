import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';

function Nav() {
  const routes = [
    {
      label: 'Início',
      to: '/',
    },
    {
      label: 'Menu',
      to: '/menu',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, i) => (
          <li key={i} className={styles.menu__link}>
            <Link to={route.to}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
