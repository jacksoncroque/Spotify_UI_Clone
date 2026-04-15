import styles from "./links.module.scss";
import DownloadIcon from "../../../assets/icons/download_icon.svg";

const Links = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.containerLinks}>
        <li>
          <a href="/">Premium</a>
        </li>
        <li>
          <a href="/">Suporte</a>
        </li>
        <li>
          <a href="/">Baixar</a>
        </li>
      </ul>
      <span></span>
      <ul className={styles.containerLinks}>
        <li>
          <a href="/">
            <img src={DownloadIcon} alt="Baixar" />
            Instalar aplicativo
          </a>
        </li>
        <li>
          <a href="/">Increver-se</a>
        </li>
      </ul>
      <button className={styles.containerButton}>Entrar</button>
    </div>
  );
};

export default Links;
