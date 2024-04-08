import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import filterSlice from "./reducers/searchReducer";
import songSlice from "./reducers/songReducer";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    song: songSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export const Api: string = "https://music-app-backend-two.vercel.app/api/v1";
export const token: string = JSON.parse(
  localStorage.getItem("token") as string
);
