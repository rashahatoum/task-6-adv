import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  isDarkMode: boolean;
}

const loadTheme = (): boolean => {
  const savedTheme = localStorage.getItem("isDarkMode");
  return savedTheme === "true";
};

const initialState: ThemeState = {
  isDarkMode: loadTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", String(state.isDarkMode));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;