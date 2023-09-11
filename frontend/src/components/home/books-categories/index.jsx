import Menu from "./menu";

import styles from "./styles.module.css";

import Carousel from "./carousel";

function BooksCategories() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.section}>
        <h2 className={styles.title}>Books categories</h2>
        <div className={styles.innerContainer}>
          <Menu />
          <Carousel/>
        </div>
      </div>
    </div>
  );
}

export default BooksCategories;
