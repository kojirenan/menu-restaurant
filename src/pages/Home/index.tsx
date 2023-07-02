import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourHome from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/IDishes';

function Home() {
  let recommendedsDishes = [...menu];
  recommendedsDishes = recommendedsDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const navigate = useNavigate();

  function pathDetails(dish: Dish) {
    navigate(`/prato/${dish.id}`, { state: { ...dish }, replace: false });
  }
  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommended}>
        {recommendedsDishes.map((dishe) => (
          <div key={dishe.id} className={styles.recommend}>
            <div className={styles.recommend__image}>
              <img src={dishe.photo} alt={dishe.title} />
            </div>
            <button
              className={styles.recommend__button}
              onClick={() => pathDetails(dishe)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa Casa</h3>
      <div className={styles.about}>
        <img src={ourHome} alt="Casa do Aluroni" />
        <div className={styles.about__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP <br /> <br /> Qui
          - Dom 17h às 00h
        </div>
      </div>
    </section>
  );
}

export default Home;
