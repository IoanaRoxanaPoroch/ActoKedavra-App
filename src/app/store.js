import { configureStore } from '@reduxjs/toolkit'

import screenReducer from 'features/windowWidth/WindowWidthSlice'

export default configureStore({
  reducer: {
    screen: screenReducer,
  },
})
