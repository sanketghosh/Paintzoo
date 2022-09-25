import styles from "./App.module.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
