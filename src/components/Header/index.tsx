import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        A casa do pastel só que de massa
      </div>
    </header>
  );
}

export default Header;
