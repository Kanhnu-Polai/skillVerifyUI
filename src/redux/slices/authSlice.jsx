import { createSlice } from '@reduxjs/toolkit';

// Define the shape of the auth state (optional TypeScript types)
const initialState = {
  isAuthenticated: false, // Indicates if the user is logged in
  user: null, // User data: { userId: number, email: string, role: string }
  token: null, // JWT token: string
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Login action: sets the user and token in state
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user; // { userId, email, role }
      state.token = action.payload.token; // JWT token
    },
    // Logout action: resets the state to initial values
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;