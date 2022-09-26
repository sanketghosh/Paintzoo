import React from "react";
import styles from "./UpdateItem.module.css";

export default function UpdateItem() {
  return (
    <>
      <div className={styles.updateFormWrapper}>
        <form className={styles.updateForm}>
          <h1 className={styles.updateTitle}>Update Your Item</h1>
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
          <button className={styles.submitUpdateBtn}>Update Preferences</button>
        </form>
      </div>
    </>
  );
}
