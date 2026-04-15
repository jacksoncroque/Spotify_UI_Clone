import styles from "./navbar.module.scss";
import LogoSpotify from "../../assets/images/spotify_logo.webp";
import HomeIcon from "../../assets/icons/home_icon.svg";
import SearchInput from "./SearchInput";
import Links from "./Links/Links";

const Navbar = () => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.containerLogo}>
          <a className={styles.containerLogoLink} href="/">
            <img src={LogoSpotify} alt="Spotify" />
          </a>
        </div>
        <div className={styles.containerSearch}>
          <a className={styles.containerSearchLink} href="/">
            <img src={HomeIcon} alt="Início" />
          </a>
          <SearchInput />
        </div>
        <div className={styles.containerLinks}>
          <Links />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
