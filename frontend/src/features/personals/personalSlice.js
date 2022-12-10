import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import personalService from './personalService'

const initialState = {
  personals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new personal
export const createPersonal = createAsyncThunk(
  'personals/create',
  async (personalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await personalService.createPersonal(personalData, token)
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

// Get user personal facts
export const getPersonals = createAsyncThunk(
  'personals/getAll',
  async (personalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await personalService.getPersonals(token)
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

//update user goals
export const updatePersonal = createAsyncThunk(
  'personals/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await personalService.updatePersonal(id, token)
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

// Delete user personal facts
export const deletePersonal = createAsyncThunk(
  'personals/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await personalService.deletePersonal(id, token)
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

export const personalSlice = createSlice({
  name: 'personal',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPersonal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createPersonal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.personals.push(action.payload)
      })
      .addCase(createPersonal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getPersonals.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPersonals.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.personals = action.payload
      })
      .addCase(getPersonals.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(updatePersonal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePersonal.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.personals = state.educations.filter(
          (personal) => personal._id === action.payload.id
        )
      })
      .addCase(updatePersonal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePersonal.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePersonal.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.personals = state.personals.filter(
          (personal) => personal._id !== action.payload.id
        )
      })
      .addCase(deletePersonal.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = personalSlice.actions
export default personalSlice.reducer