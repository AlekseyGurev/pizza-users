import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navigate.module.scss';

export const Navigate = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);

  return (
    <nav className={styles.navContainer}>
      <button
        className={`${styles.button} ${
          location.pathname === '/pizza-users/' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
      <button
        className={`${styles.button} ${
          location.pathname === '/pizza-users/new' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate('/pizza-users/new')}
      >
        Создать пользователя
      </button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconBack} ${
          location.pathname === '/pizza-users/' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate(-1)}
      ></button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconEdit} ${
          location.pathname === '/pizza-users/new' ? styles.visuallyHidden : ''
        }`}
        onClick={() => navigate('/pizza-users/new')}
      ></button>
    </nav>
  );
};
