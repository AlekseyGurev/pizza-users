import Select from 'react-select';
import styles from './FilterMenu.module.scss';
import { useAppSelector } from '@/redux/hooks';
import {
  changeRole,
  changeStatus,
  changeSortEmail,
  changeSortName,
} from '../../redux/appSlice';
import { useDispatch } from 'react-redux';
import { Checkbox } from '../checkBox/CheckBox';
import { ButtonSort } from '../buttonSort/ButtonSort';
import { IUsers } from '@/models';

export const FilterMenu = () => {
  const dispatch = useDispatch();
  const { users } = useAppSelector((state) => state.users);
  const { role, status, sortName, sortEmail } = useAppSelector(
    (state) => state.app
  );
  const DEFAULT_ROLE = [{ value: 'all', label: 'all' }];
  const getRoles = [
    ...new Set(users && users.map((user: IUsers) => user.role)),
  ].map((role) => {
    return { value: role, label: role };
  });

  const rolesOptions = getRoles && [...getRoles, ...DEFAULT_ROLE];

  return (
    <ul className={styles.container}>
      <li className={styles.selectWrapper}>
        {rolesOptions && (
          <Select
            className="basic-single"
            options={rolesOptions}
            name="role"
            defaultValue={role}
            onChange={(select) => dispatch(changeRole(select))}
          />
        )}
      </li>
      <li>
        <Checkbox checked={status} onChange={() => dispatch(changeStatus())}>
          {'В архиве'}
        </Checkbox>
      </li>
      <li>
        <ButtonSort sort={sortName} onClick={() => dispatch(changeSortName())}>
          По алфавиту
        </ButtonSort>
      </li>
      <li>
        <ButtonSort
          sort={sortEmail}
          onClick={() => dispatch(changeSortEmail())}
        >
          По дате рождения
        </ButtonSort>
      </li>
    </ul>
  );
};
