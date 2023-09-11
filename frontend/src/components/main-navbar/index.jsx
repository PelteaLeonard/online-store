import styles from "./styles.module.css";

import { Link } from "react-router-dom";

import { ExpandMore, Menu } from "@mui/icons-material";

function MainNavbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.menu}>
          <Menu className={styles.hamburgerIcon} />
          <p>Book categories</p>
          <ExpandMore className={styles.chevronDownIcon} />
        </div>
        <div className={styles.containerLinks}>
          <div className={styles.linksGroup}>
            <Link>Top love books</Link>
            <Link>Top personal develops books</Link>
            <Link>Top books for children</Link>
          </div>
          <div className={styles.linksGroup}>
            <Link>News</Link>
            <Link>Help</Link>
            <Link>Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavbar;
