import styles from "./mainFooter.module.scss";

import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const MainFooter = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerInfo}>
          <div className={styles.containerInfoMain}>
            <a href="/">Empresa</a>
            <a href="/">Sobre</a>
            <a href="/">Empregos</a>
            <a href="/">For the Record</a>
          </div>

          <div className={styles.containerInfoMain}>
            <a href="/">Comunidades</a>
            <a href="/">Para Artistas</a>
            <a href="/">Desenvolvedores</a>
            <a href="/">Publicidade</a>
            <a href="/">Investidores</a>
            <a href="/">Fornecedores</a>
          </div>

          <div className={styles.containerInfoMain}>
            <a href="/">Links úteis</a>
            <a href="/">Suporte</a>
            <a href="/">Aplicativo móvel grátis</a>
            <a href="/">Popular por país</a>
            <a href="/">Importar suas músicas</a>
          </div>

          <div className={styles.containerInfoMain}>
            <a href="/">Planos do Spotify</a>
            <a href="/">Premium Individual</a>
            <a href="/">Premium Duo</a>
            <a href="/">Premium Família</a>
            <a href="/">Premium Universitário</a>
            <a href="/">Spotify Free</a>
          </div>
        </div>
        <div className={styles.containerIcons}>
          <a href="/">
            <FaInstagram className={styles.containerIconsButton} />
          </a>
          <a href="/">
            <FaTwitter className={styles.containerIconsButton} />
          </a>
          <a href="/">
            <FaFacebook className={styles.containerIconsButton} />
          </a>
        </div>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.subContainerDate}>
          <p>&copy; {new Date().getFullYear()} Spotify AB</p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;
