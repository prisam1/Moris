
import { configureStore } from '@reduxjs/toolkit'
import colorSchemeReducer from './colorSchemeSlice'

const store = configureStore({
  reducer: {
    colorScheme: colorSchemeReducer,
  },
})

export default store