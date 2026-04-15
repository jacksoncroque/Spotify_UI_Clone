import SearchIcon from "../../../assets/icons/search_icon.svg";
import NavigateIcon from "../../../assets/icons/navigate_icon.svg";

import styles from "./searchInput.module.scss";
import { useRef } from "react";

const SearchInput = () => {
  const inputRef = useRef();

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerIcons}>
        <img onClick={handleInputFocus} src={SearchIcon} alt="Buscar" />
      </div>
      <input ref={inputRef} type="text" placeholder="O que você quer ouvir?" />
      <div className={styles.containerIcons}>
        <span></span>
        <img src={NavigateIcon} alt="Navegar" />
      </div>
    </div>
  );
};

export default SearchInput;
