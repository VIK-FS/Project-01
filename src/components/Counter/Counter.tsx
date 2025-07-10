import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {
  const initialCounterValue = 0;
  const [counter, setCounter] = useState<number>(initialCounterValue);
// tuple - кортеж
// state, local state
// setter function - функция сеттер
  function handlePlus() {
    // setCounter(counter + 1);
    setCounter((prev) => prev + 1);
    console.log(counter);
  }

  function handleMinus() {
    setCounter((prev) => prev - 1);
    console.log(counter);
  }

  function handleReset() {
    setCounter(initialCounterValue);
    console.log(counter);
  }
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button type="button" className={`${styles.button} ${styles.minus}`} onClick={handleMinus}>
        -1
      </button>
      <button type="button" className={styles.button} onClick={handlePlus}>
        +1
      </button>
      <button type="button" className={`${styles.button} ${styles.reset}`} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

//