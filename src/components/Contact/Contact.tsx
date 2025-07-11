import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Контакты</h2>
      <form className={styles.form}>
        <input type="text" className={styles.inputField} placeholder="Имя" />
        <input type="email" className={styles.inputField} placeholder="Email" />
        <button type="submit" className={styles.submitButton}>Отправить</button>
      </form>
    </div>
  );
}