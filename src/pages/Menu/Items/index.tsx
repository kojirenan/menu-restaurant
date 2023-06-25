import styles from "./Items.module.scss";
import menu from "./items.json";
import Item from "./Item";
import { useEffect, useState } from "react";

interface PropsItems {
  find: string;
  filter: number | null;
  computer: string;
}

function Items({ find, filter, computer }: PropsItems) {
  const [list, setList] = useState(menu);

  useEffect(() => {
    const newList = menu.filter(
      (item) => finderTest(item.title) && filterTest(item.category.id)
    );
    setList(order(newList));
  }, [find, filter, computer]);

  function finderTest(title: string) {
    const regex = new RegExp(find, "i");
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  function order(newList: typeof menu) {
    switch (computer) {
      case "porcao":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd_pessoas":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "preco":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Items;
