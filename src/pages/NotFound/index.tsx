import styles from './NotFound.module.scss';
import { ReactComponent as NotFoundImg } from 'assets/not_found.svg';
import classNames from 'classnames';
import Footer from 'components/Footer';
import stylesTheme from 'styles/Theme.module.scss';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="container">
      <div
        className={classNames({
          [styles.container]: true,
          [stylesTheme.container]: true,
        })}
      >
        <div className={styles.back}>
          <button onClick={() => navigate(-1)}>{'< Voltar'}</button>
        </div>
        <NotFoundImg />
      </div>
      <Footer />
    </main>
  );
}

export default NotFound;
