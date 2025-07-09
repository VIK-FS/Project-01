import { useState } from 'react';
import styles from './SpaceMissionForm.module.css';

export default function SpaceMissionForm() {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');

  const planets = ['Mars', 'Venus', 'Jupiter', 'Saturn'];

  return (
    <div className={styles.formContainer}>
      <form>
        <label>
          Astronaut Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inputField}
          />
        </label>
        
        <label>
          Destination Planet:
          <select
            value={planet}
            onChange={(e) => setPlanet(e.target.value)}
            className={styles.selectField}
          >
            <option value="">Select planet</option>
            {planets.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
      </form>

      <div className={styles.message}>
        {name ? (
          <p>🧑‍🚀 Astronaut {name} is headed to {planet || 'unknown planet'}!</p>
        ) : (
          <p>Please enter your name to begin your mission.</p>
        )}
      </div>
    </div>
  );
}