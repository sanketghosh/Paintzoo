import styles from "./Card.module.css";

import { RiDeleteBinFill } from "react-icons/ri";
import { MdTipsAndUpdates } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ title, desc, image }) {
  return (
    <div className={styles.cardWrapper}>
      <img src="./images/img01.jpg" alt="image" className={styles.cardImage} />
      <h2 className={styles.imgTitle}>{title}</h2>
      <p className={styles.productDesc}>{desc}</p>
      <div className={styles.productPrice}>
        <span className={styles.priceText}>Price: </span>
        <span className={styles.priceText}>$299</span>
      </div>
      <div className={styles.btnContainer}>
        <Link to="/update" style={{ textDecoration: "none" }}>
          <button className={styles.updateBtn}>
            update <MdTipsAndUpdates className={styles.updtIcon} />
          </button>
        </Link>
        <button className={styles.deleteBtn}>
          delete
          <RiDeleteBinFill className={styles.dltIcon} />
        </button>
      </div>
    </div>
  );
}
