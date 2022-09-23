import styles from "./Card.module.css";

import React from "react";

export default function Card() {
  return (
    <div className={styles.cardWrapper}>
      <img src="./images/img01.jpg" alt="image" className={styles.cardImage} />
      <p className={styles.productDesc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
        corrupti consequuntur perspiciatis necessitatibus impedit minus
        aspernatur. Doloremque provident consequuntur facilis.
      </p>
      <div className={styles.productPrice}>
        <span className={styles.priceText}>Price: </span>
        <span className={styles.priceText}>$299</span>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.updateBtn}>update</button>
        <button className={styles.deleteBtn}>delete</button>
      </div>
    </div>
  );
}
