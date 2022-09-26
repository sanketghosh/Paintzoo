import React from "react";
import styles from "./Paints.module.css";
import Card from "../../components/Card/Card";
export default function Paints() {
  return (
    <>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
