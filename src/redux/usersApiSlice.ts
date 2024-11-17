import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers } from '../models';

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  reducerPath: 'usersApi',
  endpoints(build) {
    return {
      getUsers: build.query<IUsers[], void>({
        query: () => ({ url: '/e7244add-7dc4-486b-a895-af289d0adb2a' }),
      }),
    };
  },
});

export const { useGetUsersQuery } = usersApiSlice;
