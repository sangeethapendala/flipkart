import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import userSlice from './userSlice'
import filterSlice from './filterSlice'
import wishListSlice from './wishListSlice'

const appStore = configureStore({
  reducer: {
    productStore: productSlice,
    userStore: userSlice,
    filterStore: filterSlice,
    wishListStore: wishListSlice,
  },
})

export default appStore
