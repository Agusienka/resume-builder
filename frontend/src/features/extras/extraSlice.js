import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import extraService from './extraService'

const initialState = {
  extras: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new extra
export const createextra = createAsyncThunk(
  'extras/create',
  async (extraData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.createextra(extraData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user extra
export const getextras = createAsyncThunk(
  'extras/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.getextras(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//update user extra
export const updateextra = createAsyncThunk(
  'extras/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.updateextra(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user extra
export const deleteextra = createAsyncThunk(
  'extras/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.deleteextra(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const extraSlice = createSlice({
  name: 'extra',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createextra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createextra.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras.push(action.payload)
      })
      .addCase(createextra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getextras.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getextras.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras = action.payload
      })
      .addCase(getextras.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateextra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateextra.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.extras = state.extras.filter(
          (extra) => extra._id === action.payload.id
        )
      })
      .addCase(updateextra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteextra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteextra.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras = state.extras.filter(
          (extra) => extra._id !== action.payload.id
        )
      })
      .addCase(deleteextra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = extraSlice.actions
export default extraSlice.reducer