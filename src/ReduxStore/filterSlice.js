import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    rating: [],
    discount: [],
    sortBy: '',
    searchText: '',
  },
  reducers: {
    setRating: (state, action) => {
      const prev = state.rating || [] // Access previous state value
      state.rating = [...prev, parseInt(action.payload)]
    },
    removeRating: (state, action) => {
      state.rating = state.rating.filter((e) => e != action.payload)
    },
    setDiscount: (state, action) => {
      const prev = state.discount || [] // Access previous state value
      state.discount = [...prev, parseInt(action.payload)]
    },
    removeDiscount: (state, action) => {
      state.discount = state.discount.filter((e) => e != action.payload)
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload
    },
  },
})

export const {
  setRating,
  removeRating,
  setDiscount,
  removeDiscount,
  setSortBy,
  setSearchText,
} = filterSlice.actions
export default filterSlice.reducer
