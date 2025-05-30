import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './slice/sidebarSlice.ts'
import groupSlice from './slice/groupSlice.ts'

export const store = configureStore({
  reducer: {
       sidebar: sidebarReducer,
      groups:groupSlice
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
