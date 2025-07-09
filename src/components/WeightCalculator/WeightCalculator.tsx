import { useState } from "react";
import styles from './WeightCalculator.module.css';
export default function WeightCalculator() {
  type Gender = "male" | "female";
  const [weight, setWeight] = useState<number>(60);
  const [height, setHeight] = useState<number>(170);
  const [gender, setGender] = useState<Gender>("female");
  const [message, setMessage] = useState<string>("");
  const [weightError, setWeightError] = useState<string>('');
  const [heightError, setHeightError] = useState<string>('');

function calculateWeight() {
  let idealWeight = 0;
if (gender  === "female") {
  idealWeight = (Number(height)  - 110) * 1.15;
} else {
  idealWeight = (Number(height) - 100) * 1.1;
}
  let message = "";
  if (Number(weight) > idealWeight) {
    message = "You are overweight";
  } else if (Number(weight) < idealWeight) {
    message = "You are underweight";
  } else {
    message = "You have a normal weight";
  }
  setMessage(message);
}

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Weight Calculator</h2>
      <div className={styles.formGroup}>
        <label className={styles.formLabel}>
          Weight (kg):
          <input
            type="number"
            className={styles.inputField}
            value={weight}
            onChange={(event) => {
              const parsedValue = parseFloat(event.target.value);
              if (!isNaN(parsedValue)) {
                setWeight(parsedValue);
                setWeightError('');
              } else {
                setWeightError('Введите число');
              }
            }}
          />
        </label>
        <label className={styles.formLabel}>
          Height (cm):
          <input
            type="number"
            min="100"
            max="250"
            className={styles.inputField}
            value={height}
            onChange={(event) => {
  const parsedValue = parseFloat(event.target.value);
  if (!isNaN(parsedValue) && parsedValue >= 100 && parsedValue <= 250) {
    setHeight(parsedValue);
    setHeightError('');
  } else {
    setHeightError('Введите число от 100 до 250');
  }
}}
          />
        </label>
        <select
          className={styles.selectField}
          value={gender}
          onChange={(event) => setGender(event.target.value as Gender)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {weightError && <div className={styles.error}>{weightError}</div>}
        {heightError && <div className={styles.error}>{heightError}</div>}
        <button 
          onClick={calculateWeight}
          className={styles.submitButton}
          disabled={!!weightError || !!heightError}
        >
          Calculate
        </button>
        {message && 
          <div className={`${styles.messageBox} ${message.includes('over') ? styles.overweight : message.includes('under') ? styles.underweight : styles.normal}`}>
            {message}
          </div>}
      </div>
    </div>
  );
}