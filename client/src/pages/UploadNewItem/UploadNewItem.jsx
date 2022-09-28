import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UploadNewItem.module.css";

export default function UploadNewItem() {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const clickHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/paints", inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              onChange={handleChange}
              name="price"
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Description</label>
            <textarea
              placeholder="Description of your paint"
              className={styles.formItemInputTextarea}
              onChange={handleChange}
              name="desc"
            ></textarea>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Price*</label>
            <input
              type="number"
              placeholder="Enter paint price"
              className={styles.formItemInput}
              onChange={handleChange}
              name="price"
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Image*</label>
            <input
              placeholder="Enter image url here"
              className={styles.formItemInput}
              onChange={handleChange}
              name="image"
            />
          </div>
          <button className={styles.submitUploadBtn} onClick={clickHandler}>
            Upload Your Item
          </button>
        </form>
      </div>
    </>
  );
}
