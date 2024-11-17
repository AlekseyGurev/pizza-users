import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { TITLES } from '@constants';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IFormValues, IUsers } from '@/models';
import { createUsers, editUser } from '@/redux/usersSlice';
import {
  Container,
  Header,
  Input,
  InputCheckBox,
  Label,
  Select,
} from '@components';
import styles from './EditPage.module.scss';

export const EditPage = () => {
  const { users } = useAppSelector((state) => state.users);
  const [user, setUser] = useState({} as IUsers);
  const phone = useRef('');
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const defaultForm = {
    name: '',
    isArchive: false,
    role: '',
    phone: '',
    birthday: '',
    avatar: '',
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    setError,
    clearErrors,
  } = useForm<IFormValues>({
    defaultValues: defaultForm,
  });

  useEffect(() => {
    if (location.pathname === '/new') {
      reset(defaultForm);
      phone.current = '';
    }
    if (!id) return;
    setUser(users.find((user: IUsers) => user.id === Number(id)));
    if (!user) {
      navigate('/');
      return;
    }
    reset(user);
    phone.current = user.phone;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, users, navigate, reset, location, user]);

  const onSubmit = (user: IUsers) => {
    if (id) {
      dispatch(editUser(user));
      navigate(-1);
    } else {
      const id = Math.floor(Math.random() * 100 + 20);
      const avatar = `https://avatar.iran.liara.run/public/${id}`;
      dispatch(createUsers({ ...user, id, avatar: avatar }));
      navigate('/');
    }
  };

  const nameProps = {
    required: 'Имя обязательно',
    minLength: { value: 2, message: 'Минимум 2 символа' },
    pattern: {
      value: /^[а-яёА-ЯЁ]+\s[а-яёА-ЯЁ]+$/,
      message: 'введите имя и фамилию русскими буквами: Иван Иванов',
    },
  };

  const birthdayProps = {
    required: 'Дата рождения обязательна',
    pattern: {
      value: /^\d{2}\.\d{2}\.\d{4}$/,
      message: 'формат даты дд.мм.гггг',
    },
  };

  const roleProps = {
    required: 'Выберите должность',
  };

  return (
    <>
      {}
      <Header title={id ? TITLES.edit : TITLES.new} />
      <Container>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="name"
            title="Имя"
            type="text"
            errorProps={nameProps}
            register={register}
            errors={errors.name?.message}
          />

          <Input
            name="birthday"
            title="Дата рождени"
            type="text"
            errorProps={birthdayProps}
            register={register}
            errors={errors.birthday?.message}
          />

          <Label title="Телефон" name="phone">
            <IMaskInput
              id="phone"
              mask="+{7}(000)000-0000"
              className={styles.textInput}
              value={phone.current}
              onAccept={(value) => {
                setValue('phone', value);
                phone.current = value;
                if (value.length !== 15) {
                  setError('phone', {
                    message: 'формат телефона +7(111)111-11111',
                  });
                } else {
                  clearErrors('phone');
                }
              }}
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone.message}</span>
            )}
          </Label>

          <Select
            name={'role'}
            title={'Должность'}
            register={register}
            errorProps={roleProps}
            errors={errors.role?.message}
          />

          <InputCheckBox
            name="isArchive"
            title="В архиве"
            register={register}
          />

          <button className={styles.button} type="submit">
            Сохранить
          </button>
        </form>
      </Container>
    </>
  );
};
