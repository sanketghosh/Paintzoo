import React, { useEffect, useState } from "react";
import styles from "./Paints.module.css";
import Card from "../../components/Card/Card";
import axios from "axios";
export default function Paints() {
  const [paints, setPaints] = useState([]);
  useEffect(() => {
    const fetchAllPaints = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/paints");
        setPaints(res.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllPaints();
  }, []);
  return (
    <>
      <div className={styles.cardsContainer}>
        {paints.map((paint) => (
          <Card
            key={paint.id}
            title={paint.title}
            desc={paint.desc}
            image={paint.image}
          />
        ))}
      </div>
    </>
  );
}
