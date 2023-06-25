import styles from "./Item.module.scss";
import menu from "../items.json";
import classNames from "classnames";

type PropsItem = (typeof menu)[0];

function Item(props: PropsItem) {
  const { title, description, category, size, serving, price, id, photo } =
    props;
  return (
    <div className={styles.item} key={id}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descript}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label.toLowerCase()}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__qtperson}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__value}>R$ {price}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;
