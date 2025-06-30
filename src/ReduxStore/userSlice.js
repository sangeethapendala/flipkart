import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: '',
    currentPath: '/',
    windowWidth: window.innerWidth,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload
    },
    setWindowWidth: (state, action) => {
      state.windowWidth = action.payload
    },
  },
})

export const { setUserInfo, setCurrentPath, setWindowWidth } = userSlice.actions
export default userSlice.reducer
