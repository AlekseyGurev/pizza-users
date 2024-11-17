import { ISortButton } from '@/models';
import styles from './ButtonSort.module.scss';

export const ButtonSort = ({ children, sort, onClick }: ISortButton) => {
  return (
    <button
      className={
        sort ? [styles.button, styles.active].join(' ') : styles.button
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
