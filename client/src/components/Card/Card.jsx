import styles from "./Card.module.css";

import { RiDeleteBinFill } from "react-icons/ri";
import { MdTipsAndUpdates } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Card({ id, title, desc, image, price }) {
  const deleteHandler = async (paintId) => {
    try {
      await axios.delete("http://localhost:5000/api/paints/" + paintId);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.cardWrapper}>
      {image && <img src={image} alt="image" className={styles.cardImage} />}
      <h2 className={styles.imgTitle}>{title}</h2>
      <p className={styles.productDesc}>{desc}</p>
      <div className={styles.productPrice}>
        <span className={styles.priceText}>Price: </span>
        <span className={styles.priceText}>${price}</span>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`/update/${id}`} style={{ textDecoration: "none" }}>
          <button className={styles.updateBtn}>
            update <MdTipsAndUpdates className={styles.updtIcon} />
          </button>
        </Link>
        <button className={styles.deleteBtn} onClick={() => deleteHandler(id)}>
          delete
          <RiDeleteBinFill className={styles.dltIcon} />
        </button>
      </div>
    </div>
  );
}
