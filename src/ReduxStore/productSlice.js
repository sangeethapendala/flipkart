import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productsAdded: {},
  },
  reducers: {
    addItems: (state, action) => {
      const prev = state.productsAdded || {} // Access previous state value

      state.productsAdded = {
        ...prev,
        [action.payload._id]: {
          name: action.payload.title,
          curetedprice: action.payload.cureted_price,
          price: action.payload.price,
          img: action.payload.images[0].url,
          stock: action.payload.stock,
          rating: action.payload.ratings,
          count: prev[action.payload._id]?.count
            ? prev[action.payload._id].count + 1
            : 1,
        },
      }
    },
    removeItems: (state, action) => {
      const updatedobj = { ...state.productsAdded }
      delete updatedobj[action.payload]
      state.productsAdded = updatedobj
      //   setproductsadded==state.productsAdded
    },
    increaseItemCount: (state, action) => {
      const prev = state.productsAdded || {} // Access previous state value
      state.productsAdded = {
        ...prev,
        [action.payload]: {
          ...prev[action.payload],
          count: prev[action.payload].count
            ? prev[action.payload].count + 1
            : 1,
        },
      }
    },
    decreaseItemCount: (state, action) => {
      const prev = state.productsAdded || {} // Access previous state value
      state.productsAdded = {
        ...prev,
        [action.payload]: {
          ...prev[action.payload],
          count: prev[action.payload].count
            ? prev[action.payload].count - 1
            : 0,
        },
      }
    },
    emptyItems: (state, action) => {
      state.productsAdded = {}
    },
  },
})

export const {
  addItems,
  removeItems,
  decreaseItemCount,
  increaseItemCount,
  emptyItems,
} = productSlice.actions
export default productSlice.reducer
