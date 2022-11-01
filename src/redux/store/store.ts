import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dataReducer from "../features/dataSlice"
import screenReducer from "../features/screenSlice"
import cartReducer from "../features/cartSlice"

export const store = configureStore({
  reducer: {
    fetcher:dataReducer,
    screen:screenReducer,
    cart:cartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
