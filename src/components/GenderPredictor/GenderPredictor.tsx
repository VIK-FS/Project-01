import { useState } from "react";
import styles from "./GenderPredictor.module.css";

interface NameInfo {
  name: string;
  gender: string;
  country: string;
  probability: number;
  remaining_credits: number;
}
const key = import.meta.env.VITE_GENDER_API_KEY;

export const GenderPredictor = () => {
  const [name, setName] = useState("Fred");
  const [nameInfo, setNameInfo] = useState<NameInfo | undefined>(undefined);
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  function handleRevealGender() {
    fetchGender(name);
  }

  async function fetchGender(name: string) {
    const res = await fetch(
      `https://api.genderapi.io/api/?key=${key}&name=${name}`
    );
    const resObj = await res.json();
    setNameInfo(resObj);
  }

  return (
    <div className={styles.container} data-theme={darkMode ? 'dark' : 'light'}>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button className={styles.button} type="button" onClick={handleRevealGender}>
          Reveal gender
        </button>
        <button className={styles.themeToggle} type="button" onClick={toggleTheme}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>

      {nameInfo && (
        <div className={styles.card}>
          <div className={styles.cardItem}>
            <span className={styles.cardLabel}>Name:</span>
            <span className={styles.cardValue}>{nameInfo.name.trim().charAt(0).toUpperCase() + nameInfo.name.trim().slice(1)}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.cardLabel}>Gender:</span>
            <span className={styles.cardValue}>{nameInfo.gender}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.cardLabel}>Country:</span>
            <span className={styles.cardValue}>{nameInfo.country}</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.cardLabel}>Probability:</span>
            <span className={styles.cardValue}>{nameInfo.probability}%</span>
          </div>
          <div className={styles.cardItem}>
            <span className={styles.cardLabel}>Remaining credits:</span>
            <span className={styles.cardValue}>{nameInfo.remaining_credits}</span>
          </div>
        </div>
      )}
    </div>
  );
}