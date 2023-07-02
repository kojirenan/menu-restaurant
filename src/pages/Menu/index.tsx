import { useState } from 'react';
import Finder from './Finder';
import styles from './Menu.module.scss';
import Filters from './Filters';
import Computer from './Computer';
import Items from './Items';
import stylesTheme from 'styles/Theme.module.scss';

function Menu() {
  const [find, setFind] = useState('');
  const [filter, setFilter] = useState<number | null>(null);
  const [computer, setComputer] = useState('');

  return (
    <section className={styles.card}>
      <h3 className={stylesTheme.title}>Cardápio</h3>
      <Finder find={find} setFind={setFind} />
      <div className={styles.card__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Computer computer={computer} setComputer={setComputer} />
      </div>
      <Items find={find} filter={filter} computer={computer} />
    </section>
  );
}

export default Menu;
