import styles from "./styles.module.css";

import {
  Search,
  ExpandMore,
  LocalLibrary,
  PersonOutline,
  ShoppingCartOutlined,
  FavoriteBorderOutlined
} from "@mui/icons-material";

function TopNavbar() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logoContainer}>
          <LocalLibrary className={styles.logoIcon} />
          <span>LMS</span>
        </div>
        <div className={styles.inputWrapper}>
          <input placeholder="Insert book name..." />
          <Search className={styles.searchIcon} />
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.accountWrapper}>
            <PersonOutline />
            <span>Account</span>
            <ExpandMore />
          </div>
          <div className={styles.favoritesWrapper}>
            <FavoriteBorderOutlined />
            <span>Favorites</span>
            <ExpandMore />
          </div>
          <div className={styles.cartWrapper}>
            <ShoppingCartOutlined />
            <span>Shopping cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default TopNavbar;
