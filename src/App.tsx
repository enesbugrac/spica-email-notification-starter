import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className={styles["App"]}>
      <h1>SPICA CLOUD FUNCTION</h1>
      <Dropdown />
    </div>
  );
}

export default App;
