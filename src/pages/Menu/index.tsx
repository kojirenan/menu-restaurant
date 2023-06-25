import { useState } from "react";
import Finder from "./Finder";
import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Filters from "./Filters";
import Computer from "./Computer";
import Items from "./Items";

function Menu() {
  const [find, setFind] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [computer, setComputer] = useState("");

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do pastel só que de massa
        </div>
      </header>
      <section className={styles.card}>
        <h3 className={styles.card__title}>Cardápio</h3>
        <Finder find={find} setFind={setFind} />
        <div className={styles.card__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Computer computer={computer} setComputer={setComputer} />
        </div>
        <Items find={find} filter={filter} computer={computer} />
      </section>
    </main>
  );
}

export default Menu;
