import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import experienceService from './experienceService'

const initialState = {
  experiences: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new experience data
export const createExperience = createAsyncThunk(
  'experiences/create',
  async (experienceData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await experienceService.createExperience(experienceData, token)
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

// Get user experience
export const getExperiences = createAsyncThunk(
  'experiences/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await experienceService.getExperiences(token)
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

//update user experience
export const updateExperience = createAsyncThunk(
  'experiences/update',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await experienceService.updateExperience(id, token)
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

// Delete user experience
export const deleteExperience = createAsyncThunk(
  'experiences/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await experienceService.deleteExperience(id, token)
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

export const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder

    // Reducer cases for creating experiences. Goes through possible states and actions
      .addCase(createExperience.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createExperience.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.educations.push(action.payload)
      })
      .addCase(createExperience.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    
    // Reducer cases for getting-retrieving experiences. Goes through possible states and actions
      .addCase(getExperiences.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getExperiences.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.educations = action.payload
      })
      .addCase(getExperiences.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

 // Reducer cases for updating experiences. Goes through possible states and actions
      .addCase(updateExperience.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.experiences = state.experiences.filter(
          (experience) => experience._id === action.payload.id
        )
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })

 // Reducer cases for deleting experiences. Goes through possible states and actions
      .addCase(deleteExperience.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.Experiences = state.experiences.filter(
          (experience) => experience._id !== action.payload.id
        )
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = experienceSlice.actions
export default experienceSlice.reducer