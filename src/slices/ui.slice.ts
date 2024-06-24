import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export type InitialStateType = {
  loading: boolean
}

const initialState: InitialStateType = {
  loading: true,
}

// SLICE
export const dataSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = dataSlice.actions
export default dataSlice.reducer
