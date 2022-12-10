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
export const createExtra = createAsyncThunk(
  'extras/create',
  async (extraData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.createExtra(extraData, token)
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
export const getExtras = createAsyncThunk(
  'extras/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.getExtras(token)
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
export const updateExtra = createAsyncThunk(
  'extras/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.updateExtra(id, token)
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
export const deleteExtra = createAsyncThunk(
  'extras/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await extraService.deleteExtra(id, token)
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
      .addCase(createExtra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createExtra.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras.push(action.payload)
      })
      .addCase(createExtra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getExtras.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getExtras.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras = action.payload
      })
      .addCase(getExtras.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateExtra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateExtra.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.extras = state.extras.filter(
          (extra) => extra._id === action.payload.id
        )
      })
      .addCase(updateExtra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteExtra.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteExtra.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.extras = state.extras.filter(
          (extra) => extra._id !== action.payload.id
        )
      })
      .addCase(deleteExtra.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = extraSlice.actions
export default extraSlice.reducer