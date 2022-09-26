import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Paints from "./pages/Paints/Paints";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateItem from "./pages/UpdateItem/UpdateItem";
import UploadNewItem from "./pages/UploadNewItem/UploadNewItem";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Paints />} />
          <Route path="/update" element={<UpdateItem />} />
          <Route path="/uploaditem" element={<UploadNewItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
