//react
import React from "react";

//Style
import styles from "./Footer.module.css";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>
        Made by Miguel Rabatini Dias Santana @ 2024
      </span>
    </footer>
  );
};

export default Footer;
