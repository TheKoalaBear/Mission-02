import React from "react";
import styles from "./Nav.module.css";
import Logo from "../assets/turnerscars_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="Turners" />
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
          <Link to="/">Car Evaluation</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/claim-history">Claim History</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/premium-calculator">Premium Calculator</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/discount-rate">Discount Rate</Link>
        </li>
      </ul>
      <button className={styles.loginButton}>Login</button>
    </nav>
  );
};

export default Nav;
