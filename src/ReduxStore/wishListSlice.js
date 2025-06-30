import { createSlice } from '@reduxjs/toolkit'

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishList: {},
  },
  reducers: {
    addWishList: (state, action) => {
      const prev = state.wishList || {} // Access previous state value

      state.wishList = {
        ...prev,
        [action.payload._id]: {
          name: action.payload.title,
          curetedprice: action.payload.cureted_price,
          price: action.payload.price,
          img: action.payload.images[0].url,
          stock: action.payload.stock,
          rating: action.payload.ratings,
        },
      }
    },
    removeWishList: (state, action) => {
      const updatedobj = { ...state.wishList }
      delete updatedobj[action.payload]
      state.wishList = updatedobj
    },
  },
})

export const { addWishList, removeWishList } = wishListSlice.actions
export default wishListSlice.reducer
