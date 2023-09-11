import styles from "./styles.module.css";

import { Link } from "react-router-dom";

import { ChevronRight } from "@mui/icons-material";


function NewBanner() {
  return (
    <div className={styles.sectionWrapper}>
      <section className={styles.section}>
        <div className={styles.imagesContainer}>
          <div className={styles.firstImageWrapper}>
            <Link to='/book-deals'>
              <div className={styles.firstImageContainer}>
                <span className={styles.firstImageText}>Love Books</span>
                <button>
                  <span>See books</span>
                  <ChevronRight className={styles.chevronIcon} />
                </button>
              </div>
            </Link>
          </div>
          <div className={styles.secondImageWrapper}>
            <Link to='/package-deals'>
              <div className={styles.secondImageContainer}>
                <span className={styles.secondImageText}>Personal Development</span>
                <button>
                  <span>See packages</span>
                  <ChevronRight className={styles.chevronIcon} />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default NewBanner;
