import { Navigate } from '@components';
import styles from './Header.module.scss';

export const Header = ({ title }: { title: string }) => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.container}>
        <Navigate />
        <div className={styles.descriptionContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    </div>
  );
};
