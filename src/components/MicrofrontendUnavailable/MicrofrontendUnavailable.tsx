import { Link } from 'react-router-dom';
import styles from './MicrofrontendUnavailable.module.css';

export default function MicrofrontendUnavailable() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h2 className={styles.title}>Сервис недоступен</h2>
        <p className={styles.text}>Микрофронтенд сейчас не запущен или временно недоступен.</p>
        <Link to="/" className={styles.mfButton}>
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
}
