import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        <p>Testar o Premium de graça</p>
        <p>
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <button>Inscreva-se grátis</button>
    </div>
  );
};

export default Hero;
