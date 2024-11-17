import { createSlice } from '@reduxjs/toolkit';
import { IUsersState } from '../models';

const initialState: IUsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers(state, action) {
      state.users = action.payload;
    },
    editUser(state, action) {
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    },
    createUsers(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { addUsers, editUser, createUsers } = usersSlice.actions;
export default usersSlice.reducer;
