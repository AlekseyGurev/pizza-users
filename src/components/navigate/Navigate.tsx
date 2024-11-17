import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigate.module.scss';

export const Navigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.navContainer}>
      <button
        className={`${styles.button} ${
          location.pathname === '/' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
      <button
        className={`${styles.button} ${
          location.pathname === '/new' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate('/new')}
      >
        Создать пользователя
      </button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconBack} ${
          location.pathname === '/' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate(-1)}
      ></button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconEdit} ${
          location.pathname === '/new' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate('/new')}
      ></button>
    </nav>
  );
};
