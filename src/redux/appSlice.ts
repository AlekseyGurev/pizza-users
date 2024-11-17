import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  page: number;
  role: { value: string; label: string };
  status: boolean;
  sortName: boolean;
  sortEmail: boolean;
} = {
  page: 1,
  role: { value: 'all', label: 'all' },
  status: false,
  sortName: false,
  sortEmail: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeSortName(state) {
      state.sortName = !state.sortName;
    },
    changeSortEmail(state) {
      state.sortEmail = !state.sortEmail;
    },
    changeStatus(state) {
      state.status = !state.status;
      state.page = 1;
    },
    changeRole(state, action) {
      state.role = action.payload;
      state.page = 1;
    },

    upPage(state) {
      state.page = state.page + 1;
    },
    downPage(state) {
      state.page = state.page - 1;
    },
  },
});

export const {
  upPage,
  downPage,
  changeRole,
  changeStatus,
  changeSortName,
  changeSortEmail,
} = appSlice.actions;
export default appSlice.reducer;
