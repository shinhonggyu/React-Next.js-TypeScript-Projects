import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      localStorage.setItem('isLoggedIn', '1');
      state.isAuthenticated = true;
    },
    logout(state) {
      localStorage.removeItem('isLoggedIn');
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
