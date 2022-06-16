import { createSlice } from '@reduxjs/toolkit'

export const WindowWidthSlice = createSlice({
  name: 'screenWidth',
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    screenWidthResize: (state, action) => {
      state.width = action.payload
    },
  },
})

export const { screenWidthResize } = WindowWidthSlice.actions

export default WindowWidthSlice.reducer
