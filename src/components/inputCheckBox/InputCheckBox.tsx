import { UseFormRegister } from 'react-hook-form';
import { Label } from '../label/Label';
import styles from './InputCheckBox.module.scss';
import { IFormValues } from '@/models';

export const InputCheckBox = ({
  name,
  title,
  register,
  ...props
}: {
  name: keyof IFormValues;
  title: string;
  register: UseFormRegister<IFormValues>;
}) => {
  return (
    <Label title={title} name={name}>
      <input
        id={name}
        className={styles.checkbox}
        type="checkbox"
        {...register(name)}
        {...props}
      />
    </Label>
  );
};
