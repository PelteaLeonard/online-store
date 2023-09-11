import styles from "./styles.module.css";

import {
  Pets,
  Looks,
  Create,
  Favorite,
  Carpenter,
  HistoryEdu,
  Psychology,
  MenuBookOutlined,
  VaccinesOutlined,
  NewspaperOutlined,
  TwoWheelerOutlined,
  LocalDiningOutlined,
  AutoStoriesOutlined,
  EngineeringOutlined,
  BedroomBabyOutlined,
  EmojiEmotionsOutlined,
  HealthAndSafetyOutlined,
} from "@mui/icons-material";

function Menu() {
  const categories = [
    {
      icon: <HistoryEdu />,
      name: "History",
    },
    {
      icon: <Pets />,
      name: "Pets",
    },
    {
      icon: <Favorite />,
      name: "Romance",
    },
    {
      icon: <Psychology />,
      name: "Science-Fiction",
    },
    {
      icon: <Carpenter />,
      name: "Thriller",
    },
    {
      icon: <LocalDiningOutlined />,
      name: "Traditional Romanian Food",
    },
    {
      icon: <Create />,
      name: "Poetry Books",
    },
    {
      icon: <AutoStoriesOutlined />,
      name: "Novel Books",
    },
    {
      icon: <EmojiEmotionsOutlined />,
      name: "Mindset",
    },
    {
      icon: <VaccinesOutlined />,
      name: "Medicine Books",
    },
    {
      icon: <HealthAndSafetyOutlined />,
      name: "Healthy Books",
    },
    {
      icon: <NewspaperOutlined />,
      name: "Famous Newspaper",
    },
    {
      icon: <Looks />,
      name: "Fairytale Books",
    },
    {
      icon: <EngineeringOutlined />,
      name: "Engineering Books",
    },
    {
      icon: <MenuBookOutlined />,
      name: "Dictionary",
    },
    {
      icon: <TwoWheelerOutlined />,
      name: "Comics Books",
    },
    {
      icon: <BedroomBabyOutlined />,
      name: "Children's Literature",
    },
  ];

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {categories.map(({ icon, name }) => (
          <li key={name} className={styles.item}>
            <div className={styles.iconWrapper}>{icon}</div>
            <div className={styles.textWrapper}>
              <p>{name}</p>
            </div>
            <div className={styles.buttonWrapper}>
              <button>View all</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
