import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const { name, email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const exists = users.find((u) => u.email === email);

      if (exists) {
        state.error = "User already exists!";
      } else {
        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        state.error = null;
      }
    },

    login: (state, action) => {
      const { email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (validUser) {
        state.user = { name: validUser.name, email: validUser.email };
        localStorage.setItem("user", JSON.stringify(state.user));
        state.error = null;
      } else {
        state.error = "Invalid email or password!";
      }
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
