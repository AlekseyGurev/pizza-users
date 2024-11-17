import {
  Container,
  FilterMenu,
  Header,
  Loader,
  Pagination,
  UserCard,
} from '@/components';
import { ITEMS_PER_PAGE, TITLES } from '@constants';
import { IUsers } from '@/models';
import { useAppSelector } from '@/redux/hooks';

import styles from './Users.module.scss';

export const Users = () => {
  const { users: dataUsers } = useAppSelector((state) => state.users);
  const { status, role, sortName, sortEmail } = useAppSelector(
    (state) => state.app
  );

  const usersFilter = (users: IUsers[]) => {
    if (!dataUsers?.length) return [];
    let result = [...dataUsers];

    if (role.value !== 'all') {
      result = users.filter((user: IUsers) => user.role === role.value);
    }

    if (status) {
      result = result.filter((user: IUsers) => user.isArchive === status);
    }

    if (sortName) {
      result.sort((a, b) =>
        a.name.split(' ')[0].localeCompare(b.name.split(' ')[0])
      );
    }

    if (sortEmail) {
      result.sort((a, b) => {
        const [dayA, monthA, yearA] = a.birthday.split('.').map(Number);
        const [dayB, monthB, yearB] = b.birthday.split('.').map(Number);

        if (yearA !== yearB) {
          return yearA - yearB;
        } else if (monthA !== monthB) {
          return monthA - monthB;
        } else {
          return dayA - dayB;
        }
      });
    }

    return result;
  };

  const users = usersFilter(dataUsers);

  const PaginationUsers = () => {
    const { page } = useAppSelector((state) => state.app);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = page * ITEMS_PER_PAGE;
    return users && users.slice(start, end);
  };

  return (
    <>
      <Header title={TITLES.main} />
      {users ? (
        <Container>
          <FilterMenu />
          <ul className={styles.containerCards}>
            {users &&
              PaginationUsers().map((user: IUsers) => (
                <UserCard key={user.id} user={user} page={1} />
              ))}
          </ul>
          <Pagination users={users} />
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};
