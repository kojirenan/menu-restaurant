import classNames from 'classnames';
import styles from './DishesTags.module.scss';
import { Dish } from 'types/IDishes';

function DishesTags({ category, size, serving, price }: Dish) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>{size}g</div>
      <div className={styles.tags__qtperson}>
        Serve {serving} pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tags__value}>R$ {price}</div>
    </div>
  );
}

export default DishesTags;
