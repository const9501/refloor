import {configureStore} from "@reduxjs/toolkit";
import floorSlice from "./floorSlice";

export const store = configureStore({
  reducer: floorSlice,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch