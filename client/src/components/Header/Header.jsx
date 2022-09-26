import styles from "./Header.module.css";
import { BiAddToQueue } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <p className={styles.headerText}>Paintzoo</p>
      </Link>
      <ul className={styles.navItems}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className={styles.listItem}>Home</li>
        </Link>
        <li className={styles.listItem}>About Us</li>
        <li className={styles.listItem}>Contact Us</li>
      </ul>

      <Link to="/uploaditem" style={{ textDecoration: "none" }}>
        <button className={styles.addItem}>
          Add Item
          <BiAddToQueue />
        </button>
      </Link>
    </div>
  );
}
