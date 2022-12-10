import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import educationService from './educationService'

const initialState = {
  educations: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new education
export const createEducation = createAsyncThunk(
  'educations/create',
  async (educationData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await educationService.createEducation(educationData, token)
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

// Get user education
export const getEducations = createAsyncThunk(
  'educations/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await educationService.getEducations(token)
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

//update user education
export const updateEducation = createAsyncThunk(
  'educations/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await educationService.updateEducation(id, token)
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

// Delete user education
export const deleteEducation = createAsyncThunk(
  'educations/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await educationService.deleteEducation(id, token)
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

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEducation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEducation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.educations.push(action.payload)
      })
      .addCase(createEducation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getEducations.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEducations.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.educations = action.payload
      })
      .addCase(getEducations.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateEducation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateEducation.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.educations = state.educations.filter(
          (education) => education._id === action.payload.id
        )
      })
      .addCase(updateEducation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

      .addCase(deleteEducation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEducation.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Educations = state.educations.filter(
          (education) => education._id !== action.payload.id
        )
      })
      .addCase(deleteEducation.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = educationSlice.actions
export default educationSlice.reducer