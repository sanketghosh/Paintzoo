import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./UpdateItem.module.css";

export default function UpdateItem() {
  const [inputs, setInputs] = useState({
    title: "",
    desc: "",
    price: null,
    image: "",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const paintId = location.pathname.split("/")[2];
  // console.log(location.pathname.split("/")[2]);

  const handleChange = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const clickHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.put("http://localhost:5000/api/paints/" + paintId, inputs);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Description</label>
            <textarea
              placeholder="Description of your paint"
              className={styles.formItemInputTextarea}
              name="desc"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Price*</label>
            <input
              type="number"
              placeholder="Enter paint price"
              className={styles.formItemInput}
              name="price"
              onChange={handleChange}
            />
          </div>
          <div className={styles.formItem}>
            <label className={styles.formItemLabel}>Image*</label>
            <input
              placeholder="Enter image url here"
              className={styles.formItemInput}
              name="image"
              onChange={handleChange}
            />
          </div>
          <button className={styles.submitUpdateBtn} onClick={clickHandler}>
            Update Preferences
          </button>
        </form>
      </div>
    </>
  );
}
