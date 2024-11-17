import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersApiSlice } from './usersApiSlice';
import appSlice from './appSlice';
import usersSlice from './usersSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const rootReducer = persistReducer(
  { key: 'redux', storage: storage, whitelist: ['app'] },
  combineSlices(usersApiSlice, {
    users: usersSlice,
    app: appSlice,
  })
);

export type RootState = ReturnType<typeof store.getState>;

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
        },
      }).concat([usersApiSlice.middleware]);
    },
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = makeStore();

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
