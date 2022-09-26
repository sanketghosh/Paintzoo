import React from "react";
import styles from "./UploadNewItem.module.css";
export default function UploadNewItem() {
  return (
    <>
      <div className={styles.uploadFormWrapper}>
        <form className={styles.uploadForm}>
          <h1 className={styles.uploadTitle}>Upload Your Item</h1>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Paint Title*</label>
            <input
              type="text"
              placeholder="Enter the paint title"
              className={styles.formItemInput}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Description</label>
            <textarea
              placeholder="Description of your paint"
              className={styles.formItemInputTextarea}
            ></textarea>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Price*</label>
            <input
              type="number"
              placeholder="Enter paint price"
              className={styles.formItemInput}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Image*</label>
            <input
              placeholder="Enter image url here"
              className={styles.formItemInput}
            />
          </div>
          <button className={styles.submitUploadBtn}>Upload Your Item</button>
        </form>
      </div>
    </>
  );
}
