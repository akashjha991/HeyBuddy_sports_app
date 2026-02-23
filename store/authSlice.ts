import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  token: string | null;
  userName: string | null;
};

const initialState: AuthState = {
  token: null,
  userName: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ token: string; userName: string }>) {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    clearAuth(state) {
      state.token = null;
      state.userName = null;
    }
  }
});

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
