import { Link } from 'react-router-dom';
import styles from './UserCard.module.scss';
import { IUsers } from '@/models';

export const UserCard = ({ user }: { user: IUsers; page?: number }) => {
  return (
    <li className={styles.container}>
      <Link className={styles.link} to={`/pizza-users/users/${user.id}`}>
        <img
          className={styles.image}
          src={user.avatar}
          width={124}
          height={124}
          alt="foto"
        />
        <h2 className={styles.title}>{`${user.name.split(' ')[0]} `}</h2>
        <p className={styles.text}>{user.role}</p>
        <p className={styles.text}>{user.phone}</p>
      </Link>
    </li>
  );
};
