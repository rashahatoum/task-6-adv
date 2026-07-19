import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../slice/themeSlice";
import postsReducer from "./../slice/postsSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        posts: postsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;