import { createSlice } from '@reduxjs/toolkit';

const storedColorScheme = localStorage.getItem('colorScheme');
const initialState = storedColorScheme ? JSON.parse(storedColorScheme) : {
  backgroundColor: '',
  primaryColor: '',
  secondaryColor: '',
  fontSize: '',
  fontColor: '',
};

const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState,
  reducers: {
    setColorScheme: (state, action) => {
      const { backgroundColor, primaryColor, secondaryColor, fontSize, fontColor } = action.payload;

      state.backgroundColor = backgroundColor;
      state.primaryColor = primaryColor;
      state.secondaryColor = secondaryColor;
      state.fontSize = fontSize;
      state.fontColor = fontColor;

      const colorScheme = {
        backgroundColor,
        primaryColor,
        secondaryColor,
        fontSize,
        fontColor,
      };
      localStorage.setItem('colorScheme', JSON.stringify(colorScheme));
    },
    submitContactForm: (state, action) => {
      console.log(action.payload)
    },
  },
});

export const { setColorScheme, submitContactForm } = colorSchemeSlice.actions;

export default colorSchemeSlice.reducer;
