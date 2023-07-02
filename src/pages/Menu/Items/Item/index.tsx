import DishesTags from 'components/DishesTags';
import styles from './Item.module.scss';
import { Dish } from 'types/IDishes';
import { useNavigate } from 'react-router-dom';

function Item(props: Dish) {
  const { title, description, id, photo } = props;
  const navigate = useNavigate();

  return (
    <div
      className={styles.item}
      key={id}
      onClick={() => navigate(`/prato/${id}`)}
    >
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descript}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <DishesTags {...props} />
      </div>
    </div>
  );
}

export default Item;
