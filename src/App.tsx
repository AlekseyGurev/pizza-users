import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useGetUsersQuery } from '@/redux/usersApiSlice';
import { useEffect } from 'react';
import { addUsers } from '@/redux/usersSlice';
import { IUsers } from '@/models';
import { Users, EditPage } from '@pages';
import mockData from '@/mocks/employees.json';
import { useAppDispatch } from '@/redux/hooks';

const router = createBrowserRouter(
  [
    {
      path: '/pizza-users/',
      element: <Users />,
    },
    {
      path: '/pizza-users/users/:id',
      element: <EditPage />,
    },
    {
      path: '/pizza-users/new',
      element: <EditPage />,
    },
    {
      path: '*',
      element: <Users />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export const App = () => {
  const { data: users, isSuccess } = useGetUsersQuery();
  const dispatch = useAppDispatch();
  const getUsers = (users: IUsers[] = mockData) => {
    dispatch(
      addUsers(
        users.map((user) => {
          return {
            ...user,
            avatar: `https://avatar.iran.liara.run/public/${user.id}`,
          };
        })
      )
    );
  };

  useEffect(() => {
    if (isSuccess) {
      getUsers(users);
    }

    if (!users) {
      getUsers(mockData);
    }
  }, [isSuccess, dispatch, users]);

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
};
