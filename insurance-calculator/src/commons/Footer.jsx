import React from "react";
import styles from "./Footer.module.css";
import Logo from "../assets/turnerscars_logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img className={styles.logo} src={Logo} alt="Turners" />
    </footer>
  );
};

export default Footer;
