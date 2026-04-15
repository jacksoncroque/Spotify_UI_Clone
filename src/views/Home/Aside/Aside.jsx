import styles from "./aside.module.scss";
import AddIcon from "../../../assets/icons/add_icon.svg";
import Card from "./Card";

import { GoPlus } from "react-icons/go";
import { TbWorld } from "react-icons/tb";

const cardList = [
  {
    title: "Crie sua primeira playlist",
    description: "É fácil, vamos te ajudar.",
    buttonLabel: "Criar playlist",
    id: 1,
  },
  {
    title: "Que tal seguir um podcast novo?",
    description: "Avisaremos você sobre novos episódios.",
    buttonLabel: "Explore podcasts",
    id: 2,
  },
];

const Aside = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerHead}>
        <h1>Sua Biblioteca</h1>
        <div className={styles.containerMainIcons}>
          <GoPlus className={styles.containerMainIconsReact} />
          <span>Criar</span>
        </div>
      </div>
      <div className={styles.containerMain}>
        {cardList.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
      </div>
      <div className={styles.containerFooter}>
        <ul>
          <li>
            <a href="/">Legal</a>
          </li>
          <li>
            <a href="/">Segurança e Centro de Privacidade</a>
          </li>
          <li>
            <a href="/">Política de Privacidade</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
          <li>
            <a href="/">Sobre Anúncios</a>
          </li>
          <li>
            <a href="/">Acessibilidade</a>
          </li>
          <li>
            <a href="/">Cookies</a>
          </li>
        </ul>
        <button>
          <TbWorld className={styles.containerFooterIcon} />
          Português do Brasil
        </button>
      </div>
    </div>
  );
};

export default Aside;
