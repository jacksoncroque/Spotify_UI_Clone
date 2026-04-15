import styles from "./card.module.scss";
const Card = ({item}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button className={styles.containerMainButton}>{item.buttonLabel}</button>
      </div>
    </div>
  );
};

export default Card;
