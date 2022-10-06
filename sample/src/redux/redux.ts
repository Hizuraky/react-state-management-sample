import { createSlice, configureStore } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1
    },
    removeCount: (state) => {
      state.count = 0
    },
    updateCount: (state, { payload }) => {
      state.count = payload
    }
  }
})

export const { incrementCount, removeCount, updateCount } = countSlice.actions

export const store = configureStore({
  reducer: countSlice.reducer
})
