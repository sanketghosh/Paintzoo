import styles from "./Header.module.css";
import { BiAddToQueue } from "react-icons/bi";
import React from "react";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <p className={styles.headerText}>Paintzoo</p>
      <ul className={styles.navItems}>
        <li className={styles.listItem}>Home</li>
        <li className={styles.listItem}>About Us</li>
        <li className={styles.listItem}>Contact Us</li>
      </ul>

      <button className={styles.addItem}>
        Add Item
        <BiAddToQueue />
      </button>
    </div>
  );
}
