import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogsApi";
import authApi from "./features/auth/authApi";
import authReducer from "./features/auth/authSlice";
import commentApi from "./features/comments/commentApi";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer, // Ensure `reducerPath` is unique
    [authApi.reducerPath]: authApi.reducer, // Ensure `reducerPath` is unique
    [commentApi.reducerPath]:commentApi.reducer,
    auth: authReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware, authApi.middleware,commentApi.middleware),
});
