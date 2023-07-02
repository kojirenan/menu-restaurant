import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import DishesTags from 'components/DishesTags';

function Dish() {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = menu.find((item) => item.id === Number(id));
  if (!dish) {
    return <Navigate to="/error" replace />;
  }

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{dish.title}</h1>
        <div className={styles.image}>
          <img src={dish.photo} alt={dish.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{dish.description}</p>
        </div>
        <DishesTags {...dish} />
      </section>
    </>
  );
}

export default Dish;
