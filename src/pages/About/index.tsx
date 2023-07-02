import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import homeImg from 'assets/about/casa.png';
import pasta1Img from 'assets/about/massa1.png';
import pasta2Img from 'assets/about/massa2.png';

function About() {
  const images = [pasta1Img, pasta2Img];
  return (
    <section>
      <h3 className={stylesTheme.title}>Sobre</h3>
      <div className={styles.about}>
        <div className={styles.about__img}>
          <img src={homeImg} alt="imagem da frente do restaurante" />
        </div>
        <div className={styles.about__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo!{' '}
          </p>
          <p>
            Prezamos pelos ingredientes tradicionais da culinária Italiana,
            frescos e de excelente qualidade para que sua experiência seja ainda
            mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, index) => (
          <div key={index} className={styles.images__image}>
            <img src={image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
