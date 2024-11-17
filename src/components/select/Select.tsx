import { Label, Error } from '@components';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '@/models';
import styles from './Select.module.scss';

export interface ISelect {
  name: keyof IFormValues;
  title: string;
  errors?: string | undefined;
  errorProps: RegisterOptions<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

export const Select = ({
  name,
  title,
  register,
  errorProps,
  errors,
  ...props
}: ISelect) => {
  return (
    <Label name={name} title={title}>
      <select
        className={styles.select}
        id={name}
        {...register(name, errorProps)}
        {...props}
      >
        <option value="cook">Повар</option>
        <option value="waiter">Официант</option>
        <option value="driver">Водитель</option>
      </select>
      <Error errors={errors} />
    </Label>
  );
};
