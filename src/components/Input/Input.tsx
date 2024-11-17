import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Error, Label } from '@components';
import { IFormValues } from '@/models';
import styles from './Input.module.scss';

export interface IInput {
  name: keyof IFormValues;
  title: string;
  errors?: string | undefined;
  type: string;
  errorProps: RegisterOptions<IFormValues>;
  register: UseFormRegister<IFormValues>;
}

export const Input = ({
  name,
  title,
  errors,
  type,
  errorProps,
  register,
  ...props
}: IInput) => {
  return (
    <>
      <Label title={title} name={name}>
        <input
          className={styles.textInput}
          type={type}
          id={name}
          {...register(name, errorProps)}
          {...props}
        />
        <Error errors={errors} />
      </Label>
    </>
  );
};
