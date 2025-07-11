import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>О нас</h1>
      <p className={styles.description}>Это страница с информацией о нашей компании.</p>
    </div>
  );
}