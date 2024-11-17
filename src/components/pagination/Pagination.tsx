import styles from './Pagination.module.scss';
import { downPage, upPage } from '@/redux/appSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IUsers } from '@/models';

export const Pagination = ({ users }: { users: IUsers[] }) => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.app);
  const totalPage = Math.ceil(users.length / 6);

  return (
    <div className={styles.pagination}>
      <button
        className={`${styles.button} ${styles.buttonBack}`}
        onClick={() => dispatch(downPage())}
        disabled={page == 1 ? true : false}
      ></button>
      <button
        className={`${styles.button} ${styles.buttonForward}`}
        onClick={() => dispatch(upPage())}
        disabled={page === totalPage ? true : false}
      ></button>
    </div>
  );
};
