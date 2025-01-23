import { createSlice } from "@reduxjs/toolkit";

const loadUserFromLocalStorage = () => {
  try {
    if (typeof localStorage === "undefined") {
      return { user: null }; // Avoid errors in SSR environments
    }
    const serializedState = localStorage.getItem("user");
    if (serializedState === null) {
      return { user: null };
    }
    return { user: JSON.parse(serializedState) };
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
    return { user: null };
  }
};

const initialState = loadUserFromLocalStorage();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    logout: (state) => {
      state.user = null;
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
